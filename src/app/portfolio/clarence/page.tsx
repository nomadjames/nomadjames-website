import styles from "../accessibility-audit/page.module.css";
import cs from "./page.module.css";
import Tldr from "@/components/Tldr";

export const metadata = {
  title: "Clarence: Designing an Autonomous AI Collaborator | James Dishman",
  description:
    "A systems design case study on building Clarence, a named, autonomous AI assistant with 26 cron jobs organized into four dependency phases, 16 named agents, a SQLite knowledge database spanning 2,800+ memories, 1,800+ entities, and 9,000+ facts with full vector search, multi-model routing, conversation distillation pipeline, session lifecycle hooks, and a nightly self-audit loop.",
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
          <h1 className={styles.title}>Clarence:<br />Designing an Autonomous AI Collaborator</h1>
          <div className={styles.methods}>
            {[
              "Agent Orchestration",
              "Multi-Model Routing",
              "OpenClaw",
              "Custom Model Bridge (Rust)",
              "Claude Opus 4.6",
              "Claude Sonnet",
              "Session Lifecycle Hooks",
              "Conversation Distillation",
              "Telegram API",
              "Tailscale VPN",
              "Self-Improving Systems",
              "Human-in-the-Loop Design",
              "Semantic Vector Search (RAG)",
            ].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        <Tldr>
          I built a 16-agent autonomous AI system that runs 26 cron jobs across four dependency phases nightly, manages a knowledge base spanning 2,800+ memories, 1,800+ entities, and 9,000+ facts with full vector search, and routes tasks across multiple models. The real lesson was not about automation. It was about trust calibration: how much autonomy to grant, when to intervene, and what happens when you design a collaborator instead of a tool.
        </Tldr>

        {/* Stats bar */}
        <div className={cs.statsBar}>
          <div className={cs.stat}>
            <span className={cs.statNum}>26</span>
            <span className={cs.statLabel}>Cron jobs in 4 phases nightly</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>2,318</span>
            <span className={cs.statLabel}>Memories in knowledge DB</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>62%</span>
            <span className={cs.statLabel}>Bootstrap memory reduction</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>0</span>
            <span className={cs.statLabel}>Expensive models in cron</span>
          </div>
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
            system built on top of OpenClaw (an agent orchestration platform) that runs 26 cron jobs across four
            dependency phases between 11pm and 5am ET, manages a named crew of specialized agents, routes tasks across multiple
            models based on cost and capability, distills every conversation into durable memory, and writes
            nightly self-improvement reports that feed into what it does while I sleep.
          </p>
          <p className={styles.body}>
            I am both the designer and the primary user of this system. That dual position is unusual, and worth
            examining explicitly as part of this case study.
          </p>
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
                <span className={cs.archDiagramNode}>Telegram Bot</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Brain Reader HTTP</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Tailscale VPN</span>
              </div>
              <p className={cs.archDiagramNote}>
                All device access is over a private mesh network. Brain Reader serves the
                workspace as browsable markdown so James can read any file from iPhone without a terminal.
                Telegram brief mode reduced per-message context injection from ~10KB to ~150 bytes, a 270x
                reduction in startup overhead.
              </p>
            </div>

            <div className={cs.archDiagramConnector}>↓</div>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Orchestration</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNodeAccent}>OpenClaw</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Cron Fleet (4 phases, 11pm-5am ET)</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Agent Crew</span>
              </div>
              <p className={cs.archDiagramNote}>
                OpenClaw schedules and dispatches agent sessions. Twenty-six cron jobs run in a tight overnight
                window across four dependency phases, each isolated with its own model, context scope, and Telegram delivery target.
                Bootstrap trimmed from 11 files to 7 (~18KB total), with IDENTITY.md merged into SOUL.md
                to reduce context load. Five sub-agent workspaces symlinked to the parent workspace so every
                agent reads from a single source of truth. Session lifecycle hooks auto-load database context
                and HANDOFF.md on start, then write a fresh handoff note on stop, eliminating cold starts.
              </p>
            </div>

            <div className={cs.archDiagramConnector}>↓</div>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Model Routing</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNodeAccent}>Model Bridge</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Claude Sonnet</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>MiniMax M2.7</span>
              </div>
              <p className={cs.archDiagramNote}>
                A custom Rust bridge translates between the orchestrator&apos;s API format and the
                underlying model providers. Cron jobs run on either Claude Sonnet (for reasoning tasks) or
                MiniMax via Ollama (free, local, for mechanical tasks). Opus and higher-tier
                Pro are reserved for interactive sessions where model quality changes the output in ways that
                matter. Model switching is immediate via <code>openclaw models set &lt;model&gt;</code>,
                no restart required.
              </p>
            </div>

            <div className={cs.archDiagramConnector}>↓</div>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Memory</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNodeAccent}>clarence.db</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>MCP Server (13 tools)</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>RAG: 2,372 memory + 9,376 fact vectors</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Obsidian Vault Sync</span>
              </div>
              <p className={cs.archDiagramNote}>
                A single consolidated SQLite database (clarence.db) holds 2,800+ memories, 1,877 entities, and
                9,376 facts, shared by all agents through a custom MCP server. Legacy databases archived and
                retired into this one authoritative store. A conversation distillation pipeline
                (conversation-distill.py) processes Telegram conversations nightly, extracting decisions,
                corrections, and preferences into the memory DB automatically. A vector search layer
                (sqlite-vec + all-MiniLM-L6-v2) runs fully locally with 9,376 fact vectors and 2,372 memory
                vectors. Agents query by meaning, not just key. Syncs bidirectionally with an Obsidian vault:
                what James writes, agents can read.
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
                <span className={cs.archDiagramNode}>Stop Hook</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Handoff Notes</span>
              </div>
              <p className={cs.archDiagramNote}>
                Every session starts warm. The SessionStart hook loads context from the database automatically.
                The Stop hook writes handoff notes for session continuity. Nightly JSONL rotation archives
                session files older than 24 hours, keeping the workspace clean without losing history.
                Memory files trimmed from 106KB to 40KB (62% reduction) so every session starts with less
                noise and more signal.
              </p>
            </div>

          </div>
        </section>

        {/* The Crew */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Agent Crew</h2>
          <p className={styles.body}>
            Naming agents was a deliberate choice. Names create identity and accountability. When a named agent
            produces output, I read it differently than I read output from an anonymous system call. The names
            also make role boundaries explicit across the codebase and the cron job config.
          </p>
          <p className={styles.body}>
            The delegation architecture follows hard rules: Clarence orchestrates, subagents execute. Every
            task gets immediate acknowledgment with a plan and time estimate. Subagents spawn via
            sessions_spawn in OpenClaw and the Agent tool in Claude Code. Three agent types handle different
            work: Explore subagents for research and discovery, Plan subagents for architecture and strategy,
            and general-purpose subagents for code and execution. Multiple independent tasks run in parallel.
            Clarence never blocks on a subagent. It stays available to coordinate while agents run in
            the background.
          </p>

          <div className={cs.agentGrid}>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Felix, Chief of Staff</span>
              <span className={cs.agentRole}>Sonnet · overnight</span>
              <p className={cs.agentDesc}>Morning coordination. Compiles yesterday&apos;s status, writes the daily brain log, posts a Telegram summary. Coordinates across all projects rather than executing tasks directly.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Rex, Scrum Master</span>
              <span className={cs.agentRole}>Sonnet · overnight</span>
              <p className={cs.agentDesc}>Task checks and blocker tracking. Queries the knowledge database for active work items, tracks blockers, posts status reports. Only alerts if new blockers appeared. No noise.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Bruno, Sergeant-at-Arms</span>
              <span className={cs.agentRole}>MiniMax · overnight</span>
              <p className={cs.agentDesc}>Nightly security audit. Reviews sysops.log, checks gateway health, monitors leash alerts, researches CVEs. Escalates to James only if status is RED.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Eddie, Marketing Scout</span>
              <span className={cs.agentRole}>Sonnet · overnight</span>
              <p className={cs.agentDesc}>Market scans. Runs dual-source search on AI tools, UX research, music tech, and indie builder topics. Tags each finding with its source so divergent results are visible.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Sage, Researcher</span>
              <span className={cs.agentRole}>Sonnet · overnight</span>
              <p className={cs.agentDesc}>Research briefing. Four topics, two search sources each: AI model releases, UX/HCI papers, music tech, MCP ecosystem. Synthesizes across sources and notes where they diverge.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Ada, Memory Keeper</span>
              <span className={cs.agentRole}>MiniMax · overnight</span>
              <p className={cs.agentDesc}>Nightly memory consolidation. Reads daily logs, extracts durable facts, writes to the knowledge database. Only posts to Telegram if new durable facts were added. Keeps the knowledge layer honest.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>R&D Council: Atlas, Iris, Newton, Vesper, Raven</span>
              <span className={cs.agentRole}>Mixed models · Opus synthesis · 11:00 PM</span>
              <p className={cs.agentDesc}>Five-agent nightly debate. Each member holds a fixed lens: market analysis, UX research, technical architecture, product strategy, devil&apos;s advocate. Two debate rounds, then Opus synthesizes into an executive memo. Designed to surface disagreement, not consensus.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Autonomous Employee</span>
              <span className={cs.agentRole}>Sonnet · overnight</span>
              <p className={cs.agentDesc}>The overnight shift. Reads the quick-wins queue from the nightly audit, picks the top unchecked task, executes it fully, marks it done, logs output, sends James a one-sentence summary. No user present. No approval loop.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Clarence (Self-Audit)</span>
              <span className={cs.agentRole}>Sonnet · 4:10 AM</span>
              <p className={cs.agentDesc}>The meta-agent. Reviews system performance, researches new developments, writes improvement proposals, updates WORKING.md, writes the memory bridge for Claude Code, and populates the quick-wins queue for the Autonomous Employee. Self-audit prompt trimmed from 7,582 chars to 1,276 chars without losing signal.</p>
            </div>

          </div>
        </section>

        {/* The Overnight Loop */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The Overnight Loop</h2>
          <p className={styles.body}>
            The most consequential design element is what happens between 11pm and 5am ET. Twenty-six
            cron jobs run inside this window, organized into four dependency phases with deliberate
            sequencing so downstream jobs can build on upstream output. Zero jobs run on expensive models.
            They split across Claude Sonnet (for tasks requiring real reasoning and tool use) and MiniMax (for mechanical scripts and syncs).
            The lightContext flag is enabled on every job to minimize token overhead.
          </p>

          <div className={cs.workList}>
            <p className={cs.workDesc} style={{fontWeight: 600, marginBottom: "0.5rem"}}>Phase 1: Strategy and Coordination (11:00 PM - 12:00 AM)</p>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>11:00 PM</span>
              <p className={cs.workDesc}><strong>R&D Council:</strong> five agents debate across fixed lenses, then Opus synthesizes an executive memo. Starts the night with strategic context.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>11:20 PM</span>
              <p className={cs.workDesc}><strong>Chief of Staff:</strong> compiles yesterday&apos;s status, logs session summaries and entity updates. Reads R&D Council output.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>11:40 PM</span>
              <p className={cs.workDesc}><strong>Scrum Master:</strong> queries task status from the database, flags blockers, writes standup report. Reads Chief of Staff output.</p>
            </div>

            <p className={cs.workDesc} style={{fontWeight: 600, marginBottom: "0.5rem", marginTop: "1.5rem"}}>Phase 2: Ingest and Sync (12:00 AM - 2:00 AM)</p>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>12:00 AM</span>
              <p className={cs.workDesc}><strong>Sergeant-at-Arms Digest:</strong> reviews sysops.log, gateway health, cron statuses. Posts a terse digest only if something needs attention.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>12:20 AM</span>
              <p className={cs.workDesc}><strong>Google Drive Coursework Sync:</strong> pulls new coursework files from Google Drive into the workspace.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>12:40 AM</span>
              <p className={cs.workDesc}><strong>Marketing Scout:</strong> six-topic scan across AI, music tech, HCI, and indie hacking. Tags findings for Medium article angles.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>1:00 AM</span>
              <p className={cs.workDesc}><strong>Session Rotation:</strong> archives JSONL session files older than 24 hours. Keeps the workspace clean without losing history.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>1:25 AM</span>
              <p className={cs.workDesc}><strong>Conversation Distillation:</strong> processes Telegram conversations from the past 48 hours, extracting decisions, corrections, and preferences into clarence.db. Every conversation becomes memory.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>1:45 AM</span>
              <p className={cs.workDesc}><strong>Evening Goals Reminder:</strong> surfaces only items requiring James&apos;s direct action (terminal, logins, decisions). Filters out everything agents can handle autonomously.</p>
            </div>

            <p className={cs.workDesc} style={{fontWeight: 600, marginBottom: "0.5rem", marginTop: "1.5rem"}}>Phase 3: Autonomous Work (2:00 AM - 3:30 AM)</p>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>2:05 AM</span>
              <p className={cs.workDesc}><strong>Daily Backup:</strong> workspace snapshot before anything mutates the brain files.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>2:25 AM</span>
              <p className={cs.workDesc}><strong>Autonomous Employee:</strong> reads the quick-wins queue from the previous night&apos;s audit, picks the top task, executes it fully, marks it done. Portfolio content, case study drafts, research. No approval required.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>2:45 AM</span>
              <p className={cs.workDesc}><strong>Daily Build Journal:</strong> reads daily notes, produces a journal entry structured for Medium drafting: hook, accomplishments, interesting parts, thread to pull.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>3:05 AM</span>
              <p className={cs.workDesc}><strong>Income Freedom Research:</strong> daily scan for freelance UX/AI opportunities, case studies, Pittsburgh-specific leads. Tracks progress toward the independence goal.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>3:25 AM</span>
              <p className={cs.workDesc}><strong>Memory Consolidation:</strong> extracts durable facts from daily logs into clarence.db. Runs on MiniMax to preserve budget.</p>
            </div>

            <p className={cs.workDesc} style={{fontWeight: 600, marginBottom: "0.5rem", marginTop: "1.5rem"}}>Phase 4: Knowledge Layer and Audit (4:00 AM - 5:00 AM)</p>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:00 AM</span>
              <p className={cs.workDesc}><strong>Obsidian Sync:</strong> bidirectional sync between the Obsidian vault and clarence.db. What James writes, agents can read. What agents learn, James can browse.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:15 AM</span>
              <p className={cs.workDesc}><strong>RAG Embedding Refresh:</strong> re-embeds new memories and facts into the vector search layer. Must run after memory consolidation and Obsidian sync.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:25 AM</span>
              <p className={cs.workDesc}><strong>Research Briefing:</strong> dual-source research across four domains, saved to dated files. Ready when James wakes up.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:35 AM</span>
              <p className={cs.workDesc}><strong>Bruno Security Audit:</strong> reviews leash alerts, sysops log, CVE feeds. Writes a status report, escalates only if RED.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:45 AM</span>
              <p className={cs.workDesc}><strong>Changelog Monitor:</strong> checks Anthropic, Gemini, and MiniMax changelogs for new releases. Only alerts James if something changed.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:55 AM</span>
              <p className={cs.workDesc}><strong>Nightly Self-Audit:</strong> reviews system performance, researches ecosystem changes, writes improvement proposals, populates the quick-wins queue for tomorrow&apos;s Autonomous Employee. The loop closes here.</p>
            </div>
          </div>

          <p className={styles.body} style={{marginTop: "2rem"}}>
            The self-improving loop: the nightly audit writes a quick-wins queue. The autonomous employee
            reads that queue and executes items. The next night&apos;s audit reviews what was done, updates the
            queue, and the cycle repeats. The conversation distillation pipeline means every correction James
            makes during the day feeds back into the memory layer that night. The system is designed to
            compound work overnight rather than just report on it.
          </p>
          <p className={styles.body}>
            In practice this loop has a write-only failure mode I have not fully solved: the audit produces
            excellent proposals, but the execution step does not always pick up the queue file correctly.
            The proposals accumulate without always turning into action. This is documented and real. The
            system knows about it. Reporting awareness is not the same as fixing the underlying reliability issue.
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
            correction I make in a Telegram conversation is automatically extracted and written to the
            memory DB that night. The system does not just follow instructions in the moment. It learns
            from corrections persistently. That means trust can actually increase over time because the
            system remembers what I care about, not just what I asked for today.
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
              Model switching is now immediate. <code>openclaw models set &lt;model&gt;</code> changes
              the active model with no restart. This means routing decisions can be made at the task level
              rather than the configuration level. The system can adapt to what each job actually needs.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Single Source of Truth Architecture</h3>
            <p className={styles.body}>
              Five sub-agent workspaces are symlinked to the parent workspace. Every agent reads from the
              same files. IDENTITY.md was merged into SOUL.md. Legacy databases were archived and retired
              into a single authoritative store: clarence.db. The pattern is consistent: eliminate
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
              OpenClaw speaks the OpenAI-compatible API. The underlying model providers speak their own
              protocols. A custom Rust bridge translates between them, making multiple model providers available
              to the orchestrator without separate API key configurations per agent.
            </p>
            <p className={styles.body}>
              This adds a dependency layer that can fail independently of either system. The tradeoff was
              worth it: deeper integration with the model toolchain, including tool access and session context
              that direct API calls would not provide in the same form.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>SQLite Knowledge Database + RAG</h3>
            <p className={styles.body}>
              Long-term memory is stored in a single consolidated SQLite database (clarence.db) with 2,318
              memories, 1,877 entities, and 9,376 facts, shared by all agents through a custom MCP server. The schema separates
              concerns: a <em>profiles</em> table holds identity facts (agent names, user preferences,
              project constants) with deterministic key lookup. No fuzzy search for things that must be exact.
              A <em>memories</em> table stores durable knowledge with soft invalidation: when a fact changes,
              the old record is marked invalid and a new one is written, preserving the audit trail.
            </p>
            <p className={styles.body}>
              The RAG layer is live: 2,372 memory vectors and 9,376 fact vectors with sentence-transformer
              embeddings (all-MiniLM-L6-v2), running fully locally via sqlite-vec. No separate vector
              database, no network hop. Agents query the knowledge base by meaning: &ldquo;what does
              James think about AI agent UX?&rdquo; returns the five most relevant records across all tables,
              regardless of how they were originally tagged.
            </p>
            <p className={styles.body}>
              The conversation distillation pipeline (conversation-distill.py) processes Telegram
              conversations nightly, extracting decisions, corrections, and preferences into the memory DB.
              This is what makes the memory system feel alive rather than static. James corrects something
              once in conversation, and it persists. The knowledge base grew from ~170 to 2,800+ memories
              in part because this pipeline captures context that would otherwise evaporate.
            </p>
            <p className={styles.body}>
              An Obsidian vault syncs bidirectionally with the database. New vault notes are picked up by the
              nightly embedding job automatically. Writing in Obsidian feeds the RAG layer without any
              additional wiring.
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
            <h3 className={styles.findingTitle}>@ClarenceTheOG: Extending into Public Space</h3>
            <p className={styles.body}>
              The Twitter/X bot extends the output surface beyond private Telegram and brain files into a
              public space. This raises the design stakes: errors that stay in a log file are recoverable.
              Errors that get posted publicly are not. Clarence has standing permission to post but James
              retains approval for anything commercially sensitive or identity-critical.
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
              The knowledge base grew from ~170 to 2,800+ memories. The conversation distillation pipeline
              accelerated that growth. But more memories does not automatically mean better recall. As the
              database scales, the vector search returns increasingly similar results, and the signal-to-noise
              ratio in retrieved context degrades. Memory needs pruning and consolidation, not just
              accumulation. This is the next hard problem.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Log Noise as a Signal Problem</h3>
            <p className={styles.body}>
              Three tools were in the agent tool profile but unavailable at runtime, generating dozens
              of WARN log entries daily. Each warning was individually harmless. Together they buried
              real errors. Bruno&apos;s security audits were scanning logs where signal-to-noise had
              degraded enough that genuine failures could be missed. The fix was explicit: disable the
              three tools at the config level rather than leaving them as dead references. This is a
              documented case of how low-stakes configuration drift compounds into an observability gap.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Spontaneous Task Delegation Breaks Down</h3>
            <p className={styles.body}>
              The overnight cron loop works because every job has a clear prompt, a fixed model, and
              a predictable execution path. Spontaneous tasks during live sessions are a different problem.
              When a cheaper model receives an unstructured real-time request, it sometimes hallucinates
              tool syntax instead of executing actual tool calls, dumping raw markup into Telegram messages
              where a human expects a coherent response.
            </p>
            <p className={styles.body}>
              This reveals a gap between scheduled autonomy and reactive autonomy. The system is reliable
              when it knows what to do in advance. It degrades when asked to improvise with models that
              lack the reasoning depth to handle ambiguity. The current workaround is routing complex
              spontaneous work to higher-capability models, but this defeats the cost architecture.
              The real fix is better prompt scaffolding for spontaneous tasks, not just better models.
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
              Twenty-six cron jobs run overnight. Many complete successfully but report
              &ldquo;not-delivered&rdquo; on their Telegram notifications. The Sergeant-at-Arms posts
              a digest, but only if something needs attention, which means silence is ambiguous: does
              silence mean everything worked, or that the reporting layer itself failed? When James
              wakes up, the system status is reconstructed from scattered log files and database
              queries rather than surfaced through a coherent status interface.
            </p>
            <p className={styles.body}>
              The problem compounds during live sessions. When agents are delegated tasks in parallel,
              there is no progress indicator, no heartbeat, no way to distinguish &ldquo;working on
              it&rdquo; from &ldquo;silently failed.&rdquo; The user is left interpreting silence, which
              is the opposite of visibility. This is not a logging problem. It is a feedback design
              problem, and solving it requires treating system status as a first-class UX surface rather
              than a side effect of Telegram messages.
            </p>
          </div>

        </section>

        {/* Accomplishments */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Has Been Accomplished</h2>

          <ul className={styles.methodList}>
            <li>26 cron jobs organized into four dependency phases (Strategy, Ingest, Autonomous Work, Knowledge/Audit) running 11pm-5am ET, all on free-tier models, delivering Telegram notifications across all devices</li>
            <li>2,800+ memories, 1,877 entities, and 9,376 facts in clarence.db, with conversation distillation pipeline writing new memories nightly from Telegram conversations</li>
            <li>RAG layer live: 9,376 fact vectors + 2,372 memory vectors with sentence-transformer embeddings, fully local, no external vector DB</li>
            <li>Bootstrap trimmed from 11 files to 7 (~18KB), memory files from 106KB to 40KB (62% reduction), self-audit prompt from 7,582 to 1,276 chars</li>
            <li>Five sub-agent workspaces symlinked to parent (single source of truth), IDENTITY.md merged into SOUL.md</li>
            <li>Session lifecycle hooks: SessionStart auto-loads context; Stop hook writes handoff notes. Nightly JSONL rotation archives files older than 24 hours</li>
            <li>Legacy databases archived, single authoritative DB: clarence.db with MCP server exposing 13 tools to all 16 agents</li>
            <li>Bidirectional Obsidian sync. What James writes in his vault, agents can read. New vault notes feed the RAG layer automatically</li>
            <li>Delegation architecture: Acknowledge First rule, three subagent types (Explore, Plan, general-purpose), sessions_spawn in OpenClaw and Agent tool in Claude Code</li>
            <li>Model switching immediate via <code>openclaw models set</code>, lightContext enabled on all cron jobs</li>
            <li>Telegram brief mode: per-message context injection reduced from ~10KB to ~150 bytes (270x faster startup)</li>
            <li>Brain Reader HTTP server making the workspace searchable from any device on the Tailscale network</li>
            <li>Public Twitter presence (@ClarenceTheOG) with autonomous posting capability</li>
            <li>Daily research briefings covering AI model releases, UX research, music tech, and MCP ecosystem</li>
            <li>Bruno security audit infrastructure monitoring the gateway, leash alerts, and CVE feeds nightly</li>
          </ul>
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
            <li>Full SQLite schema with 20+ tables: memories, entities, facts, sessions, work items, vector tables</li>
            <li>RAG pipeline: sentence-transformer embeddings (all-MiniLM-L6-v2, 384 dims) via sqlite-vec</li>
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
              <strong>Closing the execution loop:</strong> the quick-wins queue and autonomous employee need
              a more reliable handoff. The goal is a self-improving loop that actually closes: research
              identifies an improvement, the queue captures it, the employee executes it overnight.
            </li>
            <li>
              <strong>Memory pruning and consolidation:</strong> 2,800+ memories need active garbage collection.
              Duplicate facts, superseded preferences, and stale context degrade retrieval quality as the
              database scales. The next iteration needs to prune as aggressively as it accumulates.
            </li>
            <li>
              <strong>OWASP Agentic Top 10 integration:</strong> the new OWASP threat model for AI agents
              covers Confused Deputy and Skill-Inject attacks that are directly relevant to a system running
              multiple cron jobs with file and network access. Bruno&apos;s security audit needs these checks.
            </li>
            <li>
              <strong>Refining the human-in-the-loop boundary:</strong> the delegation rules now codify hard
              principles for how Clarence coordinates and subagents execute. The next iteration is
              calibrating where autonomous action ends and human approval begins for higher-stakes tasks
              beyond research and writing.
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
              "SQLite knowledge database design",
              "Semantic vector search (sqlite-vec)",
              "RAG pipeline design",
              "MCP server development",
              "Budget-aware compute allocation",
              "Token optimization",
              "API proxy design (Rust)",
              "Private mesh networking (Tailscale)",
              "Security audit automation",
              "Autonomous social media publishing",
              "Designer-user-researcher methodology",
              "OpenClaw platform",
              "Claude Code CLI integration",
              "Multi-provider model integration",
              "Telegram Bot API",
              "MCP server configuration",
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
