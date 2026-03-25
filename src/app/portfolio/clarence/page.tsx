import styles from "../accessibility-audit/page.module.css";
import cs from "./page.module.css";

export const metadata = {
  title: "Clarence: Designing an Autonomous AI Collaborator | James Dishman",
  description:
    "A systems design case study on building Clarence — a named, autonomous AI assistant with 25 scheduled cron jobs, 16 named agents, a SQLite knowledge database, multi-model routing, and a nightly self-audit loop.",
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
              "Claude Opus 4",
              "Gemini 3.1 Pro",
              "Telegram API",
              "Tailscale VPN",
              "Self-Improving Systems",
              "Human-in-the-Loop Design",
            ].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        {/* Stats bar */}
        <div className={cs.statsBar}>
          <div className={cs.stat}>
            <span className={cs.statNum}>21</span>
            <span className={cs.statLabel}>Cron jobs scheduled nightly</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>16</span>
            <span className={cs.statLabel}>Named agents with distinct roles</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>5</span>
            <span className={cs.statLabel}>R&D Council voices per debate</span>
          </div>
          <div className={cs.stat}>
            <span className={cs.statNum}>3</span>
            <span className={cs.statLabel}>Model tiers by cost and capability</span>
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
            system built on top of OpenClaw (an agent orchestration platform) that runs 21 scheduled cron jobs,
            manages a named crew of specialized agents, routes tasks across multiple models based on cost and
            capability, and writes nightly self-improvement reports that feed into what it does while I sleep.
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
              </p>
            </div>

            <div className={cs.archDiagramConnector}>↓</div>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Orchestration</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNodeAccent}>OpenClaw</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>21 Cron Jobs</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Agent Crew</span>
              </div>
              <p className={cs.archDiagramNote}>
                OpenClaw schedules and dispatches agent sessions. Each cron job runs isolated with its
                own model, context scope, and Telegram delivery target.
              </p>
            </div>

            <div className={cs.archDiagramConnector}>↓</div>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Model Routing</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNodeAccent}>Model Bridge</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Claude Opus 4 / Sonnet 4</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Gemini 3.1 Pro / Flash</span>
              </div>
              <p className={cs.archDiagramNote}>
                A custom Rust bridge translates between the orchestrator&apos;s API format and the
                underlying model providers, enabling multi-model routing without separate key configurations.
              </p>
            </div>

            <div className={cs.archDiagramConnector}>↓</div>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Fallback Tier</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNode}>MiniMax M2.7 (Ollama)</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Gemini 2.0 Flash</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Kimi K2.5 (Ollama)</span>
              </div>
              <p className={cs.archDiagramNote}>
                Budget-sensitive tasks and every 15-minute heartbeat route to free-tier models.
                MiniMax via Ollama is the default for mechanical pings to avoid burning Opus budget
                on tasks that do not require judgment.
              </p>
            </div>

            <div className={cs.archDiagramConnector}>↓</div>

            <div className={cs.archDiagramRow}>
              <div className={cs.archDiagramLabel}>Memory</div>
              <div className={cs.archDiagramNodes}>
                <span className={cs.archDiagramNodeAccent}>Knowledge Database</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>MCP Server (13 tools)</span>
                <span className={cs.archDiagramArrow} aria-hidden="true">→</span>
                <span className={cs.archDiagramNode}>Obsidian Vault Sync</span>
              </div>
              <p className={cs.archDiagramNote}>
                A SQLite knowledge database is shared by all agents through a custom MCP server.
                Agent names, user preferences, and project facts are stored with deterministic lookup.
                Syncs bidirectionally with an Obsidian vault — what James writes, agents can read.
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

          <div className={cs.agentGrid}>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Felix — Chief of Staff</span>
              <span className={cs.agentRole}>Claude Sonnet · 8:00 AM daily</span>
              <p className={cs.agentDesc}>Morning coordination. Compiles yesterday&apos;s status, writes the daily brain log, posts a Telegram summary. Coordinates across all projects rather than executing tasks directly.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Rex — Scrum Master</span>
              <span className={cs.agentRole}>Claude Sonnet · 8:00 AM + 1:00 PM</span>
              <p className={cs.agentDesc}>Morning and midday task checks. Queries the knowledge database for active work items, tracks blockers, posts morning report. Midday run only alerts if new blockers appeared since morning — no noise.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Bruno — Sergeant-at-Arms</span>
              <span className={cs.agentRole}>Claude Sonnet · 7:00 AM + 2:30 AM</span>
              <p className={cs.agentDesc}>Daily digest and nightly security audit. Reviews sysops.log, checks gateway health, monitors leash alerts, researches CVEs. Escalates to James only if status is RED.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Eddie — Marketing Scout</span>
              <span className={cs.agentRole}>Gemini 3.1 Pro · 3x daily</span>
              <p className={cs.agentDesc}>Three daily market scans. Runs dual-source search on AI tools, UX research, music tech, and indie builder topics. Tags each finding with its source so divergent results are visible.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Sage — Researcher</span>
              <span className={cs.agentRole}>Gemini 3.1 Pro · 4:00 AM daily</span>
              <p className={cs.agentDesc}>Daily research briefing. Four topics, two search sources each: AI model releases, UX/HCI papers, music tech, MCP ecosystem. Synthesizes across sources and notes where they diverge.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Ada — Memory Keeper</span>
              <span className={cs.agentRole}>Claude Sonnet · 3:00 AM daily</span>
              <p className={cs.agentDesc}>Nightly memory consolidation. Reads daily logs, extracts durable facts, writes to the knowledge database. Only posts to Telegram if new durable facts were added. Keeps the knowledge layer honest.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>R&D Council — Atlas, Iris, Newton, Vesper, Raven</span>
              <span className={cs.agentRole}>Mixed models · Opus synthesis · 11:00 PM</span>
              <p className={cs.agentDesc}>Five-agent nightly debate. Each member holds a fixed lens — market analysis, UX research, technical architecture, product strategy, devil&apos;s advocate. Two debate rounds, then Opus synthesizes into an executive memo. Designed to surface disagreement, not consensus.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Autonomous Employee</span>
              <span className={cs.agentRole}>Claude Opus 4 · 2:00 AM daily</span>
              <p className={cs.agentDesc}>The 2am shift. Reads the quick-wins queue from the nightly audit, picks the top unchecked task, executes it fully, marks it done, logs output, sends James a one-sentence summary. No user present. No approval loop.</p>
            </div>

            <div className={cs.agentCard}>
              <span className={cs.agentName}>Clarence (Self-Audit)</span>
              <span className={cs.agentRole}>Claude Opus 4 · 3:33 AM daily</span>
              <p className={cs.agentDesc}>The meta-agent. Reviews system performance, researches new developments, writes improvement proposals, updates WORKING.md, writes the memory bridge for Claude Code, and populates the quick-wins queue for the Autonomous Employee.</p>
            </div>

          </div>
        </section>

        {/* The Overnight Loop */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The Overnight Loop</h2>
          <p className={styles.body}>
            The most consequential design element is what happens between midnight and 8am. The jobs are
            sequenced deliberately to build on each other:
          </p>

          <div className={cs.workList}>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>2:00 AM</span>
              <p className={cs.workDesc}><strong>Daily Backup</strong> — workspace snapshot before anything mutates the brain files.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>2:00 AM</span>
              <p className={cs.workDesc}><strong>Autonomous Employee</strong> — reads the quick-wins queue from the previous night&apos;s audit and executes the top task. Portfolio content, case study drafts, documentation prep. No approval required for research and writing work.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>2:23 AM</span>
              <p className={cs.workDesc}><strong>RTX 3090 Deal Alert</strong> — scans eBay and r/hardwareswap for GPU deals under $850. Only messages James if something worth buying appears. No noise by default.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>2:30 AM</span>
              <p className={cs.workDesc}><strong>Bruno Security Audit</strong> — reviews leash alerts, sysops log, CVE feeds. Writes a status report, escalates only if RED.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>3:00 AM</span>
              <p className={cs.workDesc}><strong>Memory Consolidation</strong> — extracts durable facts from daily logs into MEMORY.md. Runs on MiniMax to preserve Opus budget.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>3:33 AM</span>
              <p className={cs.workDesc}><strong>Nightly Self-Audit</strong> — Clarence reviews system performance, researches what changed in the world, writes improvement proposals, updates WORKING.md, writes the Claude Code memory bridge, and populates the quick-wins queue for tomorrow&apos;s Autonomous Employee. The loop closes here.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>3:45 AM</span>
              <p className={cs.workDesc}><strong>Model Usage Report</strong> — parses cron job states, generates a breakdown of which agents ran on which models, total compute time by provider.</p>
            </div>
            <div className={cs.workEntry}>
              <span className={cs.workTime}>4:00 AM</span>
              <p className={cs.workDesc}><strong>Research Briefing</strong> — dual-source research across four domains, saved to dated files in brain/research/. Ready when James wakes up.</p>
            </div>
          </div>

          <p className={styles.body} style={{marginTop: "2rem"}}>
            The self-improving loop: the nightly audit writes a quick-wins queue. The autonomous employee
            reads that queue and executes items. The next night&apos;s audit reviews what was done, updates the
            queue, and the cycle repeats. The system is designed to compound work overnight rather than just
            report on it.
          </p>
          <p className={styles.body}>
            In practice this loop has a write-only failure mode I have not fully solved: the audit produces
            excellent proposals, but the execution step does not always pick up the queue file correctly.
            The proposals accumulate without always turning into action. This is documented and real — the
            system knows about it. Reporting awareness is not the same as fixing the underlying reliability issue.
          </p>
        </section>

        {/* Infrastructure Decisions */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Infrastructure Decisions and Why</h2>

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
            <h3 className={styles.findingTitle}>Three-Tier Model Routing</h3>
            <p className={styles.body}>
              Not every job needs Opus. The routing policy separates tasks into tiers:
            </p>
            <ul className={styles.methodList}>
              <li><strong>Opus 4 via model bridge</strong> for tasks requiring judgment, synthesis, or consequential writing — scrum master, autonomous employee, self-audit, evening goals reminder</li>
              <li><strong>Gemini 3.1 Pro via model bridge</strong> for research and synthesis tasks — research briefing, market scouting, vibe coding research, income research</li>
              <li><strong>MiniMax M2.7 via Ollama (free)</strong> for mechanical tasks — health checks, daily backup, memory consolidation, sergeant digest, heartbeats</li>
            </ul>
            <p className={styles.body}>
              Gemini runs free at scale via model bridge. MiniMax runs fully locally via Ollama.
              Together these two tiers handle most cron volume at near-zero cost, reserving Opus budget for
              tasks where model quality changes the output quality in ways that matter.
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
            <h3 className={styles.findingTitle}>SQLite Knowledge Database</h3>
            <p className={styles.body}>
              Long-term memory is stored in a structured SQLite knowledge database shared by all agents
              through a custom MCP server. The schema separates concerns: a <em>profiles</em> table holds
              identity facts (agent names, user preferences, project constants) with deterministic key lookup —
              no fuzzy search for things that must be exact. A <em>memories</em> table stores durable knowledge
              with soft invalidation: when a fact changes, the old record is marked invalid and a new one is
              written, preserving the audit trail. Separate tables track entities, facts, work items, sessions,
              and agent interactions.
            </p>
            <p className={styles.body}>
              The MCP server exposes 13 tools to any OpenClaw agent. Every agent that writes to the database
              stamps its entries with <code>author_agent</code> and <code>confidence</code>, enabling conflict
              resolution when multiple agents hold different versions of the same fact. An Obsidian vault syncs
              bidirectionally with the database — what James writes in his notes, agents can read, and what
              agents log overnight, James can review.
            </p>
            <p className={styles.body}>
              The original file-based memory layer (brain/ markdown files, MEMORY.md, WORKING.md) remains
              as a human-readable backup and audit surface. The database is the query layer on top of it.
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
              The entire routing policy exists because Opus 4 at scale has real cost. 21 cron jobs running
              daily, some multiple times, would be expensive if all of them used the most capable model.
              The fallback chain exists to contain that.
            </p>
            <p className={styles.body}>
              The tradeoff is quality degradation at the mechanical tier. When a task gets mis-routed to a
              cheaper model, the output quality drops and it is not always obvious why. Budget-aware routing
              requires continuous calibration, and the calibration is never quite finished.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Cron Jobs With Unknown Status</h3>
            <p className={styles.body}>
              As of the March 25 self-audit: three jobs (weekly-memory-hygiene, rd-council-nightly,
              model-usage-report) show unknown run status. One job (changelog-monitor) shows None, meaning
              it has never run or is misconfigured. These represent real system debt. The honest interpretation:
              jobs added to the schedule before the supporting infrastructure was reliable.
            </p>
            <p className={styles.body}>
              The system is good at identifying these gaps. The audit calls them out by name. The gap is between
              identifying the problem and having session bandwidth to fix it. This is the same backlog problem
              that any small engineering team faces.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Log Noise as a Signal Problem</h3>
            <p className={styles.body}>
              Three tools were in the agent tool profile but unavailable at runtime, generating dozens
              of WARN log entries daily. Each warning was individually harmless. Together they buried
              real errors — Bruno&apos;s security audits were scanning logs where signal-to-noise had
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
            <li>21 scheduled cron jobs running reliably, delivering Telegram notifications across all devices</li>
            <li>Nightly self-audit running three consecutive nights, each producing usable research and proposals</li>
            <li>A working memory bridge between OpenClaw and Claude Code — two separate AI systems sharing context</li>
            <li>SQLite knowledge database with MCP server — all 16 agents read and write shared memory with deterministic profile lookup and soft invalidation</li>
            <li>Bidirectional Obsidian sync — what James writes in his vault, agents can read; what agents log overnight, James can review</li>
            <li>Multi-model routing containing Opus budget while running lighter work on free-tier models</li>
            <li>Brain Reader HTTP server making the workspace searchable from any device on the Tailscale network</li>
            <li>Public Twitter presence (@ClarencetheOGBot) with autonomous posting capability</li>
            <li>Daily research briefings covering AI model releases, UX research, music tech, and MCP ecosystem</li>
            <li>RTX 3090 deal monitoring running nightly, scanning for the right hardware buy opportunity</li>
            <li>Daily build journal writing Medium-ready article notes from the day&apos;s activity</li>
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
            The nightly self-audit partially addresses this by creating a layer of external observation inside
            the system. When Clarence writes <em>&quot;what I noticed about my own behavior&quot;</em> in the audit report,
            it is generating a perspective on the system that I could not produce from memory alone. That
            section of the audit is consistently the most useful part for me as the designer.
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
              <strong>Closing the execution loop</strong> — the quick-wins queue and autonomous employee need
              a more reliable handoff. The goal is a self-improving loop that actually closes: research
              identifies an improvement, the queue captures it, the employee executes it overnight.
            </li>
            <li>
              <strong>OWASP Agentic Top 10 integration</strong> — the new OWASP threat model for AI agents
              covers Confused Deputy and Skill-Inject attacks that are directly relevant to a system running
              14+ cron jobs with file and network access. Bruno&apos;s security audit needs these checks.
            </li>
            <li>
              <strong>Google Colab MCP</strong> — configuring the Colab MCP server gives every agent in the
              crew access to a cloud Python sandbox, solving ad-hoc compute needs without waiting on a GPU.
            </li>
            <li>
              <strong>RTX 3090 acquisition</strong> — local GPU unlocks local inference for larger models
              and removes the Ollama dependency on cloud-hosted free tiers. The deal alert is running and
              waiting.
            </li>
            <li>
              <strong>Refining the human-in-the-loop boundary</strong> — the current line between what
              Clarence does autonomously and what requires James was drawn quickly. A more principled framework
              for delegation is the next design iteration.
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
              "Memory persistence across AI sessions",
              "SQLite knowledge database design",
              "MCP server development",
              "Budget-aware compute allocation",
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
