import styles from "./page.module.css";

const posts = [
    {
        slug: "music-production-philosophy",
        title: "Philosophy of Imperfection in Production",
        date: "December 12, 2024",
        readTime: "5 min read",
        excerpt: "Why digital cleanliness is killing the vibe, and how to bring back the grit."
    },
    {
        slug: "ableton-live-tips",
        title: "Ableton Live Workflow Secrets",
        date: "November 28, 2024",
        readTime: "8 min read",
        excerpt: "Optimizing your template for speed and creativity."
    },
];

export default function Writings() {
    return (
        <div className={styles.page}>
            <main className="container">
                <header className={styles.header}>
                    <h1 className="heading-gradient big-title">Writings</h1>
                    <p className={styles.subtitle}>Thoughts on music, technology, and creativity.</p>
                </header>

                <div className={styles.list}>
                    {posts.map((post) => (
                        <article key={post.slug} className={styles.item}>
                            <div className={styles.meta}>
                                <time>{post.date}</time>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h2 className={styles.title}>
                                <a href={`/writings/${post.slug}`} className={styles.link}>{post.title}</a>
                            </h2>
                            <p className={styles.excerpt}>{post.excerpt}</p>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}
