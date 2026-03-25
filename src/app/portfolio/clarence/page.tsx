import styles from "../accessibility-audit/page.module.css";
import clarenceStyles from "./page.module.css";

export const metadata = {
  title: "Clarence | James Dishman",
  description:
    "Designing and building an autonomous AI agent ecosystem - from architecture to identity to the ethics of delegating cognitive work.",
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
            <span className={styles.category}>AI Systems Design</span>
            <span className={styles.metaDot}>·</span>
            <span className={styles.year}>2025 - 2026</span>
            <span className={styles.metaDot}>·</span>
            <span className={styles.course}>Independent Research · Ongoing</span>
          </div>
          <h1 className={styles.title}>Clarence:<br />Designing an Autonomous Agent</h1>
          <div className={styles.methods}>
            {[
              "Agent Architecture",
              "Human-AI Collaboration",
              "Systems Design",
              "Prompt Engineering",
              "Distributed Cognition",
              "Rust / Python / Next.js",
            ].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
          <p className={styles.intro}>
            Clarence is not a chatbot. It is an autonomous AI agent ecosystem built
            from the ground up to act as a genuine collaborator - capable of research,
            overnight autonomous work, real-time monitoring, multi-agent debate, and
            continuous self-improvement. This is the project where most of my thinking
            about AI, design, and human cognition has become concrete.
          </p>
        </header>

        {/* Stats bar */}
        <div className={clarenceStyles.statsBar}>
          <div className={clarenceStyles.stat}>
            <span className={clarenceStyles.statNum}>21</span>
            <span className={clarenceStyles.statLabel}>Scheduled jobs running nightly</span>
          </div>
          <div className={clarenceStyles.stat}>
            <span className={clarenceStyles.statNum}>11</span>
            <span className={clarenceStyles.statLabel}>Named agents with distinct roles</span>
          </div>
          <div className={clarenceStyles.stat}>
            <span className={clarenceStyles.statNum}>5</span>
            <span className={clarenceStyles.statLabel}>R&D Council members for nightly debate</span>
          </div>
          <div className={clarenceStyles.stat}>
            <span className={clarenceStyles.statNum}>4</span>
            <span className={clarenceStyles.statLabel}>Model providers integrated</span>
          </div>
        </div>

        {/* The question */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>The Question</span>
            <div className={styles.sectionLine} />
          </div>
          <p className={styles.body}>
            The framing question for this project came from Don Norman: affordances define
            what actions are possible. Most people use AI tools reactively - you prompt,
            it responds. The design question I wanted to explore was different: what does
            it look like to build an AI system that acts on your behalf while you sleep?
            Not a tool you use, but a colleague who works.
          </p>
          <p className={styles.body}>
            That question has design consequences at every level. What should Clarence be
            allowed to do autonomously? What requires my approval? How do you design
            appropriate trust in a system that can make mistakes? What&apos;s the right mental
            model for a user to have of an AI they&apos;ve named and given a personality?
          </p>
          <p className={styles.body}>
            These are not engineering questions. They are UX questions. And building
            Clarence is how I&apos;m answering them with working code rather than theory.
          </p>
        </section>

        {/* Architecture */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Architecture</span>
            <div className={styles.sectionLine} />
          </div>
          <p className={styles.body}>
            The system runs on a dedicated Ubuntu Linux machine with a custom stack
            built in layers:
          </p>
          <div className={clarenceStyles.archStack}>
            <div className={clarenceStyles.archLayer}>
              <span className={clarenceStyles.archLabel}>Orchestration</span>
              <p className={clarenceStyles.archDesc}>
                OpenClaw manages agent sessions, the cron scheduler, Telegram channel
                routing, and the multi-model fallback system. It is the nervous system
                that coordinates everything.
              </p>
            </div>
            <div className={clarenceStyles.archLayer}>
              <span className={clarenceStyles.archLabel}>cc-forge (custom)</span>
              <p className={clarenceStyles.archDesc}>
                A Rust/Axum bridge I built to expose Claude Code&apos;s CLI as an Anthropic-compatible
                API endpoint. This enables prompt caching, session resume, and direct
                OAuth passthrough - turning a developer tool into a production API
                without the per-token cost structure.
              </p>
            </div>
            <div className={clarenceStyles.archLayer}>
              <span className={clarenceStyles.archLabel}>Model Routing</span>
              <p className={clarenceStyles.archDesc}>
                Opus 4.6 handles judgment-heavy tasks. Gemini 2.5 Pro handles research.
                MiniMax M2.7 handles mechanical heartbeats. The routing logic reflects a
                design decision: not every task needs the most capable model, and using
                the wrong model in either direction is a failure.
              </p>
            </div>
            <div className={clarenceStyles.archLayer}>
              <span className={clarenceStyles.archLabel}>MCP Tool Layer</span>
              <p className={clarenceStyles.archDesc}>
                A custom Python MCP server exposes web search (DuckDuckGo), page fetch,
                Perplexity Pro (via a dedicated Chrome CDP instance), and Gemini search
                as tools available to all agents in all sessions.
              </p>
            </div>
            <div className={clarenceStyles.archLayer}>
              <span className={clarenceStyles.archLabel}>Memory System</span>
              <p className={clarenceStyles.archDesc}>
                Persistent memory across four types: user profile, feedback/corrections,
                project state, and external references. A nightly bridge job syncs
                memory written in one session context into all relevant agent contexts.
              </p>
            </div>
          </div>
        </section>

        {/* The agents */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>The Agents</span>
            <div className={styles.sectionLine} />
          </div>
          <p className={styles.body}>
            One of the design decisions I made early: agents should have names, roles,
            and distinct personalities - not just function labels. Names create a mental
            model. They also force you to be honest about what you&apos;re asking each agent
            to do and whether that role is coherent.
          </p>
          <div className={clarenceStyles.agentGrid}>
            <div className={clarenceStyles.agentCard}>
              <span className={clarenceStyles.agentName}>Clarence</span>
              <span className={clarenceStyles.agentRole}>Primary Brain</span>
              <p className={clarenceStyles.agentDesc}>Main session. Strategic thinking, project coordination, direct user interaction. Opus 4.6.</p>
            </div>
            <div className={clarenceStyles.agentCard}>
              <span className={clarenceStyles.agentName}>Felix</span>
              <span className={clarenceStyles.agentRole}>Chief of Staff</span>
              <p className={clarenceStyles.agentDesc}>Morning briefings, cross-project synthesis, priority management.</p>
            </div>
            <div className={clarenceStyles.agentCard}>
              <span className={clarenceStyles.agentName}>Rex</span>
              <span className={clarenceStyles.agentRole}>Research Lead</span>
              <p className={clarenceStyles.agentDesc}>Deep research briefs. Runs nightly on Gemini. Feeds the brain files.</p>
            </div>
            <div className={clarenceStyles.agentCard}>
              <span className={clarenceStyles.agentName}>Milo</span>
              <span className={clarenceStyles.agentRole}>Scrum Master</span>
              <p className={clarenceStyles.agentDesc}>Project queue management, sprint tracking, quick-wins execution.</p>
            </div>
            <div className={clarenceStyles.agentCard}>
              <span className={clarenceStyles.agentName}>Vera</span>
              <span className={clarenceStyles.agentRole}>Content Strategist</span>
              <p className={clarenceStyles.agentDesc}>Writing, editorial, portfolio content. Understands voice and audience.</p>
            </div>
            <div className={clarenceStyles.agentCard}>
              <span className={clarenceStyles.agentName}>Bruno</span>
              <span className={clarenceStyles.agentRole}>Security Auditor</span>
              <p className={clarenceStyles.agentDesc}>Nightly security scans, CVE monitoring, infrastructure health. The agent that tells me what I&apos;d rather not hear.</p>
            </div>
          </div>
          <p className={styles.body} style={{marginTop: "2rem"}}>
            A separate five-agent R&D Council - Atlas, Iris, Newton, Vesper, and Raven -
            runs nightly debates on open research questions. Each member argues from a
            different lens: market, UX, technical, product, and adversarial. Opus
            synthesizes the debate into an executive memo. The design rationale: I want
            to be challenged, not just confirmed.
          </p>
        </section>

        {/* What it does */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>What It Actually Does</span>
            <div className={styles.sectionLine} />
          </div>
          <div className={clarenceStyles.workList}>
            <div className={clarenceStyles.workEntry}>
              <span className={clarenceStyles.workTime}>Every 15 min</span>
              <p className={clarenceStyles.workDesc}>Infrastructure health checks. Two consecutive failures required before alerting - designed to filter noise from genuine incidents.</p>
            </div>
            <div className={clarenceStyles.workEntry}>
              <span className={clarenceStyles.workTime}>2 am</span>
              <p className={clarenceStyles.workDesc}>Autonomous Employee run. Clarence reviews the quick-wins queue, picks the highest-priority executable task, completes it, and sends a summary. No approval required for research, writing, or file work.</p>
            </div>
            <div className={clarenceStyles.workEntry}>
              <span className={clarenceStyles.workTime}>2:23 am</span>
              <p className={clarenceStyles.workDesc}>RTX 3090 deal monitoring. Searches eBay and r/hardwareswap for sub-$400 listings matching defined criteria. Part of a broader interest in running local models.</p>
            </div>
            <div className={clarenceStyles.workEntry}>
              <span className={clarenceStyles.workTime}>3:33 am</span>
              <p className={clarenceStyles.workDesc}>Self-improvement audit. Clarence reviews its own recent sessions, identifies gaps in behavior, and writes actionable improvements to the queue for execution. The system critiques itself.</p>
            </div>
            <div className={clarenceStyles.workEntry}>
              <span className={clarenceStyles.workTime}>4 am</span>
              <p className={clarenceStyles.workDesc}>Research briefing. Deep synthesis of active projects, new findings surfaced, recommendations generated. Saved to a markdown brain and available via a local web server on the home network.</p>
            </div>
            <div className={clarenceStyles.workEntry}>
              <span className={clarenceStyles.workTime}>9 am</span>
              <p className={clarenceStyles.workDesc}>Changelog monitoring. Anthropic, Gemini, and MiniMax release notes checked. New model capabilities or API changes flagged and delivered as a Telegram briefing.</p>
            </div>
            <div className={clarenceStyles.workEntry}>
              <span className={clarenceStyles.workTime}>11 pm</span>
              <p className={clarenceStyles.workDesc}>R&D Council debate. Five agents argue over the day&apos;s open questions across two rounds. Opus synthesizes. Memo saved and delivered.</p>
            </div>
          </div>
        </section>

        {/* Design questions */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Design Questions This Project Raised</span>
            <div className={styles.sectionLine} />
          </div>
          <p className={styles.body}>
            Building Clarence has produced more design insight than any class I have taken.
            Not because the technology is impressive - anyone can wire up an API. But because
            the hard problems are consistently human problems wearing technical clothing.
          </p>
          <ul className={styles.findings}>
            <li>
              <strong>Trust calibration is a design problem.</strong> How much should Clarence
              do without asking? The wrong answer in either direction is a failure mode: too
              much autonomy creates risk; too little creates a tool that requires constant
              supervision and delivers no leverage. The right answer changes by task type,
              and communicating that boundary to the user is a UX problem.
            </li>
            <li>
              <strong>Naming and identity matter more than expected.</strong> Giving agents
              names and roles changed how I think about what I&apos;m asking them to do. It also
              changed how I evaluate their output. &quot;Clarence thinks X&quot; and &quot;the AI returned
              X&quot; produce different cognitive responses in me as the user - and that difference
              is meaningful for collaboration.
            </li>
            <li>
              <strong>Feedback loops are infrastructure.</strong> The self-audit cron job
              exists because early Clarence sessions produced good work with no mechanism
              for improvement. Designing feedback into the system - not as an afterthought
              but as a scheduled, first-class job - changed the quality of subsequent work.
            </li>
            <li>
              <strong>The memory problem is unsolved.</strong> Every AI session starts fresh.
              Building a memory system that spans sessions, survives context compression, and
              remains useful rather than stale is an active design challenge. The current
              solution (typed memory files with structured frontmatter) works but has real
              limitations around recency and relevance weighting.
            </li>
            <li>
              <strong>Compute ethics are a real constraint.</strong> I run this system on
              Anthropic&apos;s API. That means every wasted call is real cost and real energy.
              The model routing decisions - what runs on Opus vs Gemini vs MiniMax - are not
              just economic decisions. They are ethical ones about proportionality of resource
              use to task complexity.
            </li>
          </ul>
        </section>

        {/* What's next */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>What&apos;s Next</span>
            <div className={styles.sectionLine} />
          </div>
          <p className={styles.body}>
            The near-term goal is local inference. An RTX 3090 would allow Llama 3, Mistral,
            or a fine-tuned model to run on-device - eliminating API costs for high-volume
            tasks and enabling experiments that aren&apos;t feasible with per-token billing.
            The longer-term goal is using this system as a research platform: a live subject
            for studying how humans build mental models of AI collaborators, what feedback
            mechanisms improve AI output quality, and where the line between tool and agent
            actually sits in practice.
          </p>
          <p className={styles.body}>
            This project is documented in a private GitHub repository. If you&apos;re building
            something similar or researching human-AI collaboration, I&apos;m interested in
            talking.
          </p>
        </section>

        {/* Footer nav */}
        <nav className={styles.caseNav}>
          <a href="/portfolio" className={styles.navLink}>← All Work</a>
          <a href="/portfolio/accessibility-audit" className={styles.navLink}>Accessibility Audit →</a>
        </nav>

      </main>
    </div>
  );
}
