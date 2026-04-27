#!/usr/bin/env python3
"""
Generate public/data/clarence-pulse.json from live Clarence system data.

This script queries the Clarence memory database and Hermes infrastructure
to produce a sanitized public JSON file for the /lab/pulse page.

SANITIZATION RULES:
- No memory text, work titles, work descriptions
- No file paths, channel names, or precise timestamps
- Only aggregate counts and public-safe metadata
- Agent names/roles are public (already on portfolio)

Usage:
    python scripts/generate-clarence-pulse.py

Scheduling:
    This can be run via Hermes cron or as a pre-build step.
    See ~/.hermes/cron/jobs.json for scheduling examples.
"""

import json
import os
import sqlite3
from datetime import datetime, timezone
from pathlib import Path

# Paths
CLARENCE_DB = Path.home() / ".openclaw/workspace/memory/clarence.db"
HERMES_SKILLS = Path.home() / ".hermes/skills"
HERMES_CRON = Path.home() / ".hermes/cron/jobs.json"
OUTPUT_FILE = Path(__file__).parent.parent / "public/data/clarence-pulse.json"


def get_db_stats(conn: sqlite3.Connection) -> dict:
    """Get sanitized aggregate stats from Clarence DB."""
    cursor = conn.cursor()

    # Active memories by type
    cursor.execute("""
        SELECT type, COUNT(*)
        FROM memories
        WHERE status = 'active'
        GROUP BY type
    """)
    memory_types = dict(cursor.fetchall())

    # Active facts count
    cursor.execute("SELECT COUNT(*) FROM facts WHERE status = 'active'")
    facts_count = cursor.fetchone()[0]

    # Entities count
    cursor.execute("SELECT COUNT(*) FROM entities")
    entities_count = cursor.fetchone()[0]

    # Entity relations count
    cursor.execute("SELECT COUNT(*) FROM entity_relations")
    relations_count = cursor.fetchone()[0]

    # Vault notes indexed
    cursor.execute("SELECT COUNT(*) FROM vault_notes")
    vault_notes_count = cursor.fetchone()[0]

    # Sessions in last 30 days
    cursor.execute("""
        SELECT COUNT(*) FROM sessions
        WHERE started_at > (unixepoch() - 30*24*60*60)
    """)
    sessions_30d = cursor.fetchone()[0]

    # Work items by type (just counts, no titles/descriptions)
    cursor.execute("""
        SELECT type, COUNT(*)
        FROM work_items
        GROUP BY type
    """)
    work_types = dict(cursor.fetchall())

    # Most recent session (for heartbeat)
    cursor.execute("""
        SELECT started_at FROM sessions
        ORDER BY started_at DESC LIMIT 1
    """)
    last_session_row = cursor.fetchone()
    last_session_ts = last_session_row[0] if last_session_row else None

    # Retrieval feedback entries
    cursor.execute("SELECT COUNT(*) FROM retrieval_feedback")
    feedback_count = cursor.fetchone()[0]

    return {
        "memory_types": memory_types,
        "facts_count": facts_count,
        "entities_count": entities_count,
        "relations_count": relations_count,
        "vault_notes_count": vault_notes_count,
        "sessions_30d": sessions_30d,
        "work_types": work_types,
        "last_session_ts": last_session_ts,
        "feedback_count": feedback_count,
    }


def get_hermes_stats() -> dict:
    """Get Hermes infrastructure stats."""
    # Count skill files
    skills_count = 0
    if HERMES_SKILLS.exists():
        skills_count = len(list(HERMES_SKILLS.glob("**/*.md")))

    # Count active cron jobs
    cron_jobs = 0
    if HERMES_CRON.exists():
        try:
            with open(HERMES_CRON) as f:
                payload = json.load(f)
                if isinstance(payload, list):
                    jobs = payload
                elif isinstance(payload, dict):
                    jobs = payload.get("jobs", [])
                else:
                    jobs = []
                cron_jobs = sum(1 for job in jobs if isinstance(job, dict) and job.get("enabled") is True)
        except (json.JSONDecodeError, IOError):
            pass

    return {
        "skills_count": skills_count,
        "cron_jobs": cron_jobs,
    }


def freshness_bucket(ts: int | None, now: datetime) -> str | None:
    if not ts:
        return None
    delta_seconds = max(0, int((now - datetime.fromtimestamp(ts, tz=timezone.utc)).total_seconds()))
    if delta_seconds < 24 * 60 * 60:
        return "today"
    if delta_seconds < 7 * 24 * 60 * 60:
        return "this_week"
    if delta_seconds < 30 * 24 * 60 * 60:
        return "this_month"
    return "older"


def generate_pulse() -> dict:
    """Generate the complete pulse data structure."""
    now = datetime.now(timezone.utc)

    # Connect to Clarence DB
    if not CLARENCE_DB.exists():
        raise FileNotFoundError(f"Clarence DB not found: {CLARENCE_DB}")

    conn = sqlite3.connect(CLARENCE_DB)
    try:
        db_stats = get_db_stats(conn)
    finally:
        conn.close()

    hermes_stats = get_hermes_stats()

    # Calculate uptime from the current Clarence/Hermes system start.
    # The live production system story begins on 2026-03-20.
    system_start = datetime(2026, 3, 20, tzinfo=timezone.utc)
    uptime_days = max(0, (now - system_start).days)

    # Build heartbeat with coarse freshness only, not exact timestamps
    heartbeat = {
        "status": "online",
        "uptime_days": uptime_days,
        "recent_activity": freshness_bucket(db_stats["last_session_ts"], now),
    }

    # Build knowledge stats
    knowledge_stats = {
        "active_facts": db_stats["facts_count"],
        "active_memories": sum(db_stats["memory_types"].values()),
        "memory_breakdown": db_stats["memory_types"],
        "indexed_vault_notes": db_stats["vault_notes_count"],
        "total_entities": db_stats["entities_count"],
        "entity_relations": db_stats["relations_count"],
    }

    # Build system vitals
    system_vitals = {
        "hermes_skills": hermes_stats["skills_count"],
        "cron_jobs_active": hermes_stats["cron_jobs"],
        "retrieval_feedback_entries": db_stats["feedback_count"],
    }

    # Build activity summary (sanitized - just counts)
    activity_summary = {
        "sessions_last_30_days": db_stats["sessions_30d"],
        "work_items_by_type": db_stats["work_types"],
    }

    # Architecture info (static, public). Values reflect the current hybrid
    # stack as of April 14, 2026: Hermes orchestrates, GPT-5.4 via the
    # openai-codex provider is the primary runtime, Claude Code and Claude.ai
    # operate as specialist and peer reasoning surfaces through MCP bridges,
    # and clarence.db uses sqlite-vec for in-process vector retrieval.
    architecture = {
        "orchestrator": "Hermes",
        "primary_model": "GPT-5.4 via Codex",
        "specialist_lane": "Claude Code + Claude.ai (MCP)",
        "memory_backend": "SQLite + sqlite-vec",
    }

    # Public endpoints
    public_endpoints = {
        "knowledge_graph": "/clarence-graph/",
        "case_study": "/portfolio/clarence",
    }

    return {
        "version": "1.2",
        "generated_date": now.strftime("%Y-%m-%d"),
        "freshness": "daily",
        "description": "Public-safe Clarence system pulse. No private memory content, work titles, file paths, or precise timestamps are exposed.",
        "heartbeat": heartbeat,
        "knowledge_stats": knowledge_stats,
        "system_vitals": system_vitals,
        "activity_summary": activity_summary,
        "architecture": architecture,
        "public_endpoints": public_endpoints,
    }


def main():
    print(f"Generating Clarence pulse data...")
    print(f"  DB: {CLARENCE_DB}")
    print(f"  Output: {OUTPUT_FILE}")

    pulse = generate_pulse()

    # Ensure output directory exists
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)

    # Write JSON
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(pulse, f, indent=2)

    print(f"  Generated date: {pulse['generated_date']}")
    print(f"  Facts: {pulse['knowledge_stats']['active_facts']}")
    print(f"  Memories: {pulse['knowledge_stats']['active_memories']}")
    print(f"  Entities: {pulse['knowledge_stats']['total_entities']}")
    print(f"  Skills: {pulse['system_vitals']['hermes_skills']}")
    print("Done.")


if __name__ == "__main__":
    main()
