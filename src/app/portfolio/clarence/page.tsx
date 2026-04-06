import styles from "../accessibility-audit/page.module.css";
import cs from "./page.module.css";
import Tldr from "@/components/Tldr";
import PretextTitle from "@/components/PretextTitle";

export const metadata = {
  title: "Clarence: Designing an Autonomous AI Collaborator | James Dishman",
  description:
    "A systems design case study on building Clarence, a named, autonomous AI assistant with a SQLite knowledge database spanning 4,215 memories, 2,474 entities, 14,882 facts, and 2,074 indexed vault notes with full vector search, multi-model routing across 4 MCP servers, conversation distillation pipeline, session lifecycle hooks, and a nightly autonomous pipeline. Built on OpenClaw, migrated under constraint to Hermes, and still evolving.",
};

export default function ClarencePage() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Back link */}
        <a href="/portfolio" className={styles.backLink}>← Work</a>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.category}>Systems Design</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span className={styles.year}>2026</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span className={cs.context}>Independent Research · Ongoing</span>
          </div>
          <PretextTitle text={"Clarence:\nDesigning an Autonomous AI Collaborator"} className={styles.title} />
          <div className={styles.methods}>
            {[
              "Agent Orchestration",
              "Multi-Model Routing",
              "Knowledge Base Architecture",
              "Hermes Gateway",
              "MCP Bridge Architecture",
              "Claude Opus 4.6",
              "Claude Sonnet",
              "Claude Code CLI",
              "MiniMax M2.7 (Ollama)",
              "Session Lifecycle Hooks",
              "Conversation Distillation",
              "Telegram API",
              "Discord Webhooks",
              "Tailscale VPN",
              "Self-Improving Systems",
              "Human-in-the-Loop Design",
              "Semantic Vector Search (RAG)",
              "Platform Migration Under Constraint",
            ].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        <Tldr>
          I built an autonomous AI system that manages a knowledge base of 4,215 memories, 2,474 entities, and 14,882 facts with full vector search across 2,074 indexed vault notes, routes tasks across multiple models by cost and capability, syncs coursework from Google Drive, and posts reports to 9 Discord channels. Then the platform I built it on changed the rules, and I had to migrate the entire system under constraint in 48 hours. The real lesson was not about automation. It was about trust calibration, platform dependency, and what happens when you design a collaborator instead of a tool.
        </Tldr>

        {/* Stats bar */}
        <div className={cs.statsBar}>
          <div className={cs.stat}>
            <span className={cs.statNum}>14,882</span>
            <span className={cs.statLabel}>Facts in knowledge DB</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>4,215</span>
            <span className={cs.statLabel}>Memories in knowledge DB</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>62%</span>
            <span className={cs.statLabel}>Bootstrap memory reduction</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>9</span>
            <span className={cs.statLabel}>Discord channels</span>
          </div>
        </div>

        {/* Live Knowledge Graph */}
        <div className={cs.graphSection}>
          <div className={cs.graphHeader}>
            <span className={cs.graphTitle}>Live Knowledge Graph</span>
            <span className={cs.graphCaption}>2,287 entities · 337 connections · hover and scroll to explore</span>
          </div>
          <iframe
            src="/clarence-graph/"
            title="Clarence Knowledge Graph Visualization"
            loading="lazy"
            className={cs.graphFrame}
          />
        </div>

        {/* Design Question */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The Design Question</h2>
          <p className={styles.body}>
            Most AI tools are responsive. You ask, they answer. The interaction ends and nothing persists except
            a chat log. That model is useful, but it is not collaboration.
          </p>
          <p className={styles.body}>
            The question I set out to explore: <strong>what does it mean to design a genuine collaborator
            rather than a responsive tool?</strong> A collaborator has agency. It acts when you are not watching.
            It accumulates context over time. It knows your priorities well enough to exercise judgment about
            what matters without being asked every time.
          </p>
          <p className={styles.body}>
            Clarence is my attempt to answer that question in practice. It is not a chatbot. It is an autonomous
            system running on the Hermes agent gateway with Claude Code as the primary interface, after a forced
            migration from OpenClaw when Anthropic changed the rules on third-party harnesses. It routes tasks across
            multiple models based on cost and capability, maintains a knowledge base of over 14,000 facts and 4,000
            memories with semantic vector search, syncs coursework and research from Google Drive into an indexed
            Obsidian vault, posts briefings to Discord before I wake up, and writes session handoff notes so the
            next conversation picks up where the last one left off.
          </p>
          <p className={styles.body}>
            I am both the designer and the primary user of this system. That dual position is unusual, and worth
            examining explicitly as part of this case study.
          </p>
        </section>

        {/* Agentic UX: Mapping to Industry Patterns */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Agentic UX: Where This Fits in the Industry</h2>
          <p className={styles.body}>
            In 2025 and 2026, a new design discipline is forming around multi-agent AI systems. Job titles
            like &ldquo;Agentic UX Designer&rdquo; and &ldquo;Agent Experience Designer&rdquo; are appearing
            at companies like Deloitte, Anthropic, and Microsoft. Research teams at Microsoft (Magentic-UI),
            Salesforce (SLDS 2), and Google (A2UI) are defining the design patterns for human-agent
            collaboration. I built Clarence before these patterns had names. Mapping what I built to
            the emerging vocabulary is useful because it shows the reasoning was design-driven, not
            borrowed from a framework.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Orchestrator-Specialist Pattern</h3>
            <p className={styles.body}>
              The dominant architecture in multi-agent systems: a supervisor agent delegates to
              specialized agents. In Clarence, the orchestrator routes to named agents, each with a fixed role, a
              designated model tier, and a constrained scope. The pattern is identical to what Microsoft
              Research describes in Magentic-UI. The difference is that Clarence was built from operational need, not from a reference
              architecture.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Transparent Planning</h3>
            <p className={styles.body}>
              Microsoft&apos;s design guidance for agents emphasizes that users need to see what the agent
              is planning before it acts. Clarence implements this through WORKING.md (a live state file
              that any agent can read), the knowledge directory (structured files visible from any device
              via Brain Reader), the Acknowledge First rule (every task gets a plan and time estimate
              before execution begins), and HANDOFF.md (session continuity notes written at session end, loaded at session start). These are not dashboards. They are working documents that serve
              both the human and the agents.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Memory Management as UX</h3>
            <p className={styles.body}>
              The AgentOps and AutoGen ecosystems are building toward &ldquo;memory cards&rdquo; and
              preference editors for agent systems. Clarence&apos;s memory architecture predates these:
              the conversation distillation pipeline, the entity-fact-memory schema, the Obsidian vault
              sync, and the RAG retrieval layer are all implementations of the same principle. The user&apos;s
              corrections and preferences should persist across sessions without the user having to
              re-state them. The design question is not whether to give agents memory. It is how to make
              that memory visible, editable, and trustworthy.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Adaptive Model Routing</h3>
            <p className={styles.body}>
              Industry patterns describe routing between fast/cheap agents and powerful/expensive agents
              based on task complexity. Clarence implements this as a tiered model policy: MiniMax for
              mechanical tasks, Sonnet for reasoning, Opus for synthesis and interactive sessions. The
              routing is explicit and documented. The lesson from operating this: adaptive
              routing requires continuous calibration. A task that seems mechanical can require reasoning
              depth that only becomes apparent after the cheaper model fails.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Debate-Consensus (R&D Council)</h3>
            <p className={styles.body}>
              Multi-agent debate is an emerging pattern where multiple agents with different perspectives
              evaluate the same question. The R&D Council implements this with five fixed lenses: market
              analysis (Atlas), UX research (Iris), technical architecture (Newton), product strategy
              (Vesper), and devil&apos;s advocate (Raven). Two rounds of debate, then Opus synthesizes.
              The design intent is to surface disagreement, not consensus. When all five agents agree,
              the insight is usually obvious. When they disagree, the synthesis reveals something worth
              examining.
            </p>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>System Architecture</h2>
          <p className={styles.body}>
            The full stack has five layers. Each layer reflects a specific design decision, not just a technical
            choice.
          </p>

          <div className={cs.archDiagram}>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Interface</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNodeAccent}>Claude Code CLI</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Telegram (Franklin)</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Discord Webhooks</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Tailscale VPN</span>
              </div>
              <p className={cs.archDiagramNote}>
                Claude Code CLI is the primary interface, running on the Anthropic Max subscription.
                Telegram provides mobile access through Franklin (@FranklintheOGBot on Hermes). The original
                OpenClaw bot has been decommissioned. Discord serves as the notification and reporting surface
                with 9 channels. All device access runs over a Tailscale private mesh network.
              </p>
            </div>

            <div className={cs.archDiagramConnector}>↓</div>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Orchestration</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNodeAccent}>Hermes Gateway</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>MCP Servers (4)</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Agent Crew</span>
              </div>
              <p className={cs.archDiagramNote}>
                The Hermes gateway handles session management, Telegram, and agent dispatching.
                Four MCP servers provide tool access: a custom bridge server connects Claude Code to Hermes
                and MiniMax, plus Tavily (web search and extraction), Perplexity (AI-powered research via Pro
                subscription), and a web search server (DuckDuckGo and Gemini). The bridge exposes four tools:
                read_memory (loads persistent context), delegate_task (routes to Clarence on Opus through Hermes),
                delegate_trinity (routes to Arcee Trinity Large 400B on OpenRouter, free), and delegate_minimax
                (routes to MiniMax 2.7 via Ollama, free). Session startup runs session-context.py for a database
                snapshot and reads HANDOFF.md. The stop hook writes handoff notes. Zero cold starts.
              </p>
            </div>

            <div className={cs.archDiagramConnector}>↓</div>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Model Routing</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNodeAccent}>MCP Bridge</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Claude Opus (Hermes)</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Arcee Trinity 400B (OpenRouter)</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>MiniMax M2.7 (Ollama)</span>
              </div>
              <p className={cs.archDiagramNote}>
                The MCP bridge routes work to three backends based on cost and capability.
                delegate_task sends complex reasoning to Clarence on Opus through the Hermes gateway (uses
                Anthropic credits). delegate_trinity routes to Arcee Trinity Large, a 400B mixture-of-experts
                model on OpenRouter (free tier, strong for code generation). delegate_minimax sends mechanical
                work to MiniMax 2.7 via Ollama (free, local). Claude Code itself runs Opus on the Max
                subscription for direct interaction. The human or Claude Code chooses which path based on
                what the task actually requires.
              </p>
            </div>

            <div className={cs.archDiagramConnector}>↓</div>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Memory</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNodeAccent}>clarence.db + Hermes Memory</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>MCP Bridge (read_memory)</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>RAG: 3,391 memory + 10,349 fact vectors</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Obsidian Vault Sync</span>
              </div>
              <p className={cs.archDiagramNote}>
                Memory spans two tiers. The knowledge database (clarence.db, ~50MB SQLite) holds 4,215 active memories, 2,474 entities, and 14,882 facts with full vector search (sqlite-vec, all-MiniLM-L6-v2, 384-dim, fully local, 13,740 total embeddings). A daily knowledge sync pulls coursework and research from Google Drive into the Obsidian vault, then re-indexes all 2,074 vault notes into the database. The Hermes flat-file memory layer (MEMORY.md and USER.md) holds compact operational context injected into every turn. Automated garbage collection archives low-value data while preserving behavioral corrections, user facts, and decisions. The conversation distillation pipeline processes conversations, extracting durable knowledge into the DB. The vault syncs bidirectionally: writing a note in Obsidian feeds the RAG layer automatically.
              </p>
            </div>

            <div className={cs.archDiagramConnector}>↓</div>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Session</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNode}>SessionStart Hook</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Context Auto-Load</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>HANDOFF.md</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Stop Hook</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Morning Briefing</span>
              </div>
              <p className={cs.archDiagramNote}>
                Every Claude Code session starts warm. The SessionStart hook runs session-context.py for a database status snapshot, reads HANDOFF.md for notes from the previous session, checks WORKING.md for current state, and reads R&D Council priorities. The stop hook writes handoff notes. On the Hermes side, the gateway injects MEMORY.md and USER.md into every turn automatically. A morning briefing cron job at 4:45 AM posts a full context summary to Discord before James wakes up at 5 AM. Zero cold starts on either platform.
              </p>
            </div>

          </div>
        </section>

        {/* The Crew */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Agent Crew</h2>
          <p className={styles.body}>
            Naming agents was a deliberate choice. Names create identity and accountability. When a named agent
            produces output, I read it differently than I read output from an anonymous system call. The original
            system had 13 named agents. After the migration to Hermes, the operational crew was consolidated to
            the agents that were actually running: Clarence as orchestrator, Vera as chief of staff (with her own
            Telegram bot and personality file), and the five-member R&D Council. The others exist as design
            concepts to be rebuilt as the Hermes platform matures.
          </p>
          <p className={styles.body}>
            The delegation architecture follows hard rules: Clarence orchestrates, subagents execute. Every
            task gets immediate acknowledgment with a plan and time estimate. Up to five subagents run in
            parallel on independent tasks. The MCP bridge enables per-task model routing: complex reasoning
            goes to Opus, code generation to Trinity, mechanical work to MiniMax. Clarence never blocks on
            a subagent.
          </p>

          <h3 className={styles.findingTitle}>Discord Agent Identities</h3>
          <p className={styles.body}>
            The operational agents post to Discord with their own usernames and signature colors:
          </p>

          <div className={cs.agentGrid}>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Clarence</span>
              <span className={cs.agentRole}>Emerald green · Orchestrator</span>
              <p className={cs.agentDesc}>Morning briefings, self-reflection, coordination. Has a dedicated channel for thinking out loud.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Vera</span>
              <span className={cs.agentRole}>Purple · Chief of Staff</span>
              <p className={cs.agentDesc}>Coordination and oversight. Has her own channel for venting. Can post everywhere.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Bruno</span>
              <span className={cs.agentRole}>Red · Security</span>
              <p className={cs.agentDesc}>Monitors the incidents channel. Reviews leash alerts, gateway health, CVE feeds. Escalates only if status is RED.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Atlas</span>
              <span className={cs.agentRole}>Blue · R&D Council</span>
              <p className={cs.agentDesc}>Market analysis lens. Evaluates opportunities, competitive landscape, industry positioning.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Iris</span>
              <span className={cs.agentRole}>Gold · R&D Council</span>
              <p className={cs.agentDesc}>UX research lens. Evaluates design decisions, user experience implications, research methodology.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Newton</span>
              <span className={cs.agentRole}>Green · R&D Council</span>
              <p className={cs.agentDesc}>Technical architecture lens. Evaluates implementation feasibility, system design, infrastructure.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Vesper</span>
              <span className={cs.agentRole}>Teal · R&D Council</span>
              <p className={cs.agentDesc}>Product strategy lens. Evaluates sequencing, resource allocation, go-to-market timing.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Raven</span>
              <span className={cs.agentRole}>Charcoal · R&D Council</span>
              <p className={cs.agentDesc}>Devil&apos;s advocate. Challenges assumptions, identifies risks, pressure-tests consensus.</p>
            </div>

          </div>

          <h3 className={styles.findingTitle}>R&D Council</h3>
          <p className={styles.body}>
            Five-agent nightly debate panel. Each member holds a fixed analytical lens. Two debate rounds produce genuine disagreement, then Opus synthesizes an executive memo. The council has produced actionable strategic recommendations every night since March 24, 2026, including correctly identifying the Clarence case study itself as the highest-priority unwritten artifact.
          </p>
        </section>

        {/* The Overnight Loop */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The Overnight Loop</h2>
          <p className={styles.body}>
            The most consequential design element is what happens between 11 PM and 5 AM ET. The original OpenClaw system ran 14 cron jobs in this window. After the migration to Hermes, the overnight pipeline was rebuilt from scratch with a different philosophy: fewer jobs, each doing more, with results compiled before 5 AM and delivered to Discord. Nothing fires during the day. The current Hermes scheduler runs 3 active jobs, with the architecture designed to grow as capabilities are rebuilt.
          </p>

          <div className={cs.workList}>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>12:00 AM</span>
              <p className={cs.workDesc}><strong>Knowledge Sync</strong>: pulls coursework and research files from Google Drive via rclone, re-indexes all 2,074 vault notes into clarence.db, and reports results to Discord #cron-reports. This single job replaced three separate OpenClaw jobs (Drive sync, vault indexing, embedding refresh).</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:30 AM</span>
              <p className={cs.workDesc}><strong>Morning Calendar Briefing</strong>: fetches the day&apos;s calendar via Apple iCloud CalDAV, formats the schedule, and delivers to Telegram before James wakes up.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:30 AM</span>
              <p className={cs.workDesc}><strong>Daily Job Search</strong>: aggregates UX/AI/HCI opportunities and delivers results to Telegram.</p>
            </div>
          </div>

          <p className={styles.body} style={{marginTop: "1.5rem"}}>
            <strong>Evolution note:</strong> the system originally ran 26 cron jobs on OpenClaw. These were consolidated to 14 after diagnosing that Gemini Flash sub-agents were hallucinating tool calls rather than executing them. After the migration to Hermes, the pipeline was rebuilt from scratch rather than ported. The current 3 jobs each do the work of multiple predecessors. The remaining capabilities from the old pipeline (conversation distillation, R&D Council, ecosystem scanning, academic paper monitoring, security audits) are being rebuilt as the Hermes platform stabilizes. The architectural lesson across both iterations: more jobs is not better jobs. Reliability and consolidation beat breadth every time.
          </p>
        </section>

        {/* Trust Calibration */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Trust Calibration: The Real Design Problem</h2>
          <p className={styles.body}>
            The hardest design problem in this system is not technical. It is trust calibration. How much
            autonomy does the system get? When does it act without asking, and when does it wait? These
            are not engineering questions. They are design questions about human-AI collaboration, and
            they do not have permanent answers.
          </p>
          <p className={styles.body}>
            The March 25-26 changes made this concrete. Moving all cron jobs to free-tier models was
            not just a cost decision. It was a trust decision. The system initially used Gemini Flash
            for cron jobs, but tool-call hallucination failures led to a complete migration to Claude
            Sonnet and MiniMax. The lesson: cheaper models save budget but the savings vanish when the
            output is fiction. Trust in the overnight loop required models that actually execute tools
            rather than hallucinating what tool calls would look like.
          </p>
          <p className={styles.body}>
            The Acknowledge First rule is another trust calibration. Every task gets immediate acknowledgment
            with a plan and time estimate before any work begins. This was not always the case. The rule
            emerged from real friction: tasks would disappear into subagent execution with no signal back
            to me about whether they were understood correctly. The fix was not more autonomy or less
            autonomy. It was better communication at the boundary.
          </p>
          <p className={styles.body}>
            The conversation distillation pipeline is the most consequential trust mechanism. Every
            correction I make is automatically extracted and written to the
            memory DB that night. The system does not just follow instructions in the moment. It learns
            from corrections persistently. That means trust can actually increase over time because the
            system remembers what I care about, not just what I asked for today.
          </p>
          <p className={styles.body}>
            <strong>Overnight-only autonomy.</strong> All autonomous agent work runs between 11 PM and 4:45 AM ET. Nothing fires during the day. All results must be compiled before 5 AM. This is a deliberate trust boundary: the system earns autonomy in a window where errors are recoverable before they affect real-time work.
          </p>
        </section>

        {/* Infrastructure Decisions */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Infrastructure Decisions and Why</h2>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Token Budget as a Design Material</h3>
            <p className={styles.body}>
              Token cost shapes every architectural decision. The March 25-26 optimization pass made this
              explicit: self-audit prompt trimmed from 7,582 chars to 1,276 chars. Bootstrap files trimmed
              from 11 to 7 (~18KB total). Memory files reduced from 106KB to 40KB. The lightContext flag
              enabled on every cron job. The total effect: every session starts with less noise and more
              signal, and the overnight loop runs at zero model cost.
            </p>
            <p className={styles.body}>
              Model routing is now per-call rather than per-session. The MCP bridge lets Claude Code
              choose delegate_task (Opus) or delegate_minimax (free) on every individual request.
              This means routing decisions happen at the task level, not the configuration level. The
              system adapts to what each piece of work actually needs.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Single Source of Truth Architecture</h3>
            <p className={styles.body}>
              The original OpenClaw system used five symlinked sub-agent workspaces. After the Hermes migration,
              the architecture simplified: Hermes manages its own session isolation, and clarence.db remains
              the single authoritative knowledge store. IDENTITY.md was merged into SOUL.md. The pattern is consistent: eliminate
              duplication, reduce the surface area where state can diverge.
            </p>
            <p className={styles.body}>
              This matters more than it sounds. When multiple agents can write to the same knowledge base
              but read from different workspace copies, you get silent divergence. Symlinks solved this
              at the filesystem level without requiring any coordination protocol.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Bridging the Orchestrator and Model Providers</h3>
            <p className={styles.body}>
              The original system used a custom Rust API bridge to translate between OpenClaw
              and the underlying model providers. That bridge has been decommissioned. The current
              bridge is a Python MCP server that connects Claude Code to Hermes, OpenRouter, and
              Ollama via four tools: read_memory (loads persistent context), delegate_task (routes to
              Clarence on Opus through Hermes), delegate_trinity (routes to Arcee Trinity Large 400B on
              OpenRouter, free), and delegate_minimax (routes to MiniMax 2.7 via Ollama, free). Claude
              Code spawns it as a subprocess on startup. No separate configuration per agent, no API
              key management.
            </p>
            <p className={styles.body}>
              This still adds a dependency layer that can fail independently of either system. But the
              MCP approach is simpler than the original Rust bridge: four Python functions, one subprocess,
              standard protocol. The failure modes are more visible and the recovery path is a restart.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>SQLite Knowledge Database + RAG</h3>
            <p className={styles.body}>
              Long-term memory is stored in a single consolidated SQLite database (clarence.db) with 4,215
              memories, 2,474 entities, and 14,882 facts across 15 tables. The schema separates
              concerns: a <em>profiles</em> table holds identity facts (agent names, user preferences,
              project constants) with deterministic key lookup. No fuzzy search for things that must be exact.
              A <em>memories</em> table stores durable knowledge with soft invalidation: when a fact changes,
              the old record is marked invalid and a new one is written, preserving the audit trail.
            </p>
            <p className={styles.body}>
              The RAG layer is live: 3,391 memory vectors and 10,349 fact vectors (13,740 total) with
              all-MiniLM-L6-v2 embeddings (384-dim), running fully locally via sqlite-vec. Automated garbage
              collection prunes low-value catalog data while preserving all behavioral corrections and user
              knowledge. No separate vector database, no network hop. Agents query the knowledge base by meaning: &ldquo;what does
              James think about AI agent UX?&rdquo; returns the five most relevant records across all tables,
              regardless of how they were originally tagged.
            </p>
            <p className={styles.body}>
              The conversation distillation pipeline (conversation-distill.py) processes Telegram
              conversations nightly, extracting decisions, corrections, and preferences into the memory DB.
              This is what makes the memory system feel alive rather than static. James corrects something
              once in conversation, and it persists. The knowledge base grew from ~170 to 4,215 memories
              in part because this pipeline captures context that would otherwise evaporate. A retrieval feedback loop lets sessions flag results as useful or noise, creating a learning signal for future garbage collection.
            </p>
            <p className={styles.body}>
              An Obsidian vault of 2,074 notes syncs with the database via a daily knowledge sync job.
              The sync pulls coursework from Google Drive, re-indexes all vault notes, and reports
              results to Discord. A dedicated vault indexer script processes the full vault in seconds.
              Writing in Obsidian feeds the RAG layer without any additional wiring.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Tailscale for Device Continuity</h3>
            <p className={styles.body}>
              Clarence runs on an Ubuntu Linux server. James moves between Linux, Mac, iPhone, and iPad.
              Tailscale creates a private mesh VPN connecting all four, so the Telegram interface and Brain
              Reader HTTP server are reachable from any device without exposing anything to the public internet.
              This was a day-one decision and it has been the most friction-free part of the stack.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Multi-Surface Communication</h3>
            <p className={styles.body}>
              Discord (9 channels), Telegram (interactive conversations), HANDOFF.md (session continuity). Each surface serves a different communication need. Discord for async notification and overnight reporting. Telegram for real-time dialogue and morning briefings. HANDOFF.md for session-to-session continuity.
            </p>
          </div>

        </section>

        {/* Challenges */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Honest Challenges</h2>
          <p className={styles.body}>
            A portfolio case study that only shows what worked is a sales document. Here is what is
            actually hard:
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>The Write-Only Audit Loop</h3>
            <p className={styles.body}>
              The self-audit produces detailed, specific proposals every night. The quick-wins queue is
              populated with concrete autonomous tasks. The autonomous employee is configured to execute them.
              But the execution-to-proposal ratio is lower than it should be.
            </p>
            <p className={styles.body}>
              The problems are at the execution layer: the autonomous employee sometimes fails to find the
              queue file, sometimes falls back to its own priority logic, and sometimes the queue was not
              written correctly. The audit system reports on this failure. The audit is self-aware about it.
              But self-awareness does not fix reliability. This is the most honest statement about the
              current system.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Budget Constraint as Design Constraint</h3>
            <p className={styles.body}>
              The entire routing policy exists because running expensive models at scale has real cost. A
              fleet of cron jobs running nightly would be expensive if all of them used Opus. The March 25-26
              pass moved all cron jobs to cost-effective models (Sonnet for reasoning, MiniMax for mechanical).
              But this creates a different kind of debt.
            </p>
            <p className={styles.body}>
              The tradeoff is quality degradation at the mechanical tier. When a task gets routed to a
              cheaper model, the output quality drops and it is not always obvious why. Budget-aware routing
              requires continuous calibration, and the calibration is never quite finished.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Memory Growth Without Garbage Collection</h3>
            <p className={styles.body}>
              The knowledge base grew from ~170 to 4,215 memories and the facts table exploded to 14,882
              entries after vault fact extraction processed 1,927 notes. More data does not automatically
              mean better recall. As the database scales, the vector search returns increasingly similar
              results, and the signal-to-noise ratio in retrieved context degrades. Memory needs pruning
              and consolidation, not just accumulation. Automated garbage collection helps, but the
              curation problem is fundamentally unsolved.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Platform Fragility</h3>
            <p className={styles.body}>
              Twitter/X posting was built, tested, and blocked by anti-automation fingerprinting within a single session. The platform changed the rules underneath a working integration. This is a real constraint of building on platforms you do not control. The system adapted by routing public communication through Discord instead.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Visibility of System Status (Nielsen #1)</h3>
            <p className={styles.body}>
              This is the most persistent unsolved design problem in the system. Nielsen&apos;s first
              usability heuristic states that a system should always keep users informed about what is
              going on through appropriate feedback within reasonable time. Clarence violates this
              consistently.
            </p>
            <p className={styles.body}>
              Cron jobs run overnight and deliver to Discord channels: reports to #cron-reports, incidents to #incidents, research to #research-reports. The morning briefings deliver to Telegram. But the gap between &ldquo;reported&rdquo; and &ldquo;observable&rdquo; remains. Silence is still ambiguous: does it mean everything worked, or that the reporting layer itself failed?
            </p>
            <p className={styles.body}>
              The problem compounds during live sessions. When agents are delegated tasks in parallel,
              there is no progress indicator, no heartbeat, no way to distinguish &ldquo;working on
              it&rdquo; from &ldquo;silently failed.&rdquo; The user is left interpreting silence, which
              is the opposite of visibility. This is not a logging problem. It is a feedback design
              problem, and solving it requires treating system status as a first-class UX surface rather
              than a side effect of Telegram messages or Claude Code tool calls.
            </p>
          </div>

        </section>

        {/* Accomplishments */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Has Been Accomplished</h2>

          <ul className={styles.methodList}>
            <li>Knowledge database: 4,215 active memories, 2,474 entities, 14,882 facts, 2,074 indexed vault notes in clarence.db (~50MB SQLite) with conversation distillation, automated GC, and retrieval feedback loop</li>
            <li>RAG layer: 10,349 fact vectors + 3,391 memory vectors with all-MiniLM-L6-v2 embeddings (384-dim, 13,740 total), fully local via sqlite-vec</li>
            <li>Daily knowledge sync: Google Drive coursework pull, vault re-indexing, results to Discord</li>
            <li>2,074 Obsidian vault notes indexed and searchable via semantic vector search</li>
            <li>95 skills in the Hermes skill library covering research, development, deployment, and creative workflows</li>
            <li>4 MCP servers: custom bridge, Tavily, Perplexity Pro, and web search (DuckDuckGo + Gemini)</li>
            <li>9 Discord channels for async reporting: cron reports, incidents, research, R&D council, job search</li>
            <li>Morning briefings (calendar + job search) delivered to Telegram before 5 AM daily</li>
            <li>Session lifecycle hooks: auto-load context on start, write handoff on stop, zero cold starts</li>
            <li>Full platform migration from OpenClaw to Hermes completed in 48 hours under constraint</li>
            <li>Three-model routing architecture: Opus for reasoning, Trinity for code, MiniMax for mechanical work</li>
            <li>Data Access Layer (clarence_db.py): single module for all DB operations with 75-test suite and nightly health monitoring</li>
            <li>Portfolio evolution tracker: 94 changes logged with timestamps, categories, and semantic search</li>
            <li>12,265 lines of custom Python across 31 scripts powering the knowledge pipeline</li>
            <li>Open source memory architecture: github.com/nomadjames/clarence-memory-structure</li>
          </ul>
        </section>

        {/* Week Three: Engineering the Foundation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Week Three: Engineering the Foundation</h2>
          <p className={styles.body}>
            The first week was building. The second week was surviving a platform migration. The third week was about
            fixing the thing that kept breaking underneath everything else: every script was writing its own SQL
            with its own assumptions about the schema.
          </p>
          <p className={styles.body}>
            That is the kind of problem that does not announce itself. It shows up as orphaned facts, stale vectors,
            embedding gaps, and silent data corruption. 1,776 orphaned facts. 1 stale vector pointing at a deleted
            record. Embedding coverage gaps across active records. Each one traceable to a script that had its own
            idea about how to talk to the database.
          </p>
          <p className={styles.body}>
            The fix was a Data Access Layer: a single Python module (clarence_db.py, 870 lines) that owns all
            database operations. Every script in the system now goes through this one file for reads, writes,
            vector search, and schema management. No more raw SQL scattered across 31 scripts. One module, one
            set of assumptions, one place where the schema is defined.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Test Suite</h3>
            <p className={styles.body}>
              75 tests covering CRUD operations, vector search, JSON handling, edge cases, and concurrent access
              patterns. The test suite runs against a fresh database every time, so regressions surface immediately
              instead of hiding in production data. This was the first time the Clarence codebase had real test
              coverage, and it caught three bugs in the first run.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Health Check Monitor</h3>
            <p className={styles.body}>
              A nightly automated health check (db-health-check.py) runs against clarence.db and reports to
              Discord. It checks for orphaned records, stale vectors, embedding coverage gaps, schema integrity,
              and table row counts. If anything is wrong, it posts to the incidents channel. If everything is
              clean, it posts a summary to cron-reports. The system now tells me when the data is degrading
              instead of waiting for me to notice.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Portfolio Changelog</h3>
            <p className={styles.body}>
              94 portfolio changes tracked with timestamps, categories, and RAG embeddings. Every meaningful
              change to the portfolio site gets logged with what changed, why, and when. The changelog itself
              is searchable via semantic vector search, so the system can answer questions like &ldquo;what
              did I change about the Clarence case study last week?&rdquo; without scanning git logs.
            </p>
          </div>

          <p className={styles.body}>
            The cleanup results: 1,776 orphaned facts resolved, 1 stale vector removed, 100% embedding coverage
            achieved on all active records, and the database went from 26 tables to 15 after removing legacy
            cruft. The fact count went down (from 16,658 to 14,882) because the system was finally honest about
            what was real data and what was garbage.
          </p>
          <p className={styles.body}>
            The lesson from week three is the same lesson every production system teaches eventually: the
            exciting work is building features, but the work that actually matters is making the foundation
            reliable. A Data Access Layer is not glamorous. Neither is a test suite. But every time the system
            broke before this week, the root cause was the same: fragmented assumptions about shared state.
            Now there is one source of truth for how data moves in and out of the knowledge base.
          </p>
        </section>

        {/* Week Two: The Compute Reckoning */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Week Two: The Compute Reckoning</h2>
          <p className={styles.body}>
            The first week of Clarence was about building. The second week was about what happens when the
            platform you built on changes the rules underneath you.
          </p>
          <p className={styles.body}>
            On April 4, 2026, I received an email from Anthropic. Starting that afternoon, third-party
            harnesses, including OpenClaw, the orchestration platform Clarence ran on, would no longer
            be covered by the Max subscription. Those tools would require &ldquo;extra usage,&rdquo; a
            separate pay-as-you-go billing layer. The subscription still covered Claude Code and Claude&apos;s
            own products, but anything running through a third-party harness was now out of bounds.
          </p>
          <p className={styles.body}>
            The reason Anthropic gave: &ldquo;these tools put an outsized strain on our systems&rdquo; and
            they needed to &ldquo;prioritize customers using core products.&rdquo; They offered a one-time
            credit equal to the monthly subscription and discounts on pre-purchased usage bundles. A follow-up
            email would offer the option to cancel entirely.
          </p>
          <p className={styles.body}>
            This was not unexpected. The signs had been building. The week before, Anthropic had tightened
            usage limits during peak hours. By Thursday, April 3, I had burned through my weekly compute
            allocation entirely. I could not use Opus. Telegram stopped responding. The approval system
            broke. A hallucination went undetected until I manually checked. The system I had built over
            two weeks was suddenly fragile in ways I had not anticipated.
          </p>
          <p className={styles.body}>
            Thursday was the hardest day. I wrote in Telegram: &ldquo;just doesn&apos;t seem like things
            are working well. i have wasted a bunch of time and what little compute I have left for the
            week.&rdquo; That frustration was real. But frustration is also data.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>The Migration: OpenClaw to Hermes</h3>
            <p className={styles.body}>
              The response was not to abandon the architecture. It was to migrate it to a platform that
              Anthropic still supported. Hermes is an agent gateway that connects to Claude via OAuth, the
              same authentication path Claude Code uses. It runs its own Telegram bot, its own session
              management, its own memory layer. The migration happened on April 2, before the email arrived.
              I had already felt the pressure and started moving.
            </p>
            <p className={styles.body}>
              The new Telegram bot was named Franklin. The original OpenClaw bot was decommissioned.
              Franklin became the Hermes-side agent, same persona, different infrastructure. The memory
              database, the Discord webhooks, the session management: all of it migrated. The cron jobs
              were rebuilt for the Hermes scheduler rather than ported. Not
              seamlessly. There were broken configs, zombie processes, token lock race conditions. But by
              the end of Wednesday night, Franklin was live on Telegram and Hermes was running.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>The Split Architecture: Claude Code + Hermes + MiniMax</h3>
            <p className={styles.body}>
              The real design breakthrough came on Friday. The constraint was clear: Claude Code was still
              covered by the Max subscription, but I needed the delegation capabilities, memory access, and
              multi-agent coordination that the gateway provided. Running everything through Opus would burn
              credits. Running everything through MiniMax would sacrifice quality.
            </p>
            <p className={styles.body}>
              The solution was an MCP bridge, a custom Python server that sits between Claude Code and the
              rest of the system. It exposes three tools:
            </p>
            <ul className={styles.methodList}>
              <li><strong>read_memory:</strong> reads the persistent memory files directly from disk. Free. No API calls.</li>
              <li><strong>delegate_task:</strong> routes to the Hermes gateway on port 8642, which runs Clarence on Opus. Uses Anthropic credits. For complex reasoning, memory-aware tasks, anything that needs the full context.</li>
              <li><strong>delegate_minimax:</strong> routes directly to Ollama on port 11434, hitting MiniMax 2.7. Free. For summarization, drafting, formatting, code generation, any grunt work that does not need Opus-level reasoning.</li>
            </ul>
            <p className={styles.body}>
              The architecture is now a three-brained system. Claude Code is the primary interface and
              orchestrator, running on the Max subscription. Clarence on Hermes is the memory-aware reasoning
              layer, called when the task justifies the cost. MiniMax is the free labor pool, called for
              everything else. The human decides which brain to engage, or Claude Code decides based on the
              tool descriptions.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>What This Revealed About Platform Dependency</h3>
            <p className={styles.body}>
              The Anthropic email confirmed something the Twitter/X blocking had already demonstrated:
              building on platforms you do not control means accepting that the rules can change at any time.
              The system I built in week one assumed OpenClaw would remain a viable harness. That assumption
              lasted twelve days.
            </p>
            <p className={styles.body}>
              The design lesson is not &ldquo;do not build on platforms.&rdquo; There is no alternative.
              The lesson is to build with migration in mind. The memory database survived because it was
              SQLite, not a proprietary format. The cron jobs survived because they were defined in
              configuration, not hard-coded. The persona survived because it was documented in a SOUL.md
              file, not implicit in the platform. The things that were portable were the things I had
              designed to be portable. Everything else broke.
            </p>
          </div>
        </section>

        {/* Designer-User-Researcher */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The Designer-User-Researcher Position</h2>
          <p className={styles.body}>
            Most UX research involves a separation between the person who designs a system and the person who
            uses it. That separation is methodologically valuable: it forces the designer to account for contexts
            and needs they did not anticipate.
          </p>
          <p className={styles.body}>
            Building Clarence collapses that separation. I designed it, I use it every day, and I am continuously
            researching how it behaves. The advantages are real: I notice friction that an external observer
            would miss, I can iterate in hours rather than weeks, and my mental model of the system is accurate
            in ways that matter for debugging.
          </p>
          <p className={styles.body}>
            The risks are also real. I adjust my behavior to work around failures rather than fixing them. I
            habituate to log noise that a fresh observer would flag immediately. I develop preferences about
            how the system should behave that may not generalize to anyone else.
          </p>
          <p className={styles.body}>
            The conversation distillation pipeline changed this dynamic. Because every correction I make is
            now captured and persisted automatically, the system is learning from my behavior as a user in
            real time. The nightly self-audit partially addresses the external observation gap by creating a
            perspective on the system that I could not produce from memory alone. When Clarence writes
            <em> &quot;what I noticed about my own behavior&quot;</em> in the audit report, it generates
            observations that consistently surprise me as the designer.
          </p>
          <p className={styles.body}>
            <strong>The design question has become empirical.</strong> I started with a hypothesis about what
            AI collaboration could look like. I now have a running system that confirms some of it and
            contradicts the rest. That feedback is what makes this a research project, not just a personal
            productivity setup.
          </p>
        </section>

        {/* Open Source */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>Open Source: The Memory Architecture</h2>
          <p className={styles.body}>
            The memory system that powers Clarence is open source. The framework repository contains the
            complete architecture for giving an AI assistant persistent, searchable memory across sessions:
            the SQLite schema, the RAG embedding pipeline, the conversation distillation scripts, and the
            MCP server interfaces that let agents read and write knowledge.
          </p>
          <p className={styles.body}>
            No personal data is included. This is the plumbing, not the person. The repository is designed
            so anyone building a persistent AI agent can study or replicate the architecture without
            starting from scratch.
          </p>
          <ul className={styles.methodList}>
            <li>Full SQLite schema with 15 tables: memories, entities, facts, sessions, work items, vector tables</li>
            <li>RAG pipeline: all-MiniLM-L6-v2 embeddings (384-dim) via sqlite-vec, fully local, with automated GC</li>
            <li>Conversation distillation: nightly LLM-driven extraction of durable knowledge from raw transcripts</li>
            <li>MCP servers: full CRUD for memories, entities, sessions, and work items</li>
            <li>Obsidian vault sync: bidirectional between markdown notes and the knowledge database</li>
          </ul>
          <p className={styles.body}>
            <a href="https://github.com/nomadjames/clarence-memory-structure" target="_blank" rel="noopener noreferrer" className={styles.link}>
              View the repository on GitHub
            </a>
          </p>
        </section>

        {/* What Is Next */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Is Next</h2>
          <ul className={styles.reflectionList}>
            <li>
              <strong>Rebuilding the overnight pipeline:</strong> the original OpenClaw system ran 14 cron
              jobs including conversation distillation, R&D Council debates, ecosystem scanning, academic
              paper monitoring, and security audits. Hermes currently runs 3. Each capability needs to be
              rebuilt for the new scheduler, not ported. The lesson from the first iteration: design each
              job to be self-contained and observable, not dependent on upstream output from jobs that
              might silently fail.
            </li>
            <li>
              <strong>Rebuilding the agent crew:</strong> the original system had 13 named agents. The
              Hermes migration preserved Clarence and the R&D Council. The remaining agents (Felix, Rex,
              Milo, Eddie, Jules, Bruno) need to be rebuilt as Hermes subagents with proper delegation
              patterns. This is not a porting exercise. The Hermes delegation model is different from
              OpenClaw&apos;s, and the agent roles need to be redesigned for the new architecture.
            </li>
            <li>
              <strong>Cost monitoring and alerting:</strong> the Anthropic email made compute costs a
              first-class design concern. The system needs visibility into credit consumption per session,
              per delegation, per cron job. Not as an afterthought, but as a core feedback surface.
            </li>
            <li>
              <strong>SensorSynthFM integration:</strong> the capstone project (FM synthesis + iPhone sensor
              data) will integrate with the knowledge layer for research documentation.
            </li>
            <li>
              <strong>Refining the human-in-the-loop boundary:</strong> the migration exposed how much I had
              relied on the system working autonomously. When it broke, I had no fallback except manual
              intervention. The boundary between autonomous action and human approval needs to be explicit
              and testable, not implicit and hopeful.
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Concepts and Skills</h2>
          <div className={styles.skills}>
            {[
              "Agent orchestration design",
              "Multi-model routing strategy",
              "Cron-based autonomous workflows",
              "Self-improving system architecture",
              "Human-in-the-loop boundary design",
              "Trust calibration",
              "Session lifecycle hooks",
              "Conversation distillation pipelines",
              "Memory persistence across AI sessions",
              "Delegation architecture design",
              "MCP bridge architecture",
              "SQLite knowledge database design",
              "Semantic vector search (sqlite-vec)",
              "RAG pipeline design",
              "MCP server development",
              "Budget-aware compute allocation",
              "Token optimization",
              "API proxy design",
              "Platform migration under constraint",
              "Private mesh networking (Tailscale)",
              "Security audit automation",
              "Discord webhook integration",
              "Designer-user-researcher methodology",
              "Knowledge base architecture",
              "Data Access Layer design",
              "Automated health monitoring",
              "Hermes agent gateway",
              "Claude Code CLI integration",
              "Multi-provider model integration",
              "Telegram Bot API",
              "MCP server configuration",
              "Cost-aware architectural design",
              "Systems thinking",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <nav className={cs.caseNav}>
          <a href="/portfolio" className={cs.navLink}>← All Work</a>
          <a href="/portfolio/accessibility-audit" className={cs.navLink}>Accessibility Audit →</a>
        </nav>

      </main>
    </div>
  );
}
