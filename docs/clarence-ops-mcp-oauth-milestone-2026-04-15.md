# Clarence Ops MCP OAuth Milestone

Date: 2026-04-15
Status: shipped

## What changed

Claude.ai can now connect to a write-capable Clarence Ops MCP through a real OAuth flow instead of relying on James as the manual relay.

This was done without replacing Hermes. The new lane is a thin OAuth front door in front of the existing ops bridge.

## Final architecture

Claude.ai
-> OAuth discovery and auth flow
-> separate public tunnel
-> FastAPI OAuth shim on `127.0.0.1:8768`
-> existing Streamable HTTP ops bridge on `127.0.0.1:8767`
-> Hermes API on `127.0.0.1:8642`

## Why this mattered

The existing read-only memory connector was already enough to let Claude inspect Clarence safely. The missing piece was operations: dispatching tasks, reading approved files, writing to approved repos, listing cron jobs, and triggering cron jobs without James relaying every step manually.

That made auth the hard part. A public unauthenticated write-capable MCP was off the table.

## What made Claude.ai accept the connector

The first public OAuth attempt was reachable, but Claude.ai stopped after reading discovery metadata. It never reached the authorize redirect.

The fix was not the obvious basics like `S256`, `code`, or absolute URLs. Those were already right.

The working shape needed several compatibility details:
- `registration_endpoint`
- a real `/oauth/register` implementation
- root protected-resource metadata in the auth challenge
- CORS headers on relevant responses
- explicit `OPTIONS` handling
- `response_modes_supported`
- `resource_parameter_supported`
- OIDC discovery alias support

The practical lesson is simple: even if Claude.ai offers static client credentials in the UI, you should not assume that static credentials alone are enough for the full preflight path.

## Verification

The final lane passed:
- public health check
- OAuth discovery
- auth page load
- code exchange
- authenticated MCP initialize
- authenticated tools/list
- real Claude.ai connector traffic after login

## Security boundary

- Hermes still owns memory writes
- the OAuth shim only fronts the existing ops bridge
- the older Cloudflare Access lane remains separate for admin and service-token testing
- no secrets belong in public repo docs

## Why I care about this milestone

This is the first time the system crossed from "I built a memory-heavy AI stack" into "two different AI systems can collaborate directly on the live machine through a bounded, authenticated lane." That is not theater. It changes how much iteration can happen without dragging the human through every handoff.
