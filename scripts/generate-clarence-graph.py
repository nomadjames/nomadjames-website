#!/usr/bin/env python3
"""
Generate a public-safe Clarence graph export for nomadjames.com.

This exporter is intentionally stricter than the internal Clarence graph tools.
It strips entity names from the shipped JSON and outputs only anonymous structure:
- node id
- node type
- connection count
- edges
- aggregate stats

Usage:
    python3 scripts/generate-clarence-graph.py
    python3 scripts/generate-clarence-graph.py [DB_PATH] [OUTPUT_PATH] [--dry-run]

Defaults:
    DB_PATH:     ~/.openclaw/workspace/memory/clarence.db
    OUTPUT_PATH: ./public/clarence-graph/graph-data.json
"""

from __future__ import annotations

import ast
import json
import os
import sqlite3
import sys
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

DEFAULT_DB = os.path.expanduser("~/.openclaw/workspace/memory/clarence.db")
DEFAULT_OUTPUT = "./public/clarence-graph/graph-data.json"

IMPLICIT_EDGE_KEYS = frozenset([
    "used_in",
    "developer",
    "affiliation",
    "related_to",
    "related_concept",
    "related_topics",
    "instructor",
    "cited_in",
    "referenced_in",
    "related_course",
])

PUBLIC_FIGURE_KEYWORDS = [
    "researcher", "author", "developer", "composer", "musician",
    "professor", "designer",
]

SENSITIVE_TERMS = [
    "email", "phone", "address", "salary", "income", "pardon",
    "alcohol", "drug", "health", "medical", "password", "token",
    "secret", "ssn", "criminal", "conviction", "therapy",
    "depression", "burnout",
]

BLOCKED_NAME_FRAGMENTS = ["james", "dishman"]


def _contains_any(text: str | None, terms: list[str]) -> bool:
    if not text:
        return False
    lower = text.lower()
    return any(term in lower for term in terms)


def _is_public_figure(description: str | None) -> bool:
    if not description:
        return False
    lower = description.lower()
    return any(keyword in lower for keyword in PUBLIC_FIGURE_KEYWORDS)


def _should_strip_entity(entity_type: str | None, name: str | None, description: str | None) -> bool:
    name_lower = (name or "").lower()

    if any(fragment in name_lower for fragment in BLOCKED_NAME_FRAGMENTS):
        return True

    if "__merged" in (name or ""):
        return True

    if _contains_any(name, SENSITIVE_TERMS) or _contains_any(description, SENSITIVE_TERMS):
        return True

    if (entity_type or "") == "person" and not _is_public_figure(description):
        return True

    return False


def _parse_fact_values(value: str | None) -> list[str]:
    if not value:
        return []

    value = value.strip()

    if value.startswith("["):
        try:
            parsed = ast.literal_eval(value)
            if isinstance(parsed, list):
                return [str(item).strip() for item in parsed if str(item).strip()]
        except (ValueError, SyntaxError):
            pass

    if "," in value:
        return [item.strip() for item in value.split(",") if item.strip()]

    if " " in value:
        return [item.strip() for item in value.split() if item.strip()]

    return [value]


def export_graph(db_path: str) -> dict:
    if not os.path.exists(db_path):
        raise FileNotFoundError(f"Clarence DB not found: {db_path}")

    conn = sqlite3.connect(f"file:{db_path}?mode=ro", uri=True)
    conn.row_factory = sqlite3.Row

    try:
        entity_rows = conn.execute(
            "SELECT id, type, name, description FROM entities"
        ).fetchall()

        kept_ids: set[int] = set()
        stripped_count = 0
        nodes_raw: list[dict] = []

        for row in entity_rows:
            entity_id = row["id"]
            entity_type = row["type"]
            name = row["name"]
            description = row["description"]

            if _should_strip_entity(entity_type, name, description):
                stripped_count += 1
                continue

            kept_ids.add(entity_id)
            nodes_raw.append({
                "id": entity_id,
                "_source_name": name,
                "type": entity_type,
            })

        edge_rows = conn.execute(
            "SELECT from_entity, relation, to_entity "
            "FROM entity_relations WHERE status = 'active'"
        ).fetchall()

        edges: list[dict] = []
        existing_edge_keys: set[tuple[int, int, str]] = set()

        for row in edge_rows:
            from_id = row["from_entity"]
            to_id = row["to_entity"]
            relation = row["relation"]

            if from_id in kept_ids and to_id in kept_ids:
                edge_key = (from_id, to_id, relation)
                if edge_key not in existing_edge_keys:
                    existing_edge_keys.add(edge_key)
                    edges.append({
                        "from": from_id,
                        "to": to_id,
                        "relation": relation,
                        "implicit": False,
                    })

        name_to_id: dict[str, int] = {}
        for node in nodes_raw:
            source_name = node.get("_source_name")
            if source_name:
                name_to_id[source_name.lower()] = node["id"]

        placeholders = ",".join("?" for _ in IMPLICIT_EDGE_KEYS)
        fact_rows = conn.execute(
            f"SELECT entity_id, key, value FROM facts "
            f"WHERE status = 'active' AND key IN ({placeholders})",
            list(IMPLICIT_EDGE_KEYS),
        ).fetchall()

        implicit_added = 0
        for row in fact_rows:
            from_id = row["entity_id"]
            fact_key = row["key"]
            value = row["value"]

            if from_id not in kept_ids or not value:
                continue

            for candidate in _parse_fact_values(value):
                to_id = name_to_id.get(candidate.strip().lower())
                if to_id is None or to_id == from_id or to_id not in kept_ids:
                    continue

                edge_key = (from_id, to_id, fact_key)
                if edge_key in existing_edge_keys:
                    continue

                existing_edge_keys.add(edge_key)
                edges.append({
                    "from": from_id,
                    "to": to_id,
                    "relation": fact_key,
                    "implicit": True,
                })
                implicit_added += 1

        connection_counts: Counter[int] = Counter()
        for edge in edges:
            connection_counts[edge["from"]] += 1
            connection_counts[edge["to"]] += 1

        nodes = [
            {
                "id": node["id"],
                "type": node["type"],
                "connections": connection_counts.get(node["id"], 0),
            }
            for node in nodes_raw
        ]

        type_counts: Counter[str] = Counter(node["type"] for node in nodes)

        return {
            "generated": datetime.now(timezone.utc).isoformat(),
            "sanitized": True,
            "nodes": nodes,
            "edges": edges,
            "stats": {
                "total_nodes": len(nodes),
                "total_edges": len(edges),
                "entity_types": dict(sorted(type_counts.items(), key=lambda item: -item[1])),
                "entities_stripped": stripped_count,
                "implicit_edges_added": implicit_added,
            },
        }
    finally:
        conn.close()


def main() -> None:
    dry_run = "--dry-run" in sys.argv
    args = [arg for arg in sys.argv[1:] if arg != "--dry-run"]

    db_path = args[0] if len(args) >= 1 else DEFAULT_DB
    output_path = args[1] if len(args) >= 2 else DEFAULT_OUTPUT

    graph = export_graph(db_path)

    print("Generating public Clarence graph export...")
    print(f"  DB: {db_path}")
    print(f"  Output: {output_path}")
    print(f"  Nodes: {graph['stats']['total_nodes']}")
    print(f"  Edges: {graph['stats']['total_edges']}")
    print(f"  Entities stripped: {graph['stats']['entities_stripped']}")
    print(f"  Implicit edges added: {graph['stats']['implicit_edges_added']}")

    if dry_run:
        print("  Dry run only, no file written.")
        return

    out = Path(output_path)
    out.parent.mkdir(parents=True, exist_ok=True)
    with open(out, "w", encoding="utf-8") as handle:
        json.dump(graph, handle, indent=2, ensure_ascii=False)
    print(f"  Wrote: {out}")


if __name__ == "__main__":
    main()
