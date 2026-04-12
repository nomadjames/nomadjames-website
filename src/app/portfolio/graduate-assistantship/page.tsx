import styles from "../accessibility-audit/page.module.css";
import Tldr from "@/components/Tldr";
import PretextTitle from "@/components/PretextTitle";
import SmartBackLink from "@/components/SmartBackLink";

export const metadata = {
  title: "Graduate Assistantship: UX Textbook Authoring & Research | James Dishman",
  description:
    "Graduate assistantship at Kent State University involving UX textbook authoring, instructional materials development, and qualitative research verification for graduate-level UX courses.",
};

export default function GraduateAssistantshipPage() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Back link */}
        <SmartBackLink fallbackHref="/portfolio" className={styles.backLink}>← Work</SmartBackLink>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.category}>Academic Research</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span className={styles.year}>2025-2026</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span className={styles.year}>Kent State University</span>
          </div>
          <PretextTitle text={"Graduate Assistantship:\nUX Textbook Authoring & Research"} className={styles.title} />
          <div className={styles.methods}>
            {[
              "Textbook Authoring",
              "Instructional Design",
              "Qualitative Research",
              "Research Verification",
              "Literature Review",
              "Graduate UX Curriculum",
            ].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        <Tldr>
          As a graduate assistant at Kent State, I co-author a graduate-level UX textbook, develop instructional materials for UX courses, and verify qualitative research under faculty supervision. This is not a side project. It is the core of my academic work and the foundation for a PhD path in HCI and Design Sciences.
        </Tldr>

        {/* The Role */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Role</h2>
          <p className={styles.body}>
            A graduate assistantship is a working academic position. You are not just taking classes. You are contributing to the department&apos;s research and teaching mission under direct faculty supervision. The work is real, the deadlines are real, and the output gets used by actual students and researchers.
          </p>
          <p className={styles.body}>
            My GA responsibilities fall into three areas: instructional materials development for graduate UX courses, co-authoring a graduate-level UX textbook, and qualitative research verification. Each of these requires a different kind of rigor. Instructional materials need to be clear, accurate, and pedagogically sound. Textbook authoring demands synthesis of existing literature into something coherent and teachable. Research verification means checking that qualitative findings hold up under scrutiny, that coding schemes are consistent, and that claims are grounded in data.
          </p>
          <p className={styles.body}>
            I work under faculty supervision at Kent State&apos;s School of Information. The supervision is substantive, not ceremonial. The faculty I work with hold me to the same standard they would hold a junior colleague on a research project.
          </p>
        </section>

        {/* Textbook Authoring */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>Textbook Authoring</h2>
          <p className={styles.body}>
            The textbook work is the most significant piece. Contributing to a graduate-level UX textbook means engaging with the full depth of the field: research methods, design theory, usability frameworks, and the cognitive science that underpins all of it. This is not summarizing existing material. It is synthesizing research literature, identifying gaps, writing original explanatory content, and making complex ideas accessible to graduate students who are encountering them for the first time.
          </p>
          <p className={styles.body}>
            Textbook authoring requires a specific kind of discipline. Every claim needs a citation. Every example needs to be accurate and current. The writing has to be precise without being impenetrable. You are building a reference that students will return to across their careers, so shortcuts in accuracy or clarity compound into real problems.
          </p>
          <p className={styles.body}>
            This work connects directly to my research interests in creativity, cognition, explainable AI, and embodied cognition. Writing about these topics at textbook depth forces a level of understanding that reading alone does not. You cannot explain something clearly to a graduate student if you do not understand it thoroughly yourself.
          </p>
        </section>

        {/* Research Verification */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Research Verification</h2>
          <p className={styles.body}>
            The qualitative research verification work is about methodological rigor. Qualitative research produces rich data, but that richness creates opportunities for interpretive drift, where findings subtly shift away from what the data actually supports. My role is to verify that the research holds together: checking coding consistency, tracing claims back to source data, and flagging places where the analysis might be overreaching.
          </p>
          <p className={styles.body}>
            This is detail work. It requires patience, systematic thinking, and a willingness to question conclusions that seem reasonable but are not fully supported. It is also excellent training for anyone who wants to conduct their own qualitative research. You learn what rigor looks like by holding other work to that standard first.
          </p>
          <p className={styles.body}>
            The verification process involves reviewing transcripts, audit trails, and coding schemes. It means asking whether the categories genuinely emerge from the data or whether they were imposed on it. It means checking inter-rater reliability where applicable. None of this is glamorous, but it is the foundation that makes qualitative research credible.
          </p>
        </section>

        {/* Why This Matters */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>Why This Matters</h2>
          <p className={styles.body}>
            I am pursuing a research-oriented career in UX, with a focus on ethnographic and desk research. My goal is a PhD in HCI or Design Sciences. Everything in this assistantship feeds that trajectory directly.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Academic Credibility</h3>
            <p className={styles.body}>
              Co-authoring a graduate textbook is not something most MS students do. It is a signal that faculty trust your understanding of the field enough to let you contribute to a reference work. For PhD applications, this matters. It demonstrates that I can engage with literature at depth, write at publication quality, and sustain a long-form research contribution over time.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Research Skills</h3>
            <p className={styles.body}>
              The combination of textbook authoring and research verification builds exactly the skills a doctoral program wants to see: literature synthesis, methodological awareness, qualitative analysis, and the ability to work within a research team. These skills come from doing the work under supervision, not from reading about it.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>The Bigger Picture</h3>
            <p className={styles.body}>
              My research interests sit at the intersection of creativity, cognition, explainable AI, and embodied cognition. These are not disconnected topics. They converge on a central question: how do people think, create, and make sense of complex systems, and how should we design tools that support those processes? The GA work gives me direct experience engaging with that question at the level of rigor a PhD program expects.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills Demonstrated</h2>
          <div className={styles.skills}>
            {[
              "Graduate-level textbook authoring",
              "Instructional materials development",
              "Qualitative research verification",
              "Literature synthesis",
              "Academic writing",
              "Coding scheme analysis",
              "Faculty collaboration",
              "Research methodology",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
