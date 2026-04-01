import styles from "../accessibility-audit/page.module.css";
import cs from "./page.module.css";
import Tldr from "@/components/Tldr";
import PretextTitle from "@/components/PretextTitle";

export const metadata = {
  title: "Clarence: Designing an Autonomous AI Collaborator | James Dishman",
  description:
    "A systems design case study on building Clarence, a named, autonomous AI assistant with 14 cron jobs, 8 named agent identities across 9 Discord channels, a SQLite knowledge database spanning 3,978 memories, 1,880 entities, and 9,403 facts with full vector search, multi-model routing, conversation distillation pipeline, session lifecycle hooks, and a nightly self-audit loop.",
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
              "OpenClaw",
              "Custom Model Bridge",
              "Claude Opus 4.6",
              "Claude Sonnet",
              "Session Lifecycle Hooks",
              "Conversation Distillation",
              "Telegram API",
              "Discord Webhooks",
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
          I built a multi-agent autonomous AI system that runs 14 cron jobs nightly, manages a knowledge base spanning 3,978 memories, 1,880 entities, and 9,403 facts with full vector search, routes tasks across multiple models by cost and capability, and posts status reports to 9 Discord channels through 8 named agent identities. The real lesson was not about automation. It was about trust calibration: how much autonomy to grant, when to intervene, and what happens when you design a collaborator instead of a tool.
        </Tldr>

        {/* Stats bar */}
        <div className={cs.statsBar}>
          <div className={cs.stat}>
            <span className={cs.statNum}>14</span>
            <span className={cs.statLabel}>Active cron jobs</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>3,978</span>
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
            system built on top of OpenClaw (an agent orchestration platform) that runs 14 cron jobs between midnight and 5am ET, manages a named crew of specialized agents, routes tasks across multiple
            models based on cost and capability, distills every conversation into durable memory, posts morning briefings to Discord before I wake up, and writes
            session handoff notes so the next conversation picks up where the last one left off.
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
                <span className={cs.archDiagramNode}>Telegram Bot</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Discord Webhooks</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Brain Reader HTTP</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Tailscale VPN</span>
              </div>
              <p className={cs.archDiagramNote}>
                All device access is over a private mesh network. Brain Reader serves the
                workspace as browsable markdown from iPhone without a terminal.
                Telegram handles interactive conversations. Discord serves as the notification and reporting surface with 9 channels and 8 named agent identities (Clarence, Vera, Bruno, Atlas, Iris, Newton, Vesper, Raven), each posting with its own username and embed color.
              </p>
            </div>

            <div className={cs.archDiagramConnector}>↓</div>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Orchestration</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNodeAccent}>OpenClaw</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Cron Fleet (14 jobs, midnight-5am ET)</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Agent Crew</span>
              </div>
              <p className={cs.archDiagramNote}>
                OpenClaw schedules and dispatches agent sessions. 14 cron jobs run in a sequenced overnight window. Bootstrap context trimmed from 11 files to 7 (~18KB total). Session lifecycle hooks auto-load database context
                and HANDOFF.md on start, then write a fresh handoff note on stop, eliminating cold starts. A session-context.py script queries the database for a brief status snapshot that gets absorbed silently at session start.
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
                A custom model bridge translates between the orchestrator&apos;s API format and the
                underlying model providers. Cron jobs run on either Claude Sonnet (for reasoning tasks) or
                MiniMax via Ollama (free, local, for mechanical tasks). Opus is reserved for interactive sessions where model quality changes the output in ways that
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
                <span className={cs.archDiagramNode}>MCP Server (16 tools)</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>RAG: 3,978 memory + 9,403 fact vectors</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Obsidian Vault Sync</span>
              </div>
              <p className={cs.archDiagramNote}>
                A single consolidated SQLite database (~50MB) holds 3,901 active memories, 1,880 entities, and
                7,106 active facts, shared by all agents through a custom MCP server exposing 16 tools. Automated garbage collection archives low-value data while preserving behavioral corrections, user facts, and decisions. A conversation distillation pipeline processes conversations nightly, extracting decisions,
                corrections, and preferences into the memory DB automatically. A vector search layer
                (sqlite-vec + all-MiniLM-L6-v2, 384-dim) runs fully locally. Agents query by meaning, not just key. Syncs bidirectionally with an Obsidian vault. Knowledge pushes to Google Drive every 6 hours. Claude Code sessions have their own parallel memory layer (auto-memory files) that persists across conversations.
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
                Every session starts warm. The SessionStart hook runs session-context.py for a database status snapshot, reads HANDOFF.md for notes from the previous session, checks WORKING.md for current state, and reads R&D Council priorities. The stop hook writes handoff notes. A morning briefing cron job at 4:45 AM posts a full context summary to Discord before James wakes up at 5 AM. Zero cold starts.
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
            task gets immediate acknowledgment with a plan and time estimate. Three subagent types handle different
            work: Explore (research/discovery), Plan (architecture/strategy),
            and general-purpose (code/execution). Multiple independent tasks run in parallel.
            Clarence never blocks on a subagent.
          </p>

          <h3 className={styles.findingTitle}>Discord Agent Identities</h3>
          <p className={styles.body}>
            Each agent posts to Discord with its own username and signature color:
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
            The most consequential design element is what happens between midnight and 5am ET. Fourteen cron jobs run inside this window, deliberately sequenced so downstream jobs can build on upstream output. Zero expensive models in cron. They split across Claude Sonnet (reasoning/research) and MiniMax (mechanical scripts). The lightContext flag is enabled on every job to minimize token overhead.
          </p>

          <div className={cs.workList}>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>12:20 AM</span>
              <p className={cs.workDesc}><strong>Google Drive Coursework Sync</strong> (MiniMax): pulls new coursework files from Google Drive into the workspace.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>1:00 AM</span>
              <p className={cs.workDesc}><strong>Session Rotation</strong> (MiniMax): archives JSONL session files older than 24 hours.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>1:25 AM</span>
              <p className={cs.workDesc}><strong>Conversation Distillation</strong> (MiniMax): processes conversations, extracting decisions, corrections, and preferences into clarence.db. Every conversation becomes memory.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>2:05 AM</span>
              <p className={cs.workDesc}><strong>Daily Backup</strong> (MiniMax): workspace snapshot before anything mutates the knowledge files.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>3:00 AM</span>
              <p className={cs.workDesc}><strong>Ecosystem Intelligence Scan</strong> (Sonnet): monitors all frontier model providers, OpenClaw releases, agent frameworks, and independence paths. Posts to Discord.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>3:30 AM</span>
              <p className={cs.workDesc}><strong>Daily Job Search</strong> (MiniMax): aggregates 50+ sources for UX/AI opportunities.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>3:45 AM</span>
              <p className={cs.workDesc}><strong>R&D Council</strong> (Sonnet + Opus synthesis): five-agent debate across fixed lenses, then Opus synthesizes an executive memo. Posts to #rd-council Discord channel.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:00 AM</span>
              <p className={cs.workDesc}><strong>Obsidian Memory Sync</strong> (MiniMax): bidirectional sync between the Obsidian vault and clarence.db.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:10 AM</span>
              <p className={cs.workDesc}><strong>Nightly Consolidated Report</strong> (Sonnet): security, research, changelog monitoring, memory hygiene, and self-audit in one pass. Posts to Discord.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:15 AM</span>
              <p className={cs.workDesc}><strong>RAG Embedding Refresh</strong> (MiniMax): re-embeds new memories and facts into the vector search layer.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:30 AM Wed</span>
              <p className={cs.workDesc}><strong>Academic Paper Scan</strong> (Sonnet): weekly scan across cognitive accessibility, AI UX, HCI, FM synthesis.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:45 AM</span>
              <p className={cs.workDesc}><strong>Vault Reference Extraction</strong> (MiniMax): extracts URLs from brain/ research files into Obsidian vault entries with frontmatter, wikilinks, and DB sync.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:45 AM</span>
              <p className={cs.workDesc}><strong>Morning Briefing</strong> (MiniMax): posts a full context summary to #clarence Discord channel. Cron status, knowledge DB stats, R&D priorities, pending items. Ready before James wakes up.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>11:30 PM Mon</span>
              <p className={cs.workDesc}><strong>Weekly Memory GitHub Sync</strong> (MiniMax): pushes memory architecture and scripts to GitHub with credential scrubbing.</p>
            </div>
          </div>

          <p className={styles.body} style={{marginTop: "1.5rem"}}>
            Plus 5 system crontab jobs running around the clock: Google Drive pull (hourly), vault indexing (every 30 min), session cleanup (weekly), vault backup to Drive (6-hourly), knowledge sync to Drive (6-hourly).
          </p>

          <p className={styles.body}>
            <strong>Evolution note:</strong> the system originally ran 26 cron jobs. These were consolidated to 14 after diagnosing that Gemini Flash sub-agents were hallucinating tool calls rather than executing them. Fewer, more reliable jobs replaced scattered unreliable ones. The architectural lesson: more jobs is not better jobs.
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
            <strong>Overnight-only autonomy.</strong> All autonomous agent work runs between midnight and 5 AM ET. Nothing fires during the day. This is a deliberate trust boundary: the system earns autonomy in a window where errors are recoverable before they affect real-time work.
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
              protocols. A custom model bridge translates between them, making multiple model providers available
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
              Long-term memory is stored in a single consolidated SQLite database (clarence.db) with 3,978
              memories, 1,880 entities, and 9,403 facts, shared by all agents through a custom MCP server exposing 16 tools. The schema separates
              concerns: a <em>profiles</em> table holds identity facts (agent names, user preferences,
              project constants) with deterministic key lookup. No fuzzy search for things that must be exact.
              A <em>memories</em> table stores durable knowledge with soft invalidation: when a fact changes,
              the old record is marked invalid and a new one is written, preserving the audit trail.
            </p>
            <p className={styles.body}>
              The RAG layer is live: 3,901 memory vectors and 7,106 fact vectors with all-MiniLM-L6-v2
              embeddings (384-dim), running fully locally via sqlite-vec. Automated garbage collection prunes low-value catalog data while preserving all behavioral corrections and user knowledge. No separate vector
              database, no network hop. Agents query the knowledge base by meaning: &ldquo;what does
              James think about AI agent UX?&rdquo; returns the five most relevant records across all tables,
              regardless of how they were originally tagged.
            </p>
            <p className={styles.body}>
              The conversation distillation pipeline (conversation-distill.py) processes Telegram
              conversations nightly, extracting decisions, corrections, and preferences into the memory DB.
              This is what makes the memory system feel alive rather than static. James corrects something
              once in conversation, and it persists. The knowledge base grew from ~170 to 3,978 memories
              in part because this pipeline captures context that would otherwise evaporate. A retrieval feedback loop lets sessions flag results as useful or noise, creating a learning signal for future garbage collection.
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
            <h3 className={styles.findingTitle}>Multi-Surface Communication</h3>
            <p className={styles.body}>
              Discord (9 channels, 8 agent identities), Telegram (interactive conversations), Brain Reader HTTP (browsable workspace from any device), HANDOFF.md (session continuity). Each surface serves a different communication need. Discord for async notification and team-style reporting. Telegram for real-time dialogue. Brain Reader for passive monitoring.
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
              The knowledge base grew from ~170 to 3,978 memories. The conversation distillation pipeline
              accelerated that growth. But more memories does not automatically mean better recall. As the
              database scales, the vector search returns increasingly similar results, and the signal-to-noise
              ratio in retrieved context degrades. Memory needs pruning and consolidation, not just
              accumulation. This is the next hard problem.
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
              Fourteen cron jobs run overnight. The morning briefing (added April 2026) and Discord channel routing partially address this: cron reports go to #cron-reports, incidents to #incidents, R&D Council memos to #rd-council. But the gap between &ldquo;reported&rdquo; and &ldquo;observable&rdquo; remains. Silence is still ambiguous: does it mean everything worked, or that the reporting layer itself failed?
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
            <li>14 cron jobs running midnight-5am ET, all on cost-effective models, delivering to Discord and Telegram</li>
            <li>3,901 active memories, 1,880 entities, and 7,106 active facts in clarence.db with conversation distillation, automated GC, and retrieval feedback loop</li>
            <li>RAG layer: 7,106 fact vectors + 3,901 memory vectors with all-MiniLM-L6-v2 embeddings (384-dim), fully local</li>
            <li>9 Discord channels with 8 named agent identities posting with unique usernames and colors</li>
            <li>Morning briefing posted to Discord before 5 AM daily, session handoff notes for zero cold starts</li>
            <li>Bootstrap trimmed from 11 files to 7 (~18KB), memory files from 106KB to 40KB (62% reduction)</li>
            <li>Session lifecycle hooks: auto-load context on start, write handoff on stop</li>
            <li>Google Drive bidirectional sync: coursework pull, knowledge push every 6 hours</li>
            <li>Bidirectional Obsidian vault sync feeding the RAG layer</li>
            <li>R&D Council: 5-agent nightly debate producing strategic memos since March 24, 2026</li>
            <li>Daily job search aggregating 50+ sources</li>
            <li>Academic paper scanning (weekly) across cognitive accessibility, AI UX, HCI, FM synthesis</li>
            <li>Open source memory architecture: github.com/nomadjames/clarence-memory-structure</li>
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
              <strong>Closing the execution loop:</strong> the quick-wins queue and autonomous employee need
              a more reliable handoff. The goal is a self-improving loop that actually closes: research
              identifies an improvement, the queue captures it, the employee executes it overnight.
            </li>
            <li>
              <strong>Memory pruning and consolidation:</strong> 3,978 memories need active garbage collection.
              Duplicate facts, superseded preferences, and stale context degrade retrieval quality as the
              database scales. The next iteration needs to prune as aggressively as it accumulates.
            </li>
            <li>
              <strong>OWASP Agentic Top 10 integration:</strong> the new OWASP threat model for AI agents
              covers Confused Deputy and Skill-Inject attacks that are directly relevant to a system running
              multiple cron jobs with file and network access. Bruno&apos;s security audit needs these checks.
            </li>
            <li>
              <strong>SensorSynthFM integration:</strong> the capstone project (FM synthesis + iPhone sensor data) will integrate with Clarence&apos;s knowledge layer for research documentation.
            </li>
            <li>
              <strong>Refining the human-in-the-loop boundary:</strong> calibrating where autonomous action ends and human approval begins for higher-stakes tasks
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
              "API proxy design",
              "Private mesh networking (Tailscale)",
              "Security audit automation",
              "Discord webhook integration",
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
