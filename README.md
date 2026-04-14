# nomadjames-website

James Dishman’s portfolio site, built with Next.js.

## Core commands

```bash
npm run dev
npm run build
npm run lint
```

## Public Clarence graph workflow

The public Clarence graph must stay anonymous. The shipped JSON is allowed to expose only:
- node id
- node type
- connection count
- edges
- aggregate stats

It must never ship node names, descriptions, labels, or source-name fields.

### One-command refresh

```bash
npm run refresh:clarence-graph
```

That command does three things in order:
1. Regenerates `public/clarence-graph/graph-data.json` from the local Clarence DB
2. Verifies the export contains no node names or source fields
3. Runs a production build

### Individual steps

```bash
npm run generate:clarence-graph
npm run verify:clarence-graph
npm run build
```

### Default Clarence DB path

The graph generator reads from:

```bash
~/.openclaw/workspace/memory/clarence.db
```

If you need a different DB or output path, call the script directly:

```bash
python3 scripts/generate-clarence-graph.py /path/to/clarence.db /path/to/output.json
python3 scripts/verify-clarence-graph.py /path/to/output.json
```

## Safety rule for future updates

If the graph is refreshed, run `npm run refresh:clarence-graph` before commit or deploy. Do not ship a graph export that includes entity names.
