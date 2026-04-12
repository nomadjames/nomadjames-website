import styles from "../accessibility-audit/page.module.css";
import cs from "./page.module.css";
import Tldr from "@/components/Tldr";
import PretextTitle from "@/components/PretextTitle";
import pulseData from "../../../../public/data/clarence-pulse.json";
import SmartBackLink from "@/components/SmartBackLink";

export const metadata = {
  title: "Clarence: Designing an Autonomous AI Collaborator | James Dishman",
  description:
    "A systems design case study on building Clarence: a persistent AI collaborator with Hermes on GPT-5.4 as the primary orchestrator, Claude Code as a bounded specialist path, and a SQLite knowledge base holding 3,394 active memories, 2,474 entities, 10,349 active facts, and 2,128 indexed vault notes. The current system combines hardened memory, explicit handoffs, overnight automation, and a documented migration path from OpenClaw to the present Hermes + specialist-lane model.",
};

type ClarencePulse = {
  heartbeat: {
    uptime_days: number;
    recent_activity?: string;
  };
  knowledge_stats: {
    active_facts: number;
    active_memories: number;
    indexed_vault_notes: number;
    total_entities: number;
  };
  system_vitals: {
    hermes_skills: number;
  };
};

const livePulse = pulseData as ClarencePulse;

export default function ClarencePage() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Back link */}
        <SmartBackLink fallbackHref="/portfolio" className={styles.backLink}>← Work</SmartBackLink>

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
              "Hermes Orchestration",
              "GPT-5.4 Primary Runtime",
              "Claude Code Specialist Lane",
              "Explicit Handoff Packets",
              "Read-Only Parallel Investigation",
              "Knowledge Base Architecture",
              "Memory Hardening",
              "Retrieval Feedback Loop",
              "Semantic Vector Search (RAG)",
              "Obsidian Sync + Vault Indexing",
              "Telegram Interface",
              "Discord Reporting",
              "Tailscale VPN",
              "Human-in-the-Loop Design",
              "Platform Migration Under Constraint",
            ].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        <section className={cs.liveShowcase}>
          <div className={cs.liveShowcaseHeader}>
            <span className={cs.graphTitle}>Live system</span>
            <span className={cs.graphCaption}>Interactive public-safe surfaces from the current Clarence stack</span>
          </div>
          <div className={cs.liveShowcaseGrid}>
            <a href="/lab/pulse" className={cs.liveCard}>
              <span className={cs.liveCardKicker}>System Pulse</span>
              <h2 className={cs.liveCardTitle}>Public-safe telemetry for the live Clarence system</h2>
              <p className={cs.liveCardBody}>
                {livePulse.heartbeat.uptime_days} days online since March 20, 2026. {livePulse.knowledge_stats.active_facts.toLocaleString()} active facts, {livePulse.knowledge_stats.active_memories.toLocaleString()} memories, {livePulse.system_vitals.hermes_skills.toLocaleString()} Hermes skills.
              </p>
              <span className={cs.liveCardMeta}>Open the Pulse page →</span>
            </a>
            <a href="/clarence-graph/index.html" className={cs.liveCard}>
              <span className={cs.liveCardKicker}>Knowledge Graph</span>
              <h2 className={cs.liveCardTitle}>Interactive graph view of the public Clarence entity slice</h2>
              <p className={cs.liveCardBody}>
                A visual entry point into the system architecture and memory structure. It is useful, explorable, and immediately shows that this is a designed system, not a static case study.
              </p>
              <span className={cs.liveCardMeta}>Open the graph →</span>
            </a>
          </div>
        </section>

        <Tldr>
          Clarence now runs as a tandem system: Hermes on GPT-5.4 handles the main conversation, planning, memory stewardship, and synthesis, while Claude Code is reserved for bounded specialist work. The knowledge layer currently holds {livePulse.knowledge_stats.active_memories.toLocaleString()} active memories, {livePulse.knowledge_stats.total_entities.toLocaleString()} entities, {livePulse.knowledge_stats.active_facts.toLocaleString()} active facts, and {livePulse.knowledge_stats.indexed_vault_notes.toLocaleString()} indexed Obsidian notes. The most important design work happened after the migration, not before it: hardening memory, making routing explicit, and turning specialist escalation into a deliberate leverage path instead of a default habit. The result is less flashy than a fully autonomous demo, but far more trustworthy.
        </Tldr>

        {/* Stats bar */}
        <div className={cs.statsBar}>
          <div className={cs.stat}>
            <span className={cs.statNum}>{livePulse.knowledge_stats.active_facts.toLocaleString()}</span>
            <span className={cs.statLabel}>Active facts in knowledge DB</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>{livePulse.knowledge_stats.active_memories.toLocaleString()}</span>
            <span className={cs.statLabel}>Active memories in knowledge DB</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>{livePulse.knowledge_stats.indexed_vault_notes.toLocaleString()}</span>
            <span className={cs.statLabel}>Indexed Obsidian vault notes</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>{livePulse.system_vitals.hermes_skills.toLocaleString()}</span>
            <span className={cs.statLabel}>Hermes skills available</span>
          </div>
        </div>

        {/* Live Knowledge Graph */}
        <div className={cs.graphSection}>
          <div className={cs.graphHeader}>
            <span className={cs.graphTitle}>Live Knowledge Graph</span>
            <span className={cs.graphCaption}>Interactive public slice of the Clarence entity graph</span>
          </div>
          <iframe
            src="/clarence-graph/index.html"
            title="Clarence Knowledge Graph Visualization"
            loading="lazy"
            className={cs.graphFrame}
          />
        </div>

        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>Documentation and System Notes</h2>
          <p className={styles.body}>
            Clarence now has a dedicated system wiki because too much durable system knowledge was
            trapped in chat history, repo docs, and a fragile note surface. I wrote a companion article
            about why that became necessary.
          </p>
          <p className={styles.body}>
            Read it here: <a href="/writing/clarence-needed-a-system-wiki">Why Clarence Needed a System Wiki</a>.
          </p>
          <p className={styles.body}>
            The public-safe architecture notes currently live in the public repo at <a href="https://github.com/nomadjames/clarence-architecture" target="_blank" rel="noopener noreferrer">github.com/nomadjames/clarence-architecture</a>. The raw internal system wiki stays private, which is the correct boundary.
          </p>
        </section>

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
            system running on the Hermes gateway, hard-pinned to GPT-5.4 via OpenAI, with Claude Code used as a bounded
            specialist path rather than the main brain. After the forced migration off the old OpenClaw stack, the most
            important work was not just restoring functionality. It was hardening memory: stale embeddings, duplicate
            conversation memories, broken retrieval paths, dead Obsidian links, and fake-green health checks all had to be
            dragged into the light and fixed. Clarence now maintains over 10,000 active facts and 3,000 active memories
            with semantic search, retrieval feedback, duplicate control, Obsidian indexing, overnight briefings, and
            session handoff notes so the next conversation actually starts from continuity instead of amnesia.
          </p>
          <p className={styles.body}>
            I am both the designer and the primary user of this system. That dual position is unusual, and worth
            examining explicitly as part of this case study.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Changed After the OpenAI Switch</h2>
          <p className={styles.body}>
            The switch to OpenAI was not just a provider swap. It forced a cleanup of assumptions. I stopped treating
            Clarence as a clever prompt chain and started treating it like infrastructure. That meant defining a memory
            contract, deciding what belonged in hot injected memory versus structured database memory versus transcript
            recall, and then making the retrieval layer honest enough to trust.
          </p>
          <p className={styles.body}>
            Since the switch, I hardened the system in ways that matter for real use: semantic retrieval now returns
            stable IDs, feedback can mark results as useful or noise, ranking adjusts based on that feedback, duplicate
            conversation memories can be archived conservatively instead of multiplying forever, and the health checks now
            report freshness instead of flattering coverage numbers. Obsidian indexing was repaired too, with real YAML
            parsing, sync failure detection, stale path repair, and Chroma cleanup for deleted files.
          </p>
          <p className={styles.body}>
            That work is less glamorous than a multi-agent demo, but it is what makes Clarence feel like a collaborator
            instead of a novelty. The value is not that it can answer a question once. The value is that it can still be
            coherent next week, after corrections, migrations, overnight jobs, and hundreds of accumulated decisions.
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
            collaboration. I built Clarence by following operational need, not by reading the
            literature. Mapping what I built to the emerging vocabulary, after the fact, is useful
            because it shows the reasoning was design-driven rather than borrowed from a framework.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Orchestrator-Specialist Pattern</h3>
            <p className={styles.body}>
              The dominant architecture in multi-agent systems: a supervisor agent delegates to
              specialized agents. In Clarence, the orchestrator routes to named agents, each with a fixed role, a
              designated model tier, and a constrained scope. The pattern lines up with what Microsoft Research
              describes in Magentic-UI, which I learned about after the fact rather than before.
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
              preference editors for agent systems. Clarence&apos;s memory architecture is an
              implementation of the same principle, arrived at independently: the conversation
              distillation pipeline, the entity-fact-memory schema, the Obsidian vault sync, and the
              RAG retrieval layer all serve the same goal. The user&apos;s
              corrections and preferences should persist across sessions without the user having to
              re-state them. The design question is not whether to give agents memory. It is how to make
              that memory visible, editable, and trustworthy.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Adaptive Model Routing</h3>
            <p className={styles.body}>
              Industry patterns describe routing between fast/cheap agents and powerful/expensive agents
              based on task complexity. Clarence now uses a stricter split: Hermes stays hard-pinned to
              GPT-5.4 for the main runtime, while cheaper or specialized support paths are used only when
              the task is clearly bounded. The lesson from operating this is that routing should be boring.
              Ambitious dynamic routing sounds elegant, but a stable primary brain with explicit support
              paths is easier to trust, debug, and maintain.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Structured Multi-Lens Review</h3>
            <p className={styles.body}>
              One useful historical pattern in the system was structured review through multiple fixed lenses:
              market analysis, UX research, technical architecture, product strategy, and adversarial critique.
              The value was not the theater of many personalities. The value was forcing disagreement into the open.
              When every lens agreed, the answer was usually obvious. When they conflicted, the synthesis work got interesting.
            </p>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>System Architecture</h2>
          <p className={styles.body}>
            The current stack is best understood as a federation, not a merger. Hermes owns the main conversation,
            memory, and orchestration layer. Claude Code runs alongside it as a premium specialist path for bounded
            repo work and focused investigations. The point is not to make one system do everything. The point is to
            keep the interfaces explicit enough that each system can be trusted for the job it is actually good at.
          </p>

          <div className={cs.archDiagram}>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Interface</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNodeAccent}>Hermes + GPT-5.4</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Telegram (Franklin)</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>CLI / Local Tools</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Discord Reports</span>
              </div>
              <p className={cs.archDiagramNote}>
                Hermes on GPT-5.4 is the primary user-facing runtime. Telegram remains the mobile conversation surface,
                the local CLI is the high-control workspace, and Discord is the async reporting layer. Claude Code is
                not the default front door. It is the deliberate escalation path when the work benefits from stronger
                repo-level execution or code reasoning.
              </p>
            </div>

            <div className={cs.archDiagramConnector}>↓</div>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Orchestration</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNodeAccent}>Hermes Planning Layer</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Claude Handoff Packets</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Claude Code Specialist Lane</span>
              </div>
              <p className={cs.archDiagramNote}>
                The current handoff model is explicit. Hermes frames the task, names the scope, and decides whether
                specialist escalation is needed at all. The current handoff stack includes a quick dispatch wrapper for
                common cases, a JSON-spec launcher for structured task bundles, and a packet-level parallel runner for
                up to three read-only investigations at once.
              </p>
            </div>

            <div className={cs.archDiagramConnector}>↓</div>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Routing</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNodeAccent}>OpenAI for volume</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Claude Code for leverage</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Free support paths when bounded</span>
              </div>
              <p className={cs.archDiagramNote}>
                The routing rule is simple because the budget is real. GPT-5.4 handles the daily conversation,
                decomposition, explanation, and synthesis. Claude Code is reserved for higher-leverage repo work and
                focused investigation bursts. Cheaper or free support paths still exist, but they are helpers, not the
                main brain. The operating rule is blunt by design: OpenAI for volume, Claude Code for leverage.
              </p>
            </div>

            <div className={cs.archDiagramConnector}>↓</div>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Memory</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNodeAccent}>clarence.db + Hermes Memory</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>RAG + Deterministic Profiles</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Obsidian Vault Sync</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Session Handoff Notes</span>
              </div>
              <p className={cs.archDiagramNote}>
                The knowledge database currently holds 3,394 active memories, 2,474 entities, 10,349 active facts,
                and 14,882 total facts. The Obsidian vault contains 2,128 markdown notes. Hermes also keeps a compact
                hot-memory layer in MEMORY.md and USER.md for turn-level continuity. The important design choice is not
                just storage. It is ownership: Hermes remains the canonical memory steward, and Claude gets bounded,
                task-specific access instead of ambient omniscience.
              </p>
            </div>

            <div className={cs.archDiagramConnector}>↓</div>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Execution</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNode}>Overnight Jobs</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>HANDOFF.md</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Read-Only Claude Parallelism</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Manual Implementation Escalation</span>
              </div>
              <p className={cs.archDiagramNote}>
                As of April 10, 2026, Hermes has 15 scheduled overnight jobs, including knowledge sync, database
                health checks, portfolio drift audits, cost reporting, calendar briefing, job search, and overnight
                summaries. The new Claude automation lane is intentionally narrower: automated parallel read-only
                investigations are live, while actual implementation still routes through manual or interactive Claude
                Code sessions. That is a real deviation from the original plan, and it is documented here on purpose.
              </p>
            </div>

          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Kept and What I Cut</h2>
          <p className={styles.body}>
            The older system experimented more aggressively with ambient multi-agent orchestration and identity.
            Some of that produced useful patterns. Some of it was theater. The current version is intentionally tighter:
            Hermes owns the main conversation and memory, Claude Code is the bounded specialist lane, and parallelism is
            used only when it earns its keep.
          </p>
          <p className={styles.body}>
            That is a better design. The goal is not to maximize the number of moving parts. The goal is to make the
            system legible enough to trust, constrained enough to debug, and useful enough to survive contact with real work.
          </p>
        </section>

        {/* The Overnight Loop */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The Overnight Loop</h2>
          <p className={styles.body}>
            The most consequential design element is still what happens between 11 PM and 5 AM ET. The current
            Hermes scheduler now has 15 scheduled jobs again, but that number only makes sense in historical context.
            The path was 26 jobs on the older system, then a consolidation down to 14, then a cautious Hermes rebuild
            that briefly ran only 3, and now a broader overnight set that includes knowledge sync, database health,
            portfolio drift auditing, cost reporting, calendar briefing, job search, and overnight summaries. The
            rule underneath all of those iterations stayed the same: do autonomous work at night, finish before the
            morning, and make the outputs observable.
          </p>

          <div className={cs.workList}>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>12:10 AM</span>
              <p className={cs.workDesc}><strong>Knowledge Sync</strong>: pulls reference material, refreshes the vault-backed knowledge layer, and reports the run overnight. The vault currently contains 2,128 markdown notes.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:10 AM</span>
              <p className={cs.workDesc}><strong>Morning Calendar Briefing</strong>: fetches the day&apos;s calendar via Apple iCloud CalDAV and delivers it before James starts the day.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:20 AM</span>
              <p className={cs.workDesc}><strong>Daily Job Search</strong>: aggregates UX, AI, and HCI opportunities and posts the results in the morning window.</p>
            </div>
          </div>

          <p className={styles.body} style={{marginTop: "1.5rem"}}>
            <strong>Evolution note:</strong> the system originally ran 26 cron jobs on OpenClaw. Those were
            consolidated down after diagnosing that early cheap sub-agents were hallucinating tool calls
            rather than executing them. The lesson from that round was real: more jobs is not better jobs, and
            cheap models that produce fiction are worse than no models at all. The Hermes pipeline starts from
            3 deliberately, partly because the migration is fresh and partly because I want each rebuilt job
            to earn its place rather than be ported on momentum. Whether the consolidation principle holds
            across the second iteration is still an open question. Six nights is not enough data.
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
            not just a cost decision. It was a trust decision. The system initially leaned too hard on cheap routing for cron jobs, but tool-call hallucination failures forced a stricter policy. The lesson: cheaper models save budget only if the output is real. Trust in the overnight loop required a stable primary runtime and bounded support paths that actually execute tools instead of hallucinating what tool calls would look like.
          </p>
          <p className={styles.body}>
            The Acknowledge First rule is another trust calibration. Every task gets immediate acknowledgment
            with a plan and time estimate before any work begins. This was not always the case. The rule
            emerged from real friction: tasks would disappear into subagent execution with no signal back
            to me about whether they were understood correctly. The fix was not more autonomy or less
            autonomy. It was better communication at the boundary.
          </p>
          <p className={styles.body}>
            The bigger trust mechanism now is explicit continuity rather than magical continuity. Hermes keeps hot
            memory, session handoff notes, and a durable SQLite knowledge layer live today. The older nightly
            conversation-distillation idea is still part of the project&apos;s path, but it should be read here as a
            historical design direction and rebuild target, not as a claim that every correction is currently being
            distilled automatically every night.
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
              The routing policy is now deliberately less clever and more disciplined. GPT-5.4 carries the day-to-day
              conversation and planning load. Claude Code is escalated when the task is code-heavy enough to justify
              burning the subscription on purpose. That sounds less elegant than a dynamic orchestra of models, but it
              is much easier to reason about and much harder to waste money with.
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
            <h3 className={styles.findingTitle}>Bridging Hermes and Claude Code</h3>
            <p className={styles.body}>
              The most recent architecture change is not another generalized bridge layer. It is a narrower handoff
              stack. Hermes now writes bounded Claude task packets, launches them through a small launcher layer, and
              can run up to three read-only Claude investigations in parallel. A quick-dispatch wrapper handles common
              same-subsystem bursts, a JSON launcher handles structured task bundles, and a packet runner executes the
              resulting queue with per-packet locking.
            </p>
            <p className={styles.body}>
              This is intentionally less ambitious than full autonomous implementation. The system drifted away from
              the original plan in one important way: automated Claude execution is currently investigation-only, while
              actual implementation still happens in manual or interactive Claude Code sessions. That limitation is a
              real design tradeoff, not something I want the case study to blur.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>SQLite Knowledge Database + RAG</h3>
            <p className={styles.body}>
              Long-term memory is still stored in a single consolidated SQLite database (clarence.db). As of April 11, 2026, it holds 3,394 active memories (4,261 total), 2,474 entities, and 10,349 active facts (14,882 total).
              The schema separates deterministic profile lookup from fuzzier memory retrieval, which matters more than it
              sounds. Names, preferences, and project constants should resolve exactly. Reflection, history, and reference
              material should be searchable by meaning.
            </p>
            <p className={styles.body}>
              The Obsidian side of the system is also still real: 2,128 markdown notes in the vault, synced into the
              knowledge layer and available for retrieval. This is one of the reasons the system survived migration pressure.
              The durable substrate was portable even when the execution layer changed.
            </p>
            <p className={styles.body}>
              What changed after the migration was not that memory disappeared. It was that I stopped pretending the whole
              memory story was fully rebuilt. Hot memory, deterministic profiles, vector search, and vault indexing are live.
              Some of the older nightly distillation behavior belongs to the documented path of the project and to the next
              round of rebuilding, not to the list of claims I can honestly make in present tense.
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
              Discord (15 channels in the current directory), Telegram (interactive conversations), HANDOFF.md (session continuity). Each surface serves a different communication need. Discord for async notification and overnight reporting. Telegram for real-time dialogue and morning briefings. HANDOFF.md for session-to-session continuity.
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
            <h3 className={styles.findingTitle}>The Plan-Execution Gap</h3>
            <p className={styles.body}>
              The current system is better at framing work than completing every part of the original vision. Hermes is
              good at planning, memory stewardship, and deciding when Claude Code is worth invoking. The new handoff stack
              is good at bounded parallel investigation. But that still leaves a gap between the original tandem plan and
              the present implementation.
            </p>
            <p className={styles.body}>
              The gap is simple to describe: Claude automation is currently investigation-first, not implementation-first.
              That is safer and more honest than pretending otherwise, but it means part of the original promise remains a
              roadmap item rather than a finished capability.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Budget Constraint as Design Constraint</h3>
            <p className={styles.body}>
              The routing policy exists because compute cost is a real design material, not an abstract one. GPT-5.4 is
              the daily driver because it is the main conversational and planning layer. Claude Code is protected for the
              top slice of tasks where repo-level execution or code reasoning genuinely matters.
            </p>
            <p className={styles.body}>
              That creates a permanent calibration problem. If I escalate too early, I waste Claude. If I escalate too
              late, I waste time and trust. The current tandem model is my answer so far, but it is not a solved problem.
              It is a policy I expect to keep refining as SensorSynthFM work becomes more serious.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Memory Growth Without Garbage Collection</h3>
            <p className={styles.body}>
              The knowledge base grew from ~170 to 4,261 memories and the facts table exploded to 14,882
              entries after vault fact extraction processed thousands of notes and documents. More data does not automatically
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
            <li>Knowledge database verified live on April 11, 2026: 3,394 active memories (4,261 total), 2,474 entities, 10,349 active facts (14,882 total)</li>
            <li>Obsidian knowledge layer verified live: 2,128 markdown notes indexed into the working knowledge stack</li>
            <li>Hermes skill library verified live: 137 skills spanning research, development, infrastructure, and creative workflows</li>
            <li>Overnight Hermes scheduler verified live: 15 scheduled jobs spanning knowledge sync, health checks, cost reporting, calendar, job search, and summaries</li>
            <li>Hermes remains hard-pinned to GPT-5.4 as the primary orchestrator and memory steward</li>
            <li>Claude Code is now integrated as a bounded specialist lane rather than a casual default assistant</li>
            <li>Read-only Claude handoff stack built: packet wrapper, parallel runner, JSON launcher, and quick-dispatch CLI</li>
            <li>Parallel Claude investigation path verified live with successful 2-task and 3-task runs</li>
            <li>Explicit handoff artifacts now exist: outgoing packets, results, archive trail, HANDOFF.md continuity notes</li>
            <li>Historical migration from OpenClaw to Hermes preserved while present-day architecture is now documented separately</li>
            <li>Open source memory architecture remains published at github.com/nomadjames/clarence-memory-structure</li>
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
            vector search, and schema management. No more raw SQL scattered across 36 scripts. One module, one
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
              105 portfolio changes tracked with timestamps, categories, and RAG embeddings. Every meaningful
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
            <h3 className={styles.findingTitle}>The Split Architecture, Then and Now</h3>
            <p className={styles.body}>
              Friday&apos;s breakthrough was still real, but it needs to be read as an intermediate architecture rather than
              the final one. The immediate post-migration answer was to put Claude Code beside Hermes and use an MCP
              bridge to reach memory and cheaper helper models. That was the right move at the time because it preserved
              leverage under Anthropic&apos;s new subscription rules.
            </p>
            <p className={styles.body}>
              The current design has tightened since then. Hermes on GPT-5.4 is now the primary orchestrator and memory
              owner. Claude Code is still crucial, but as a bounded specialist lane rather than the always-on front end.
              Tonight&apos;s handoff work pushed that design further: explicit Claude task packets, parallel read-only
              investigations, and launch tooling that treats Claude as a premium execution surface instead of a place to
              casually burn compute.
            </p>
            <p className={styles.body}>
              That is the path I want preserved in the case study. The MCP-bridge stage mattered. The current tandem model
              matters too. The project did not jump from OpenClaw to a perfect final state. It evolved through a sequence
              of constrained decisions.
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
              <strong>Bringing Claude back in line with the original tandem plan:</strong> the current automation lane
              is strong for bounded investigation, but it still stops short of the original vision where Claude Code
              also handles tightly-scoped implementation with tests and verification. That gap is now explicit.
            </li>
            <li>
              <strong>Using SensorSynthFM as the real proving ground:</strong> the next serious development phase will
              stress this architecture for real. AudioKit engine startup, CoreMotion input plumbing, FM voice design,
              preset flow, and SwiftUI state boundaries are exactly the kind of bounded but high-leverage work this
              Hermes + Claude tandem is supposed to support.
            </li>
            <li>
              <strong>Continuing the overnight rebuild without lying about it:</strong> the scheduler is broader again,
              but observability and honest health reporting still matter more than job count. Every overnight capability
              has to earn trust, not just come back because it once existed.
            </li>
            <li>
              <strong>Making cost and progress visible:</strong> the budget pressure that drove the migration is still a
              design material. The system needs better operator-facing visibility into what Claude is doing, what it cost,
              and whether silence means working, waiting, or broken.
            </li>
            <li>
              <strong>Preserving the path, not just the snapshot:</strong> this case study should document how the system
              moved from OpenClaw to Hermes, through the MCP-bridge phase, into the current GPT-primary tandem model.
              The path is the design lesson.
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

        {/* Verification timestamp */}
        <p className={cs.verifiedStamp} data-verified="2026-04-10">
          Current-state numbers and architecture on this page were re-verified against the live system on April 10, 2026. Historical sections remain intentionally dated where the path itself matters.
        </p>

        {/* Footer nav */}
        <nav className={cs.caseNav}>
          <SmartBackLink fallbackHref="/portfolio" className={cs.navLink}>← All Work</SmartBackLink>
          <a href="/portfolio/accessibility-audit" className={cs.navLink}>Accessibility Audit →</a>
        </nav>

      </main>
    </div>
  );
}
