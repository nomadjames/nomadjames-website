#!/usr/bin/env python3
"""
Verify that the public Clarence graph export stays anonymous.

Checks:
- graph-data.json exists and parses
- every node has only public-safe fields
- no node contains name-like source fields
- edges reference existing node ids
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

DEFAULT_GRAPH = Path("./public/clarence-graph/graph-data.json")
ALLOWED_NODE_KEYS = {"id", "type", "connections"}
FORBIDDEN_NODE_KEYS = {"name", "label", "description", "_source_name"}


def main() -> None:
    graph_path = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_GRAPH
    if not graph_path.exists():
        raise FileNotFoundError(f"Graph export not found: {graph_path}")

    with open(graph_path, "r", encoding="utf-8") as handle:
        payload = json.load(handle)

    nodes = payload.get("nodes", [])
    edges = payload.get("edges", [])
    node_ids = set()

    for index, node in enumerate(nodes):
        node_keys = set(node.keys())
        forbidden = node_keys & FORBIDDEN_NODE_KEYS
        if forbidden:
            raise ValueError(f"Node {index} contains forbidden keys: {sorted(forbidden)}")

        extra = node_keys - ALLOWED_NODE_KEYS
        if extra:
            raise ValueError(f"Node {index} contains unexpected keys: {sorted(extra)}")

        if not {"id", "type", "connections"}.issubset(node_keys):
            raise ValueError(f"Node {index} is missing required keys")

        node_ids.add(node["id"])

    for index, edge in enumerate(edges):
        if edge.get("from") not in node_ids or edge.get("to") not in node_ids:
            raise ValueError(f"Edge {index} references missing node ids")

    print(f"Verified public Clarence graph: {len(nodes)} nodes, {len(edges)} edges, no node names present.")


if __name__ == "__main__":
    main()
