import styles from "./page.module.css";

const projects = [
    {
        title: "Project Alpha",
        category: "Production",
        year: "2024",
        description: "A dark ambient exploration of soundscapes."
    },
    {
        title: "Neon Nights",
        category: "DJ Set",
        year: "2023",
        description: "Live recording from the underground bunker."
    },
    {
        title: "Tech Noir",
        category: "Engineering",
        year: "2023",
        description: "Mixing and mastering for the synthwave collective."
    },
];

export default function Portfolio() {
    return (
        <div className={styles.page}>
            <main className="container">
                <header className={styles.header}>
                    <h1 className="heading-gradient big-title">Portfolio</h1>
                    <p className={styles.subtitle}>Selected works and sonic experiments.</p>
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
                            </div>
                            <div className={styles.cardOverlay} />
                        </article>
                    ))}

                    {/* Placeholder for future content */}
                    <div className={`${styles.card} ${styles.placeholder}`}>
                        <p>More projects coming soon...</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
