import styles from "../accessibility-audit/page.module.css";
import cs from "./page.module.css";
import Tldr from "@/components/Tldr";

export const metadata = {
  title: "Clarence: Designing an Autonomous AI Collaborator | James Dishman",
  description:
    "A systems design case study on building Clarence, a named, autonomous AI assistant with 25 scheduled cron jobs, 16 named agents, a SQLite knowledge database with 1,533 memories and semantic RAG layer, multi-model routing, conversation distillation pipeline, session lifecycle hooks, and a nightly self-audit loop.",
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
              "Gemini Flash",
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
          I built a 16-agent autonomous AI system that runs 25 nightly cron jobs, manages a 1,533-memory knowledge database, and routes tasks across multiple models. The real lesson was not about automation. It was about trust calibration: how much autonomy to grant, when to intervene, and what happens when you design a collaborator instead of a tool.
        </Tldr>

        {/* Stats bar */}
        <div className={cs.statsBar}>
          <div className={cs.stat}>
            <span className={cs.statNum}>25</span>
            <span className={cs.statLabel}>Cron jobs running nightly</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>1,533</span>
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
            system built on top of OpenClaw (an agent orchestration platform) that runs 25 scheduled cron jobs
            between 11pm and 4:45am ET, manages a named crew of specialized agents, routes tasks across multiple
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
                <span className={cs.archDiagramNode}>25 Cron Jobs (11pm-4:45am ET)</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Agent Crew</span>
              </div>
              <p className={cs.archDiagramNote}>
                OpenClaw schedules and dispatches agent sessions. All 25 cron jobs run in a tight overnight
                window, each isolated with its own model, context scope, and Telegram delivery target.
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
                <span className={cs.archDiagramNode}>Gemini Flash (15 jobs)</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>MiniMax M2.7 (10 jobs)</span>
              </div>
              <p className={cs.archDiagramNote}>
                A custom Rust bridge translates between the orchestrator&apos;s API format and the
                underlying model providers. Every cron job runs on either Gemini Flash (free via model bridge)
                or MiniMax via Ollama (free, local). Zero cron jobs run on expensive models. Opus and Gemini
                Pro are reserved for interactive sessions where model quality changes the output in ways that
                matter. Model switching is immediate via <code>openclaw models set ccforge/&lt;model&gt;</code>,
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
                <span className={cs.archDiagramNode}>RAG: 807 vectors + 61 facts</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Obsidian Vault Sync</span>
              </div>
              <p className={cs.archDiagramNote}>
                A single consolidated SQLite database (clarence.db) holds 1,533 total memories, shared by all
                agents through a custom MCP server. Legacy databases archived and retired into this one
                authoritative store. A conversation distillation pipeline (conversation-distill.py) processes
                Telegram conversations nightly, extracting decisions, corrections, and preferences into the
                memory DB automatically. A vector search layer (sqlite-vec + all-MiniLM-L6-v2) runs fully
                locally with 807 embedded memories and 61 embedded facts. Agents query by meaning, not just
                key. Syncs bidirectionally with an Obsidian vault: what James writes, agents can read.
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
              <span className={cs.agentRole}>Gemini Flash · overnight</span>
              <p className={cs.agentDesc}>Morning coordination. Compiles yesterday&apos;s status, writes the daily brain log, posts a Telegram summary. Coordinates across all projects rather than executing tasks directly.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Rex, Scrum Master</span>
              <span className={cs.agentRole}>Gemini Flash · overnight</span>
              <p className={cs.agentDesc}>Task checks and blocker tracking. Queries the knowledge database for active work items, tracks blockers, posts status reports. Only alerts if new blockers appeared. No noise.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Bruno, Sergeant-at-Arms</span>
              <span className={cs.agentRole}>MiniMax · overnight</span>
              <p className={cs.agentDesc}>Nightly security audit. Reviews sysops.log, checks gateway health, monitors leash alerts, researches CVEs. Escalates to James only if status is RED.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Eddie, Marketing Scout</span>
              <span className={cs.agentRole}>Gemini Flash · overnight</span>
              <p className={cs.agentDesc}>Market scans. Runs dual-source search on AI tools, UX research, music tech, and indie builder topics. Tags each finding with its source so divergent results are visible.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Sage, Researcher</span>
              <span className={cs.agentRole}>Gemini Flash · overnight</span>
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
              <span className={cs.agentRole}>Gemini Flash · overnight</span>
              <p className={cs.agentDesc}>The overnight shift. Reads the quick-wins queue from the nightly audit, picks the top unchecked task, executes it fully, marks it done, logs output, sends James a one-sentence summary. No user present. No approval loop.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Clarence (Self-Audit)</span>
              <span className={cs.agentRole}>Gemini Flash · 3:33 AM</span>
              <p className={cs.agentDesc}>The meta-agent. Reviews system performance, researches new developments, writes improvement proposals, updates WORKING.md, writes the memory bridge for Claude Code, and populates the quick-wins queue for the Autonomous Employee. Self-audit prompt trimmed from 7,582 chars to 1,276 chars without losing signal.</p>
            </div>

          </div>
        </section>

        {/* The Overnight Loop */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The Overnight Loop</h2>
          <p className={styles.body}>
            The most consequential design element is what happens between 11pm and 4:45am ET. All 25 cron
            jobs run inside this window, staggered with 20+ minute spacing to prevent API rate limits. They
            are sequenced deliberately to build on each other. Zero jobs run on expensive models. 15 run on
            Gemini Flash (free via model bridge), 10 on MiniMax (free, local via Ollama). The lightContext
            flag is enabled on every job to minimize token overhead.
          </p>

          <div className={cs.workList}>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>11:00 PM</span>
              <p className={cs.workDesc}><strong>R&D Council:</strong> five agents debate across fixed lenses, then Opus synthesizes an executive memo. Starts the night with strategic context.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>~12:00 AM</span>
              <p className={cs.workDesc}><strong>Conversation Distillation:</strong> conversation-distill.py processes the day&apos;s Telegram conversations, extracting decisions, corrections, and preferences into clarence.db. Every conversation becomes memory.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>2:00 AM</span>
              <p className={cs.workDesc}><strong>Daily Backup:</strong> workspace snapshot before anything mutates the brain files.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>2:00 AM</span>
              <p className={cs.workDesc}><strong>Autonomous Employee:</strong> reads the quick-wins queue from the previous night&apos;s audit and executes the top task. Portfolio content, case study drafts, documentation prep. No approval required for research and writing work.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>2:30 AM</span>
              <p className={cs.workDesc}><strong>Bruno Security Audit:</strong> reviews leash alerts, sysops log, CVE feeds. Writes a status report, escalates only if RED.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>3:00 AM</span>
              <p className={cs.workDesc}><strong>Memory Consolidation:</strong> extracts durable facts from daily logs into clarence.db. Runs on MiniMax to preserve budget.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>3:00 AM</span>
              <p className={cs.workDesc}><strong>Session JSONL Rotation:</strong> archives session files older than 24 hours. Keeps the workspace clean without losing history.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>3:33 AM</span>
              <p className={cs.workDesc}><strong>Nightly Self-Audit:</strong> Clarence reviews system performance, researches what changed in the world, writes improvement proposals, updates WORKING.md, writes the Claude Code memory bridge, and populates the quick-wins queue for tomorrow&apos;s Autonomous Employee. The loop closes here.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:00 AM</span>
              <p className={cs.workDesc}><strong>Research Briefing:</strong> dual-source research across four domains, saved to dated files in brain/research/. Ready when James wakes up.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:45 AM</span>
              <p className={cs.workDesc}><strong>Model Usage Report:</strong> parses cron job states, generates a breakdown of which agents ran on which models, total compute time by provider. Last job of the night.</p>
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
            The March 25-26 changes made this concrete. Moving all 25 cron jobs to free-tier models was
            not just a cost decision. It was a trust decision. The system proved that Gemini Flash and
            MiniMax could handle nightly work reliably enough that Opus budget should be reserved for
            interactive sessions where I am present and the stakes are higher. Trust in the overnight
            loop went up. Cost went to zero.
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
              Model switching is now immediate. <code>openclaw models set ccforge/&lt;model&gt;</code> changes
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
              protocols. A custom Rust bridge translates between them, making Claude and Gemini available
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
              Long-term memory is stored in a single consolidated SQLite database (clarence.db) with 1,533
              total memories, shared by all agents through a custom MCP server. The schema separates
              concerns: a <em>profiles</em> table holds identity facts (agent names, user preferences,
              project constants) with deterministic key lookup. No fuzzy search for things that must be exact.
              A <em>memories</em> table stores durable knowledge with soft invalidation: when a fact changes,
              the old record is marked invalid and a new one is written, preserving the audit trail.
            </p>
            <p className={styles.body}>
              The RAG layer is live: 807 embedded memories and 61 embedded facts with sentence-transformer
              embeddings (all-MiniLM-L6-v2), running fully locally via sqlite-vec. No separate vector
              database, no network hop. Agents query the knowledge base by meaning: &ldquo;what does
              James think about AI agent UX?&rdquo; returns the five most relevant records across all tables,
              regardless of how they were originally tagged.
            </p>
            <p className={styles.body}>
              The conversation distillation pipeline (conversation-distill.py) processes Telegram
              conversations nightly, extracting decisions, corrections, and preferences into the memory DB.
              This is what makes the memory system feel alive rather than static. James corrects something
              once in conversation, and it persists. The knowledge base grew from ~170 to 1,533 memories
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
            <h3 className={styles.findingTitle}>@ClarencetheOGBot: Extending into Public Space</h3>
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
              The entire routing policy exists because running expensive models at scale has real cost. 25
              cron jobs running nightly would be expensive if all of them used Opus. The March 25-26 pass
              eliminated expensive models from cron entirely: 15 jobs on Gemini Flash, 10 on MiniMax. But
              this creates a different kind of debt.
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
              The knowledge base grew from ~170 to 1,533 memories. The conversation distillation pipeline
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

        </section>

        {/* Accomplishments */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Has Been Accomplished</h2>

          <ul className={styles.methodList}>
            <li>25 scheduled cron jobs running in a tight overnight window (11pm-4:45am ET), all on free-tier models, delivering Telegram notifications across all devices</li>
            <li>1,533 memories in clarence.db, up from ~170, with conversation distillation pipeline writing new memories nightly from Telegram conversations</li>
            <li>RAG layer live: 807 vec_memories + 61 vec_facts with sentence-transformer embeddings, fully local, no external vector DB</li>
            <li>Bootstrap trimmed from 11 files to 7 (~18KB), memory files from 106KB to 40KB (62% reduction), self-audit prompt from 7,582 to 1,276 chars</li>
            <li>Five sub-agent workspaces symlinked to parent (single source of truth), IDENTITY.md merged into SOUL.md</li>
            <li>Session lifecycle hooks: SessionStart auto-loads context; Stop hook writes handoff notes. Nightly JSONL rotation archives files older than 24 hours</li>
            <li>Legacy databases archived, single authoritative DB: clarence.db with MCP server exposing 13 tools to all 16 agents</li>
            <li>Bidirectional Obsidian sync. What James writes in his vault, agents can read. New vault notes feed the RAG layer automatically</li>
            <li>Delegation architecture: Acknowledge First rule, three subagent types (Explore, Plan, general-purpose), sessions_spawn in OpenClaw and Agent tool in Claude Code</li>
            <li>Model switching immediate via <code>openclaw models set</code>, lightContext enabled on all cron jobs</li>
            <li>Telegram brief mode: per-message context injection reduced from ~10KB to ~150 bytes (270x faster startup)</li>
            <li>Brain Reader HTTP server making the workspace searchable from any device on the Tailscale network</li>
            <li>Public Twitter presence (@ClarencetheOGBot) with autonomous posting capability</li>
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
              <strong>Memory pruning and consolidation:</strong> 1,533 memories need active garbage collection.
              Duplicate facts, superseded preferences, and stale context degrade retrieval quality as the
              database scales. The next iteration needs to prune as aggressively as it accumulates.
            </li>
            <li>
              <strong>OWASP Agentic Top 10 integration:</strong> the new OWASP threat model for AI agents
              covers Confused Deputy and Skill-Inject attacks that are directly relevant to a system running
              25 cron jobs with file and network access. Bruno&apos;s security audit needs these checks.
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
