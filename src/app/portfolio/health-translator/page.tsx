import styles from "./page.module.css";

export const metadata = {
  title: "Health Translator | James Dishman",
  description: "AI-powered plain-language translation for healthcare portals. A team capstone exploring trust, health literacy, and the ethics of AI in high-stakes contexts.",
};

export default function HealthTranslator() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Back link */}
        <a href="/portfolio" className={styles.backLink}>← Work</a>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.category}>AI / UX Research</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span className={styles.year}>2025</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span className={styles.course}>UX 60521 - AI in UX/HCI Design · Kent State MS UX · Team Capstone</span>
          </div>
          <h1 className={styles.title}>Health Translator:<br />AI That Earns Its Place</h1>
          <div className={styles.methods}>
            {["Primary Research", "Interviews", "Surveys", "Trust-Centered Design", "Information Architecture", "Multimodal Interaction", "Plain Language"].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        {/* The Problem */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Problem</h2>
          <p className={styles.body}>
            Medical records and patient portal content are written at a graduate reading level. The average
            American adult reads at an 8th-grade level. That gap isn&apos;t a technicality - it means that
            millions of patients receive test results, diagnosis summaries, and care instructions they
            genuinely cannot parse. They log into portals, see clinical language, and either guess at
            meaning, give up, or wait to ask a doctor at a follow-up that may be weeks away.
          </p>
          <p className={styles.body}>
            Health literacy is a social determinant of health. Poor health literacy correlates with worse
            outcomes, lower medication adherence, and higher rates of preventable hospitalization. The
            portal - the technology that was supposed to democratize access to personal health information
            - often makes this worse, not better. It moves the record closer while keeping it just as
            opaque.
          </p>
          <p className={styles.body}>
            Our team set out to design an AI-powered plain-language translation layer for healthcare portals:
            something that converts clinical language to accessible language on demand, meets patients where
            their actual literacy level is, and doesn&apos;t require them to do anything except ask.
          </p>
        </section>

        {/* The Research */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Research</h2>
          <p className={styles.body}>
            We grounded this project in primary research - interviews and surveys with patients and
            healthcare users - because the design space here is genuinely different from what the
            literature suggests it is. People don&apos;t talk to researchers the same way they talk to
            their doctors. We wanted to hear directly what was frustrating, what was confusing, and - most
            importantly - what would actually feel safe to use.
          </p>
          <p className={styles.body}>
            What came back from the research was clarifying. Participants weren&apos;t confused about what
            they didn&apos;t understand. They were frustrated that understanding felt inaccessible. The
            distinction matters. They knew the language was technical. They didn&apos;t lack intelligence -
            they lacked a key. When given one, they used it.
          </p>
          <p className={styles.body}>
            We also heard consistent anxiety about the portal itself: about what records they might find,
            about whether they&apos;d be notified before their doctor called, about reading a value without
            knowing if it was normal. The AI translation concept landed well in research sessions - but only
            when participants understood what it was doing and felt like they could override or question it.
            That nuance became the entire design problem.
          </p>
        </section>

        {/* Trust as the Central Constraint */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The Design Challenge: Trust</h2>
          <p className={styles.body}>
            Healthcare is high stakes. That sounds obvious until you try to design an AI feature for it and
            realize how thoroughly that stakes-ness changes every assumption you might bring from consumer
            product design.
          </p>
          <p className={styles.body}>
            In low-stakes contexts - music recommendations, search autocomplete, email drafts - AI errors
            are annoying. In healthcare, an AI that mistranslates a lab result or softens language about a
            serious finding isn&apos;t a bad user experience. It&apos;s a potential harm. Participants in
            our research understood this intuitively. When we probed their skepticism about AI in healthcare,
            they weren&apos;t being irrational or technophobic. They were doing exactly the right thing:
            calibrating their trust to the stakes of the domain.
          </p>
          <p className={styles.body}>
            That meant the design couldn&apos;t lead with capability. It had to lead with honesty. The system
            needed to be visibly clear about what it was doing, consistently transparent about its
            limitations, and architecturally committed to one principle above all others: <strong>the
            patient is always in control, and they can always reach a human.</strong>
          </p>
          <p className={styles.body}>
            Trust in this context isn&apos;t a feature to be added. It&apos;s the medium the design swims in.
            Every interaction pattern, every piece of UI copy, every decision about what the AI says and
            how it says it is either building or eroding it.
          </p>
        </section>

        {/* The Human Escalation Path */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Human Escalation Decision</h2>
          <p className={styles.body}>
            One of the most important design decisions in this project was also the simplest: always make
            the path to a human visible, present, and easy. Not buried in a menu. Not available only when
            the AI fails. Always there.
          </p>
          <p className={styles.body}>
            This wasn&apos;t just an accessibility or safety feature. It was a communication. An always-visible
            escalation path tells the patient something before they ever need to use it: <em>this system
            knows it has limits, and it respects yours.</em> That message - sent through structure and
            presence rather than words - is foundational to the kind of trust we needed to build.
          </p>
          <p className={styles.body}>
            There&apos;s a design pattern in healthcare technology that hides human support behind chat flows,
            FAQ walls, and cost-reduction logic. That pattern may be operationally efficient. It is
            consistently trust-destroying. We went the other direction: the human option is prominent
            not because it will be used most of the time, but because its presence changes how the whole
            system feels to use.
          </p>
          <p className={styles.body}>
            The patient who never clicks the escalation button still benefits from seeing it there. That
            matters.
          </p>
        </section>

        {/* What We Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What We Built</h2>
          <p className={styles.body}>
            The design concept centered on a translation layer that sits within the patient portal interface
            without replacing or obscuring the clinical record. Patients can see the original clinical text
            and trigger a plain-language translation on demand - it doesn&apos;t auto-replace, because some
            patients want the original and some providers care about patients seeing the actual record.
            The choice is the patient&apos;s.
          </p>
          <ul className={styles.methodList}>
            <li>
              <strong>On-demand plain-language translation</strong> - converts clinical text to accessible
              language when requested, without overwriting or hiding the source record
            </li>
            <li>
              <strong>Audio reading</strong> - translated content can be read aloud, extending access to
              patients with low literacy, visual impairment, or who simply prefer listening
            </li>
            <li>
              <strong>Persistent human escalation</strong> - a visible, always-available path to a care
              coordinator or support staff member, present in every state of the interface
            </li>
            <li>
              <strong>Transparency about AI limitations</strong> - the system is explicit that translations
              are AI-generated, that clinical decisions should involve a provider, and that accuracy cannot
              be guaranteed for every term
            </li>
            <li>
              <strong>Reading level indicator</strong> - patients can see what level the plain-language
              output targets, making the translation itself legible
            </li>
          </ul>
          <p className={styles.body}>
            The multimodal approach - text plus audio - wasn&apos;t an add-on. Health literacy and auditory
            preference are not the same thing, but they often intersect. Offering both from the start means
            the system serves a broader range of users without requiring anyone to self-identify as needing
            a different format.
          </p>
        </section>

        {/* What We Learned */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What We Learned</h2>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Skepticism is a design signal, not an obstacle</h3>
            <p className={styles.body}>
              Every moment in our research when a participant expressed doubt about AI in healthcare was
              a design brief. The question wasn&apos;t how to overcome that skepticism. It was how to design
              a system that deserves to have it met with trust over time. Those are very different
              projects, and most AI product design in healthcare mistakes the first for the second.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>The gap is linguistic, not cognitive</h3>
            <p className={styles.body}>
              Users who struggled to understand clinical language were not struggling to understand their
              health situation. They were struggling with the code the institution had chosen to write in.
              That reframe is important. A translation tool that treats users as capable adults navigating
              an unnecessarily opaque system is a different product - with different tone, different copy,
              different assumptions - than one that treats them as needing help because they&apos;re not smart
              enough. We tried hard to build the former.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Team design surfaces assumptions faster</h3>
            <p className={styles.body}>
              Working collaboratively on this project meant that assumptions I didn&apos;t know I was making
              got surfaced early. Another team member pushing back on a design decision about when to show
              the escalation option - and being right - was a better education in the value of diverse
              perspectives in design than any reading could have been. Capstone work done solo is faster.
              It&apos;s not better.
            </p>
          </div>
        </section>

        {/* Reflection */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>On AI in High-Stakes Domains</h2>
          <p className={styles.body}>
            This project settled something for me professionally. There&apos;s a version of AI product design
            that chases capability - what&apos;s the most impressive thing we can make it do? And there&apos;s
            a version that chases fit - what is the right thing for this system to do in this context for
            these users, and how do we build that honestly?
          </p>
          <p className={styles.body}>
            In high-stakes domains - healthcare, legal, financial, mental health - capability without fit
            is dangerous. The pressure to automate, to impress, to reduce cost through AI intervention
            runs directly against what users in those domains actually need, which is accuracy, transparency,
            and control. The design decisions that matter most in those contexts are the conservative ones:
            what the system doesn&apos;t do, what it defers, what it makes visible rather than hiding.
          </p>
          <p className={styles.body}>
            I want to keep working in this space. Not because it&apos;s easier - it isn&apos;t - but because the
            design problems are the right size and the stakes make the work matter.
          </p>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills Demonstrated</h2>
          <div className={styles.skills}>
            {[
              "Primary research design (interviews + surveys)",
              "Research synthesis and insight development",
              "Trust-centered design frameworks",
              "AI product design for high-stakes contexts",
              "Information architecture",
              "Plain language content strategy",
              "Multimodal interaction design (text + audio)",
              "Human escalation path design",
              "Ethics of AI in healthcare",
              "Collaborative design and capstone research",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
