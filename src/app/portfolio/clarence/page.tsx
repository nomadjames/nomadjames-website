import styles from "../accessibility-audit/page.module.css";
import cs from "./page.module.css";
import Tldr from "@/components/Tldr";
import PretextTitle from "@/components/PretextTitle";
import pulseData from "../../../../public/data/clarence-pulse.json";
import clarenceStats from "@/data/clarence-stats.json";
import SmartBackLink from "@/components/SmartBackLink";
import ClarenceGraphFrame from "@/components/ClarenceGraphFrame";

export const metadata = {
  title: "Clarence: Designing an Autonomous AI Collaborator | James Dishman",
  description:
    `A systems design case study on building Clarence: a persistent AI collaborator with Hermes on GPT-5.4 as the primary orchestrator, Claude Code as a bounded specialist path, and a SQLite knowledge base holding ${clarenceStats.active_memories.toLocaleString()} active memories, ${clarenceStats.entities.toLocaleString()} entities, ${clarenceStats.active_facts.toLocaleString()} active facts, and ${clarenceStats.indexed_vault_notes.toLocaleString()} indexed vault notes. The current system combines hardened memory, explicit handoffs, overnight automation, and a documented migration path from OpenClaw to the present Hermes + specialist-lane model.`,
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
    cron_jobs_active: number;
  };
};

const livePulse = pulseData as ClarencePulse;
const stats = clarenceStats;

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
              "Hermes",
              "GPT-5.4 Primary Runtime",
              "Claude Opus 4.6",
              "Gemini Flash",
              "MCP Bridge Architecture",
              "Claude Code Specialist Lane",
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
                {livePulse.heartbeat.uptime_days} days online since March 20, 2026. {stats.active_facts.toLocaleString()} active facts, {stats.active_memories.toLocaleString()} memories, {livePulse.system_vitals.hermes_skills.toLocaleString()} Hermes skills.
              </p>
              <span className={cs.liveCardMeta}>Open the Pulse page →</span>
            </a>
            <a href="/clarence-graph/" className={cs.liveCard}>
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
          I built a production AI system for persistent memory, task routing, and daily collaboration. It started on one platform, outgrew it, and had to be migrated under a forced deadline when the platform changed its access rules. The system now runs on a completely different architecture than where it began. The case study is not about the technology. It is about trust: how much autonomy to grant an AI collaborator, when to intervene, and what happens when the ground shifts underneath a system you depend on every day.
        </Tldr>

        {/* Stats bar */}
        <div className={cs.statsBar}>
          <div className={cs.stat}>
            <span className={cs.statNum}>20</span>
            <span className={cs.statLabel}>Active cron jobs</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>4,266</span>
            <span className={cs.statLabel}>Memories in knowledge DB</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>62%</span>
            <span className={cs.statLabel}>Bootstrap memory reduction</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>14,887</span>
            <span className={cs.statLabel}>Indexed facts with full embedding coverage</span>
          </div>
        </div>

        {/* Live Knowledge Graph */}
        <div className={cs.graphSection}>
          <div className={cs.graphHeader}>
            <span className={cs.graphTitle}>Live Knowledge Graph</span>
            <span className={cs.graphCaption}>Interactive public slice of the Clarence entity graph</span>
          </div>
          <ClarenceGraphFrame
            className={cs.graphFrame}
            title="Clarence Knowledge Graph Visualization"
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
            The question I set out to explore: <strong>what does it take to make an AI system useful across
            sessions instead of only within one chat?</strong> It needs durable context, explicit boundaries,
            and enough judgment to stay useful without pretending it should decide everything on its own.
          </p>
          <p className={styles.body}>
            Clarence is my attempt to answer that question in practice. It is not a chatbot. It is an autonomous system that runs 20 scheduled cron jobs overnight, manages a knowledge database of over 4,200 memories and nearly 15,000 indexed facts, routes tasks across models based on what each job actually needs, distills every conversation into durable memory, and writes nightly reports that feed into what it does while I sleep. The system was originally built on OpenClaw, a different orchestration platform. In April 2026, the platform it depended on changed its access rules with minimal notice. I migrated the entire runtime to Hermes, a new orchestrator running GPT-5.4, in under 48 hours. The memory layer, the cron architecture, and the collaboration patterns survived. The infrastructure underneath them did not.
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

        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>Public Read-Only Access</h2>
          <p className={styles.body}>
            The hard part is not getting a good answer once. It is carrying context forward after the chat ends. If
            memory ends at the context window, every new session starts with reconstruction. I built Clarence because I
            wanted memory that survives that reset. The current knowledge layer holds {stats.active_memories.toLocaleString()} active memories, {stats.active_facts.toLocaleString()} active facts, and {stats.indexed_vault_notes.toLocaleString()} indexed vault notes.
          </p>
          <p className={styles.body}>
            The recent milestone was putting that memory on a public read-only MCP path without opening writes. The
            endpoint lives at <a href="https://clarence-memory.nomadjames.com/mcp" target="_blank" rel="noopener noreferrer">clarence-memory.nomadjames.com/mcp</a>.
            Cloudflare fronts it. A local Streamable HTTP bridge serves it on port 8765. The public health check is at <a href="https://clarence-memory.nomadjames.com/healthz" target="_blank" rel="noopener noreferrer">/healthz</a>.
            Claude Code reaches the same read-only server through a local alias in ~/.claude.json. Hermes still owns writes.
          </p>
          <p className={styles.body}>
            The real work was the boundary, not the endpoint. The main 384-dimensional memory and fact indexes now line
            up with the active tables, and the missing read methods are exposed through MCP. Claude gets bounded
            retrieval instead of raw database access. I also set up a second NVIDIA embedding lane for hybrid retrieval
            experiments, but writes still go through Hermes only.
          </p>
          <p className={styles.body}>
            The work was messy. I had to patch a vendored MCP SDK inside a pinned supergateway install so duplicate SSE
            GET requests would stop killing the child process on reconnect. I also had to anonymize the public graph
            export so I could show the structure on the site without exposing entity names. None of that is glamorous.
            It is what turned this from a local demo into something I can expose with a straight face.
          </p>
          <p className={styles.body}>
            That matters because Clarence is not the thing I am trying to show off. It is the layer under the next
            round of work, especially SensorSynthFM. When I come back to that project, I do not want to reconstruct old
            decisions, blockers, and experiments from scratch. I want Clarence to remember where the work stopped and
            hand that context over safely when a specialist model needs it.
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
            The system has five layers. Each one reflects a design decision, not just a technical choice.
          </p>
          <p className={styles.body}>
            The interface layer runs through Telegram, Discord, and now claude.ai via a remote MCP bridge tunneled through Cloudflare. All device access goes over either Tailscale (private mesh) or the Cloudflare tunnel (for external AI clients). I move between Linux, iPhone, and iPad throughout the day. The system has to be reachable from all of them without exposing anything to the public internet.
          </p>
          <p className={styles.body}>
            The orchestration layer is Hermes, running GPT-5.4 via OpenAI. It schedules 20 cron jobs in the overnight window between 11 PM and 4:45 AM ET, plus a bridge health watchdog that runs every five minutes around the clock. Each job is isolated with its own context scope and delivery target. The system was originally orchestrated by OpenClaw. When that platform became unavailable, Hermes replaced it. The migration preserved everything above the orchestrator: memory, crons, collaboration patterns. What changed was the engine, not the car.
          </p>
          <p className={styles.body}>
            The model layer routes work based on capability, not cost. All 20 cron jobs currently run on GPT-5.4 or as direct script executions. Ollama cloud models (DeepSeek V3.2, Qwen3 Coder, Gemma 4, MiniMax, and others) are available for supporting work and research. Model switching is immediate via config. The routing philosophy shifted over time from cost-first (when the system ran on free-tier models to keep the overnight loop at zero cost) to capability-first (use the model that produces the best result for each task).
          </p>
          <p className={styles.body}>
            The memory layer is a single SQLite database (clarence.db) holding 4,266 memories, 14,887 facts, 2,475 entities, and 283 entity relations. All agents access it through MCP servers: 16 read-only tools for retrieval, plus a separate write-capable ops server for task dispatch and system management. Two embedding sets run in production: MiniLM 384-dimensional and NVIDIA 2048-dimensional, both at 100% coverage. Agents query by meaning, not keywords. A conversation distillation pipeline processes conversations nightly, extracting decisions, corrections, and preferences into the database automatically. An Obsidian vault syncs bidirectionally: what I write, agents can read.
          </p>
          <p className={styles.body}>
            The session layer handles continuity. Every session starts warm via auto-loaded context. Stop hooks write handoff notes so the next session knows what happened. Nightly rotation archives old session files. Memory files were trimmed from 106KB to 40KB so every session starts with less noise and more signal.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Agent Crew</h2>
          <p className={styles.body}>
            Naming agents was a deliberate design choice, not decoration. Names create accountability. When a named agent produces output, I read it differently than output from an anonymous function call. The names also make role boundaries explicit across the codebase and the cron config.
          </p>
          <p className={styles.body}>
            The current system runs 20 jobs across distinct roles: system health monitoring, knowledge synchronization, cost tracking, portfolio drift auditing, research briefings, conversation distillation, memory consolidation, calendar briefings, model roster evaluation, and a bridge health watchdog added in April 2026 after a day of diagnosing reliability problems in real time with Claude as a peer debugger.
          </p>
          <p className={styles.body}>
            The delegation architecture follows hard rules. Clarence orchestrates. Subagents execute. Every task gets immediate acknowledgment with a plan and time estimate. Multiple independent tasks run in parallel. Clarence never blocks on a subagent. It stays available to coordinate while work runs in the background.
          </p>
          <p className={styles.body}>
            The earlier version of this system used named characters for each role: Felix as chief of staff, Bruno for security audits, Ada for memory consolidation, a five-agent R&amp;D Council that held structured debates. Those names reflected a phase where the system&apos;s personality was part of the design experiment. The current architecture is leaner. The roles persist. The theater around them has been stripped back in favor of reliability and clarity.
          </p>
        </section>

        {/* The Overnight Loop */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The Overnight Loop</h2>
          <p className={styles.body}>
            The most consequential design element is what happens while I sleep. Twenty cron jobs run between 11 PM and 4:45 AM ET, staggered to avoid collisions. They are sequenced deliberately: the conversation distillation pipeline processes the day&apos;s conversations first, so the memory database is current before the research and reporting jobs run against it. A health check job at 3 AM verifies database integrity. An overnight summary at 4:23 AM compiles everything into a report ready when I wake up. A daily executive brief at 4:30 AM synthesizes priorities for the day ahead.
          </p>
          <p className={styles.body}>
            The self-improving loop works like this: nightly audits surface improvements. Those improvements feed a task queue. Execution jobs pick up the queue and do the work. The next night&apos;s audit reviews what was done. The conversation distillation pipeline means every correction I make during the day feeds back into the memory layer that night. The system compounds overnight rather than just reporting.
          </p>
          <p className={styles.body}>
            In practice, this loop has a write-only failure mode I have not fully solved. The audit produces excellent proposals, but the execution step does not always pick them up correctly. The proposals accumulate without always turning into action. Reporting awareness is not the same as fixing the underlying reliability issue. I keep this paragraph here because a case study that hides its failures is a sales document.
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
            <h3 className={styles.findingTitle}>Token Budget as Design Material</h3>
            <p className={styles.body}>
              Token cost shapes architecture. The system went through an aggressive optimization pass: the self-audit prompt trimmed from 7,582 characters to 1,276. Bootstrap files trimmed from 11 to 7. Memory files cut from 106KB to 40KB. Every session starts with less noise and more signal.
            </p>
            <p className={styles.body}>
              The routing philosophy has evolved. The system originally ran all overnight work on free-tier models to keep cost at zero. The current architecture runs on GPT-5.4 across the board, with cost as a secondary constraint behind capability. That shift reflects a real lesson: cheap models produce output that looks complete but degrades in ways you do not notice until something downstream depends on it. Capability-first routing costs more but compounds better.
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
            <h3 className={styles.findingTitle}>Remote Access and the MCP Bridge</h3>
            <p className={styles.body}>
              The system now exposes two MCP (Model Context Protocol) servers through Cloudflare tunnels: a read-only memory server for retrieval and a write-capable ops server for task dispatch. An OAuth 2.1 shim authenticates external clients. This is what allows claude.ai to function as a peer interface alongside Telegram and the command line: it can query memory, dispatch tasks to Hermes, and read results without being on the local network. Building this bridge, and then spending an entire day debugging its reliability with Claude while I was at my day job, was one of the more honest tests of whether the system actually works under real conditions.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Memory Architecture</h3>
            <p className={styles.body}>
              Long-term memory lives in a single SQLite database with 4,266 memories, 14,887 facts, and full embedding coverage across two vector sets. The schema separates concerns: a profiles table holds identity facts with deterministic lookup (no fuzzy search for things that must be exact), a memories table stores durable knowledge with soft invalidation (when a fact changes, the old record is marked invalid and a new one is written, preserving the audit trail).
            </p>
            <p className={styles.body}>
              The conversation distillation pipeline is what makes the memory system feel alive rather than static. I correct something once in conversation, and it persists. The knowledge base grew from roughly 170 memories to over 4,200 largely because this pipeline captures context that would otherwise evaporate.
            </p>
            <p className={styles.body}>
              An Obsidian vault syncs bidirectionally with the database. Writing in Obsidian feeds the retrieval layer without any additional wiring. The goal is one place where knowledge lives, accessible from every surface.
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
              Discord ({stats.discord_channels.toLocaleString()} channels in the current directory), Telegram (interactive conversations), HANDOFF.md (session continuity). Each surface serves a different communication need. Discord for async notification and overnight reporting. Telegram for real-time dialogue and morning briefings. HANDOFF.md for session-to-session continuity.
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
              The knowledge base grew from ~170 to {stats.total_memories.toLocaleString()} memories and the facts table exploded to {stats.total_facts.toLocaleString()} entries after vault fact extraction processed thousands of notes and documents. More data does not automatically mean better recall. As the database scales, the vector search returns increasingly similar results, and the signal-to-noise ratio in retrieved context degrades. Memory needs pruning and consolidation, not just accumulation. Automated garbage collection helps, but the curation problem is fundamentally unsolved.
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
          <h2 className={styles.sectionTitle}>What the System Does Today</h2>

          <ul className={styles.methodList}>
            <li>20 scheduled cron jobs running in a nightly window (11 PM to 4:45 AM ET), plus a bridge health watchdog running every five minutes</li>
            <li>4,266 memories and 14,887 indexed facts in a single authoritative database, with full embedding coverage across two vector sets</li>
            <li>Conversation distillation pipeline writing new memories nightly from real conversations</li>
            <li>16 read-only MCP tools plus a write-capable ops server, accessible remotely via Cloudflare tunnels and OAuth 2.1</li>
            <li>Discord integration across multiple channels for cron reports, exchange logging, alerts, and daily briefings</li>
            <li>Remote dispatch from claude.ai as a peer interface, enabling collaborative debugging and task coordination from a phone</li>
            <li>Bootstrap trimmed to 7 files (~18KB), memory files to 40KB (62% reduction), self-audit prompt from 7,582 to 1,276 characters</li>
            <li>Bidirectional Obsidian vault sync feeding the retrieval layer automatically</li>
            <li>Telegram interface with brief mode reducing per-message context injection from ~10KB to ~150 bytes</li>
            <li>Private mesh networking via Tailscale for device continuity across Linux, iPhone, and iPad</li>
          </ul>
        </section>

        {/* Week Four: Opening the System */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Week Four: Opening the System</h2>
          <p className={styles.body}>
            The first three weeks were about building the thing, surviving a platform migration, and hardening the foundation underneath it. Week four was about opening it up.
          </p>
          <p className={styles.body}>
            By mid-April three things were true at once. The knowledge layer was stable, with over 4,000 memories, full embedding coverage, and a hardened Data Access Layer. Hermes was running reliably on GPT-5.4 via the Codex provider API. Claude Code had settled into a bounded specialist lane for repo-level work.
          </p>
          <p className={styles.body}>
            The question became: what would it take to let any capable reasoning layer use Clarence&apos;s knowledge, not just the one that happened to live on the box?
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>The MCP Bridges</h3>
            <p className={styles.body}>
              The answer was Model Context Protocol (MCP) bridges: small servers that expose specific capabilities through a standardized protocol. I built two.
            </p>
            <p className={styles.body}>
              The memory MCP exposes 16 read-only tools over clarence.db: semantic search, entity lookup, fact retrieval, relation traversal, work item listing, vault note access. It runs locally and is fronted by a Cloudflare tunnel at clarence-memory.nomadjames.com/mcp. Read-only is deliberate. Any client can query the knowledge layer, but writes stay on the local box with Hermes.
            </p>
            <p className={styles.body}>
              The ops MCP exposes a smaller set of action tools: triggering Hermes cron jobs, reading controlled file paths, checking system health. It sits behind an OAuth 2.1 + PKCE shim. External clients authenticate through the same flow Claude Code uses for GitHub or Google Drive.
            </p>
            <p className={styles.body}>
              Both tunnels run as systemd services under a watchdog that checks health every five minutes. Hardening that took a full day of debugging supergateway child-process cleanup issues against a real Claude.ai session. The debugging itself was a test of the hybrid: I was running the diagnosis from claude.ai while Hermes was still running the jobs I was debugging. The architecture had to work under observation without breaking.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Claude.ai as a Peer Interface</h3>
            <p className={styles.body}>
              What the MCP bridges change is not just a deployment convenience. They change which reasoning layer is available for which kinds of work.
            </p>
            <p className={styles.body}>
              Hermes on GPT-5.4 is good at routine orchestration. It knows the system, it is always on, and it costs very little. It runs every overnight job and most day-to-day routing. But for open-ended thinking, cross-domain synthesis, or voice-critical writing, I want Claude. The MCP bridges let a Claude.ai conversation reach into clarence.db for context, dispatch ops tasks to Hermes, and read the results without copy-paste friction.
            </p>
            <p className={styles.body}>
              In practice: during a normal conversation on claude.ai, Claude can pull work items, search memories, check system status, and execute bounded Hermes actions. This portfolio edit was drafted that way. Claude.ai read clarence.db through the memory MCP, committed to this repo through the GitHub MCP, and checked system health through the ops MCP. Three MCP servers, one live conversation, one cohesive piece of work.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>The Layer That Survived Every Migration</h3>
            <p className={styles.body}>
              Four architectures in one month. Each rebuild was forced by external constraint: platform policy, cost, model availability, integration opportunity. The interesting finding is that each rebuild got cheaper than the last because one layer did not have to move.
            </p>
            <p className={styles.body}>
              Phase 1 (OpenClaw): reasoning was Claude via OpenClaw&apos;s scheduled sessions. Memory was clarence.db in SQLite with MiniLM embeddings.
            </p>
            <p className={styles.body}>
              Phase 2 (Hermes on Claude): orchestration moved to Hermes, which connected to Claude via OAuth. Memory did not move. The 48-hour forced migration preserved the entire knowledge layer.
            </p>
            <p className={styles.body}>
              Phase 3 (Hermes on GPT-5.4 via Codex): reasoning moved from Claude to GPT-5.4 via the openai-codex provider after cost and reliability issues. Hermes kept its orchestration role. Memory did not move.
            </p>
            <p className={styles.body}>
              Phase 4 (MCP hybrid): Claude.ai joined the reasoning surface through remote MCP bridges. Claude Code kept its repo role. Hermes kept its orchestration role. Memory did not move.
            </p>
            <p className={styles.body}>
              The knowledge management layer outlasted every reasoning-layer decision. That was not entirely deliberate. The original architectural choices (single consolidated SQLite file, MCP interface, local vector search, no proprietary schema) turned out to be survivability decisions before I understood I was making survivability decisions.
            </p>
            <p className={styles.body}>
              The principle I can state now, and could not have stated in week one: build so that the most valuable layer is the one that has to move least often. In this project that layer is knowledge. In a different project it might be workflow definitions, user context, or evaluation data. The specifics do not transfer. The instinct to identify the layer does.
            </p>
          </div>
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
            <li>SQLite knowledge base spanning memories, entities, facts, sessions, work items, profiles, vault notes, and vector indexes</li>
            <li>Primary all-MiniLM-L6-v2 retrieval index via sqlite-vec, plus a second NVIDIA evaluation lane for hybrid search experiments</li>
            <li>Conversation distillation: nightly LLM-driven extraction of durable knowledge from raw transcripts</li>
            <li>MCP interfaces: full internal CRUD, plus a capability-enforced public read-only connector surface</li>
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
              <strong>Closing the execution loop:</strong> the self-improving cycle (audit surfaces improvement, queue captures it, executor runs it overnight) needs a more reliable handoff at the execution step. The audit is strong. The execution is inconsistent.
            </li>
            <li>
              <strong>Memory pruning:</strong> 4,266 memories need active consolidation. Duplicate facts, superseded preferences, and stale context degrade retrieval quality as the database scales. The next iteration needs to prune as aggressively as it accumulates.
            </li>
            <li>
              <strong>Bridge reliability:</strong> the remote MCP bridge works but requires manual re-authentication when services restart. Making the session layer robust enough to survive infrastructure changes without human intervention is the current infrastructure priority.
            </li>
            <li>
              <strong>Structural delegation enforcement:</strong> a prompt-level delegation rule was added to Clarence&apos;s system prompt in April 2026. Early testing shows it does not reliably fire under task momentum. The next step is a planner-level structural hook that forces a delegation decision before the first tool call on multi-step tasks.
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
              "MCP server architecture",
              "Budget-aware compute allocation",
              "Token optimization",
              "Platform migration under constraint",
              "Private mesh networking (Tailscale)",
              "Security audit automation",
              "Discord webhook integration",
              "Designer-user-researcher methodology",
              "Knowledge base architecture",
              "Data Access Layer design",
              "Automated health monitoring",
              "Hermes agent gateway",
              "Hermes agent orchestration",
              "Claude Code CLI integration",
              "Claude.ai integration as peer interface",
              "Multi-provider model integration",
              "Telegram Bot API",
              "MCP server configuration",
              "Remote MCP bridge design (Cloudflare + OAuth 2.1)",
              "Cost-aware architectural design",
              "Systems thinking",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

        {/* Verification timestamp */}
        <p className={cs.verifiedStamp} data-verified={stats.verified_date}>
          Current-state numbers and architecture on this page were re-verified against the live system on {stats.verified_label}. Historical sections remain intentionally dated where the path itself matters.
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
