import styles from "./page.module.css";
import pulseData from "../../../../public/data/clarence-pulse.json";
import clarenceStats from "@/data/clarence-stats.json";
import SmartBackLink from "@/components/SmartBackLink";

export const metadata = {
  title: "Clarence Pulse | Lab | James Dishman",
  description:
    "Public-safe Clarence system metrics, refreshed daily. Knowledge graph stats and system health.",
};

type PulseData = {
  version: string;
  generated_date: string;
  freshness: string;
  description: string;
  heartbeat: {
    status: string;
    uptime_days: number;
    recent_activity?: string | null;
  };
  knowledge_stats: {
    active_facts: number;
    active_memories: number;
    memory_breakdown: Record<string, number>;
    indexed_vault_notes: number;
    total_entities: number;
    entity_relations: number;
  };
  system_vitals: {
    hermes_skills: number;
    cron_jobs_active: number;
    retrieval_feedback_entries: number;
  };
  activity_summary: {
    sessions_last_30_days: number;
    work_items_by_type: Record<string, number>;
  };
  architecture: {
    orchestrator: string;
    primary_model: string;
    specialist_lane: string;
    memory_backend: string;
  };
  public_endpoints: Record<string, string>;
};

const data = pulseData as PulseData;

function formatNumber(n: number): string {
  return n.toLocaleString();
}

function formatGeneratedDate(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00Z`);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function formatRecentActivity(bucket?: string | null): string {
  switch (bucket) {
    case "today":
      return "active today";
    case "this_week":
      return "active this week";
    case "this_month":
      return "active this month";
    case "older":
      return "no recent sessions";
    default:
      return "recent activity unknown";
  }
}

function StatusIndicator({ status }: { status: string }) {
  const isOnline = status === "online";
  return (
    <span className={`${styles.statusIndicator} ${isOnline ? styles.online : styles.offline}`}>
      <span className={styles.statusDot} />
      {status}
    </span>
  );
}

export default function PulsePage() {
  return (
    <div className={styles.page}>
      <main className="container">
        <div className={styles.backLink}>
          <SmartBackLink fallbackHref="/portfolio/clarence">← Clarence</SmartBackLink>
        </div>

        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLabel}>Live System</span>
            <span className={styles.eyebrowDot} aria-hidden="true">·</span>
            <span className={styles.eyebrowLabel}>Clarence</span>
          </div>
          <h1 className={styles.title}>System Pulse</h1>
          <p className={styles.subtitle}>
            Public-safe system metrics from Clarence, an autonomous AI employee system.
            This page is refreshed daily from the live knowledge graph and infrastructure.
          </p>
          <div className={styles.generated}>
            Updated {formatGeneratedDate(data.generated_date)} · refreshed {data.freshness}
          </div>
        </header>

        {/* Heartbeat Section */}
        <section className={styles.heartbeatSection}>
          <div className={styles.heartbeatCard}>
            <div className={styles.heartbeatMain}>
              <StatusIndicator status={data.heartbeat.status} />
              <span className={styles.uptimeBadge}>
                {data.heartbeat.uptime_days} days uptime
              </span>
            </div>
            {data.heartbeat.recent_activity && (
              <div className={styles.lastSession}>
                Recent activity: {formatRecentActivity(data.heartbeat.recent_activity)}
              </div>
            )}
          </div>
        </section>

        {/* Architecture Overview */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Architecture</h2>
          <div className={styles.archGrid}>
            <div className={styles.archCard}>
              <span className={styles.archLabel}>Orchestrator</span>
              <span className={styles.archValue}>{data.architecture.orchestrator}</span>
            </div>
            <div className={styles.archCard}>
              <span className={styles.archLabel}>Primary Model</span>
              <span className={styles.archValue}>{data.architecture.primary_model}</span>
            </div>
            <div className={styles.archCard}>
              <span className={styles.archLabel}>Specialist Lane</span>
              <span className={styles.archValue}>{data.architecture.specialist_lane}</span>
            </div>
            <div className={styles.archCard}>
              <span className={styles.archLabel}>Memory Backend</span>
              <span className={styles.archValue}>{data.architecture.memory_backend}</span>
            </div>
          </div>
        </section>

        {/* Knowledge Stats */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Knowledge Graph</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{formatNumber(clarenceStats.active_facts)}</span>
              <span className={styles.statLabel}>Active Facts</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{formatNumber(clarenceStats.active_memories)}</span>
              <span className={styles.statLabel}>Memories</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{formatNumber(clarenceStats.entities)}</span>
              <span className={styles.statLabel}>Entities</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{formatNumber(data.knowledge_stats.entity_relations)}</span>
              <span className={styles.statLabel}>Relations</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{formatNumber(clarenceStats.indexed_vault_notes)}</span>
              <span className={styles.statLabel}>Vault Notes Indexed</span>
            </div>
          </div>

          {/* Memory breakdown */}
          {data.knowledge_stats.memory_breakdown && (
            <div className={styles.breakdownRow}>
              <span className={styles.breakdownLabel}>Memory types:</span>
              {Object.entries(data.knowledge_stats.memory_breakdown).map(([type, count]) => (
                <span key={type} className={styles.breakdownChip}>
                  {type}: {formatNumber(count)}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* System Vitals */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>System Vitals</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{formatNumber(data.system_vitals.hermes_skills)}</span>
              <span className={styles.statLabel}>Hermes Skills</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{formatNumber(data.system_vitals.cron_jobs_active)}</span>
              <span className={styles.statLabel}>Cron Jobs</span>
            </div>
          </div>
        </section>

        {/* Activity Summary */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Recent Activity</h2>
          <div className={styles.activityRow}>
            <div className={styles.activityStat}>
              <span className={styles.activityValue}>{data.activity_summary.sessions_last_30_days}</span>
              <span className={styles.activityLabel}>sessions (30 days)</span>
            </div>
            {data.activity_summary.work_items_by_type && (
              <div className={styles.workTypes}>
                {Object.entries(data.activity_summary.work_items_by_type).map(([type, count]) => (
                  <span key={type} className={styles.workChip}>
                    {type}: {count}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Links */}
        <section className={styles.linksSection}>
          <h2 className={styles.sectionTitle}>Explore</h2>
          <div className={styles.linksGrid}>
            <a href={data.public_endpoints.knowledge_graph} className={styles.linkCard}>
              <span className={styles.linkTitle}>Knowledge Graph</span>
              <span className={styles.linkDesc}>Interactive visualization of entities and relations</span>
              <span className={styles.linkArrow}>→</span>
            </a>
            <a href={data.public_endpoints.case_study} className={styles.linkCard}>
              <span className={styles.linkTitle}>Case Study</span>
              <span className={styles.linkDesc}>Design and architecture deep dive</span>
              <span className={styles.linkArrow}>→</span>
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          <p className={styles.footerNote}>
            This page displays sanitized aggregate data only. No private memory content,
            work descriptions, file paths, or sensitive information is exposed.
          </p>
        </footer>
      </main>
    </div>
  );
}
