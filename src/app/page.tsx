import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <Image
              src="/images/hero-banner.png"
              alt="Abstract digital landscape background"
              fill
              priority
              sizes="100vw"
              className={styles.bannerImage}
            />
            <div className={styles.overlay} />
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h1 className="text-gradient-accent" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontFamily: 'var(--font-heading)', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>
              nomad james
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--foreground)', marginBottom: '1rem', fontWeight: 500 }}>
              James C. Dishman II
            </p>
            <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'rgba(255,255,255,0.9)', fontWeight: 400, maxWidth: '800px', lineHeight: 1.4 }}>
              Artificial intelligence and UX Researcher, Writer, Designer, Audio Engineer
            </h2>

            <div className={styles.bio}>
              <p>
                I work at the intersection of AI, human-computer interaction, and creativity-support tools,
                asking how algorithmic systems shape human judgment and whether they encode our biases or create new ones.
              </p>
              <p>
                My background spans 30 years in electronic music production and curation, team leadership across distributed systems,
                and a decade running Pittsburgh&apos;s Ableton User Group in direct partnership with Ableton&apos;s North American team.
                I hold a BA in English with concentrations in Philosophy and Political Science from the University of Pittsburgh,
                and I&apos;m finishing an MS in User Experience at Kent State University while preparing PhD applications focused on
                designing systems that cultivate human creativity and human-AI collaboration.
              </p>
              <p>
                What connects these experiences isn&apos;t domain expertise; it&apos;s pattern recognition across systems,
                understanding how tools mediate human capability, and translating complex problems into clear frameworks.
                I&apos;m interested in questions where human creativity, algorithmic mediation, and decision-making collide.
              </p>
              <p>
                I&apos;m available for research collaboration, speaking engagements, UX research opportunities,
                and the occasional uncompromising DJ set.
              </p>
              <p>
                If you&apos;re working on problems at the intersection of creativity, AI, and human decision-making, let&apos;s talk.
              </p>
            </div>

            <SocialLinks />
          </div>
        </section>

        <section className={styles.musicSection}>
          <div className={styles.secondaryBackground}>
            <Image
              src="/images/secondary-banner.png"
              alt=""
              fill
              className={styles.bannerImage}
            />
            <div className={styles.overlayHeavy} />
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h3 className={styles.sectionTitle}>Music by nomadjames</h3>
            <div className={styles.musicLinks}>
              <a href="https://soundcloud.com/nomadjames" target="_blank" rel="noopener noreferrer" className={styles.musicCard}>
                <span className={styles.musicIcon}>☁️</span>
                <div className={styles.musicInfo}>
                  <strong>SoundCloud</strong>
                  <span>Stream latest tracks</span>
                </div>
              </a>
              <a href="https://nomadjames.bandcamp.com/" target="_blank" rel="noopener noreferrer" className={styles.musicCard}>
                <span className={styles.musicIcon}>🎵</span>
                <div className={styles.musicInfo}>
                  <strong>Bandcamp</strong>
                  <span>Support & Buy</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
