import styles from "./page.module.css";

const projects = [
    {
        title: "Social Media Accessibility Audit",
        category: "UX Research",
        year: "2026",
        description: "Comprehensive accessibility audit of Kent State College of Aeronautics and Engineering's Instagram account. Evaluated color contrast, alt text quality, emoji usage, and WCAG compliance across 20+ posts. Identified systemic issues with auto-generated alt text and provided actionable recommendations for each post.",
        tags: ["Accessibility", "Social Media", "WCAG", "Audit"],
        link: "/portfolio/social-media-accessibility",
    },
    {
        title: "Card Sort Case Study Analysis",
        category: "UX Research",
        year: "2025",
        description: "Comparative analysis of two academic card-sort studies examining how the methodology affects research outcomes. Analyzed differences in SCCT vs. Capability Approach frameworks, sorting techniques, and quantitative analysis methods. Delivered insights on implementing card sorting in non-IA research contexts.",
        tags: ["Card Sorting", "Mixed Methods", "Research Design"],
        link: "/portfolio/card-sort-analysis",
    },
    {
        title: "Moderated Usability Testing",
        category: "UX Research",
        year: "2025",
        description: "End-to-end moderated usability study including screener creation, test plan development, informed consent protocols, and session moderation. Documented moderator techniques for maintaining rapport while extracting actionable feedback from participants.",
        tags: ["Usability Testing", "Moderation", "User Research"],
        link: "/portfolio/usability-testing",
    },
    {
        title: "Web Contrast & Color Blindness Evaluation",
        category: "UX Research",
        year: "2025",
        description: "Systematic evaluation of color contrast ratios and color blindness accessibility across five major websites. Applied WCAG 2.1 standards to assess AA and AAA compliance. Developed recommendations for improving visual accessibility without compromising design intent.",
        tags: ["Color Accessibility", "WCAG", "Web Accessibility"],
        link: "/portfolio/contrast-evaluation",
    },
];

export default function Portfolio() {
    return (
        <div className={styles.page}>
            <main className="container">
                <header className={styles.header}>
                    <h1 className="heading-gradient big-title">Portfolio</h1>
                    <p className={styles.subtitle}>UX research and design work from graduate studies and independent projects.</p>
                </header>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <article key={index} className={styles.card}>
                            <div className={styles.cardContent}>
                                <div className={styles.meta}>
                                    <span className={styles.category}>{project.category}</span>
                                    <span className={styles.year}>{project.year}</span>
                                </div>
                                <h2 className={styles.title}>{project.title}</h2>
                                <p className={styles.description}>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.cardOverlay} />
                        </article>
                    ))}
                </div>

                <section className={styles.musicSection}>
                    <h3 className={styles.sectionTitle}>Music & Audio</h3>
                    <div className={styles.grid}>
                        <article className={styles.card}>
                            <div className={styles.cardContent}>
                                <div className={styles.meta}>
                                    <span className={styles.category}>Music Production</span>
                                    <span className={styles.year}>Ongoing</span>
                                </div>
                                <h2 className={styles.title}>Electronic Music Production</h2>
                                <p className={styles.description}>30 years of electronic music production and curation. Former Pittsburgh Ableton User Group organizer in direct partnership with Ableton's North American team. Available for DJ sets, production, and collaboration.</p>
                                <div className={styles.tags}>
                                    <span className={styles.tag}>Ableton</span>
                                    <span className={styles.tag}>Electronic</span>
                                    <span className={styles.tag}>DJ</span>
                                </div>
                            </div>
                            <div className={styles.cardOverlay} />
                        </article>
                    </div>
                </section>
            </main>
        </div>
    );
}
