#!/usr/bin/env python3
"""
Generate src/data/clarence-stats.json from live Clarence system data.

Unlike generate-clarence-pulse.py, which runs daily via cron and holds the
live-ish activity fields, this script is meant to be run manually when you
want to bump the "verified on" snapshot of the headline numbers used by
the Clarence case study and the /lab/pulse architecture surface.

The verified_date and verified_label fields in clarence-stats.json exist
precisely to signal human verification of a moment-in-time snapshot. Running
this script auto-bumps them to the current date, so only run when you
actually want to re-verify the numbers and push a fresh snapshot.

Usage:
    python3 scripts/generate-clarence-stats.py

Non-DB fields (discord_channels) are preserved from the existing file.
If no existing file is found, discord_channels defaults to DEFAULT_DISCORD_CHANNELS.
"""

import json
import sqlite3
from datetime import datetime, timezone
from pathlib import Path

CLARENCE_DB = Path.home() / ".openclaw/workspace/memory/clarence.db"
OUTPUT_FILE = Path(__file__).parent.parent / "src/data/clarence-stats.json"
DEFAULT_DISCORD_CHANNELS = 13


def get_db_stats() -> dict:
    """Query clarence.db for the headline counts used on the case study."""
    if not CLARENCE_DB.exists():
        raise FileNotFoundError(f"Clarence DB not found: {CLARENCE_DB}")

    conn = sqlite3.connect(f"file:{CLARENCE_DB}?mode=ro", uri=True)
    try:
        cursor = conn.cursor()

        cursor.execute("SELECT COUNT(*) FROM memories WHERE status = 'active'")
        active_memories = cursor.fetchone()[0]

        cursor.execute("SELECT COUNT(*) FROM memories")
        total_memories = cursor.fetchone()[0]

        cursor.execute("SELECT COUNT(*) FROM facts WHERE status = 'active'")
        active_facts = cursor.fetchone()[0]

        cursor.execute("SELECT COUNT(*) FROM facts")
        total_facts = cursor.fetchone()[0]

        cursor.execute("SELECT COUNT(*) FROM entities")
        entities = cursor.fetchone()[0]

        cursor.execute("SELECT COUNT(*) FROM vault_notes")
        indexed_vault_notes = cursor.fetchone()[0]

        return {
            "active_memories": active_memories,
            "total_memories": total_memories,
            "entities": entities,
            "active_facts": active_facts,
            "total_facts": total_facts,
            "indexed_vault_notes": indexed_vault_notes,
        }
    finally:
        conn.close()


def load_existing() -> dict:
    """Load the current stats file so we can preserve non-DB fields."""
    if not OUTPUT_FILE.exists():
        return {}
    try:
        with open(OUTPUT_FILE) as f:
            return json.load(f)
    except (json.JSONDecodeError, IOError):
        return {}


def format_verified_label(dt: datetime) -> str:
    """Format as 'April 20, 2026'. Uses %-d which is Linux-only and fine here."""
    return dt.strftime("%B %-d, %Y")


def main() -> None:
    print("Generating Clarence stats snapshot...")
    print(f"  DB: {CLARENCE_DB}")
    print(f"  Output: {OUTPUT_FILE}")

    existing = load_existing()
    db_stats = get_db_stats()

    now = datetime.now(timezone.utc)
    verified_date = now.strftime("%Y-%m-%d")
    verified_label = format_verified_label(now)

    discord_channels = existing.get("discord_channels", DEFAULT_DISCORD_CHANNELS)

    stats = {
        "verified_date": verified_date,
        "verified_label": verified_label,
        "active_memories": db_stats["active_memories"],
        "total_memories": db_stats["total_memories"],
        "entities": db_stats["entities"],
        "active_facts": db_stats["active_facts"],
        "total_facts": db_stats["total_facts"],
        "indexed_vault_notes": db_stats["indexed_vault_notes"],
        "discord_channels": discord_channels,
    }

    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_FILE, "w") as handle:
        json.dump(stats, handle, indent=2)
        handle.write("\n")

    if existing:
        print(f"  Previous verified_date: {existing.get('verified_date', 'unknown')}")
    print(f"  New verified_date:      {verified_date}")
    print(f"  Active memories:        {stats['active_memories']:,}")
    print(f"  Total memories:         {stats['total_memories']:,}")
    print(f"  Entities:               {stats['entities']:,}")
    print(f"  Active facts:           {stats['active_facts']:,}")
    print(f"  Total facts:            {stats['total_facts']:,}")
    print(f"  Indexed vault notes:    {stats['indexed_vault_notes']:,}")
    print(f"  Discord channels:       {stats['discord_channels']} (preserved from existing)")
    print()
    print("Done. Review, then commit src/data/clarence-stats.json to publish the new snapshot.")


if __name__ == "__main__":
    main()
