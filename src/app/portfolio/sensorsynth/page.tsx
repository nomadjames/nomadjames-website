import styles from "./page.module.css";
import Tldr from "@/components/Tldr";

export const metadata = {
  title: "SensorSynth FM | James Dishman",
  description:
    "An iPad FM synthesizer that uses every available device sensor as modulation sources — accelerometer, gyroscope, magnetometer, barometer, LiDAR, TrueDepth camera, ambient light, microphone, and GPS. MS UX capstone, in active development.",
};

export default function SensorSynthFM() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Back link */}
        <a href="/portfolio" className={styles.backLink}>← Work</a>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.category}>Product Design · iOS Development</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span className={styles.year}>2026</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span className={styles.course}>MS UX Capstone · Kent State · In Progress</span>
          </div>
          <h1 className={styles.title}>SensorSynth FM:<br />Your Body as the Interface</h1>
          <div className={styles.methods}>
            {["Embodied Interaction Design", "FM Synthesis", "Sensor Mapping", "AudioKit / SwiftUI", "Human-AI Collaboration", "NIME Research"].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        <Tldr>
          An in-progress iPad FM synthesizer that treats every available device sensor as a modulation source: accelerometer, gyroscope, magnetometer, barometer, LiDAR, TrueDepth camera, ambient light, microphone, and GPS. The more environmental variables feeding the synthesis engine, the more unpredictable and unrepeatable each patch becomes. The design question: what happens when the instrument responds not just to your body, but to the full physical context you exist in? This is my MS UX capstone and a research artifact exploring embodied interaction with sound.
        </Tldr>

        {/* The Idea */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Idea</h2>
          <p className={styles.body}>
            Most instruments have a closed loop: you touch a surface, it responds with sound.
            The interface is a boundary. SensorSynth FM starts from a different premise: what if
            the instrument was open to the environment? What if the way you hold the device, tilt
            it, lean toward it, move through space with it, was itself the performance?
          </p>
          <p className={styles.body}>
            SensorSynth FM is an iPad FM synthesizer that treats every available device sensor as
            a modulation source: accelerometer, gyroscope, magnetometer, barometer, LiDAR, TrueDepth
            camera, ambient light, microphone, and GPS. The more environmental data feeding the engine,
            the more each performance becomes a product of where you are, how you move, and what
            surrounds you. No two patches sound the same because no two moments are physically identical.
          </p>
          <p className={styles.body}>
            This is my MS UX capstone at Kent State, built with AudioKit and SwiftUI, and it&apos;s
            also a research artifact in its own right: a comparative study of embodied versus
            touch-grid interaction in live music performance.
          </p>
        </section>

        {/* The Design Thesis */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The Design Thesis</h2>
          <p className={styles.body}>
            Paul Dourish&apos;s work on embodied interaction draws a distinction that matters here:
            the difference between interfaces you <em>learn to operate</em> and interfaces that feel
            <em>inevitable</em>: where the mapping between action and outcome becomes transparent
            through use. Gesture instruments succeed when you stop thinking about what to do and
            start just doing it.
          </p>
          <p className={styles.body}>
            The design question I&apos;m pursuing is: what does it feel like when your body <em>is</em>
            the instrument? Not when your body is pressing buttons that trigger sounds. When the
            physical fact of being in your body, moving through space, leaning in and pulling back,
            is itself the expressive act.
          </p>
          <p className={styles.body}>
            That question changes every UX decision downstream: how onboarding works, how gesture
            calibration is communicated, what visual feedback means in a performance context, how
            you design for a mapping that needs to feel discovered rather than taught.
          </p>
        </section>

        {/* The Architecture */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Architecture</h2>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>FM Synthesis Engine</h3>
            <p className={styles.body}>
              The synthesis core is a 4-operator FM engine with 8 algorithms, built on AudioKit 5.
              FM synthesis was the right choice for this project: it&apos;s computationally efficient
              on mobile, capable of enormous timbral range from a small set of parameters, and
              it responds to continuous modulation in ways that feel musically coherent, qualities
              that matter when the modulation source is a human body in motion.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Sensor Mapping Layer</h3>
            <p className={styles.body}>
              The modulation system ingests every sensor the iPad exposes: accelerometer (tilt,
              orientation), gyroscope (rotational velocity), magnetometer (compass heading, magnetic
              field disturbances), barometer (altitude, atmospheric pressure), LiDAR (spatial depth
              mapping, on Pro models), TrueDepth camera (proximity, facial expression), ambient light
              sensor (environmental brightness), microphone (ambient amplitude, spectral content), and
              GPS (latitude, longitude, altitude). Each feeds FM parameters (carrier frequency,
              modulation index, operator ratios, amplitude) through a smoothing layer that prevents
              abrupt jumps.
            </p>
            <p className={styles.body}>
              The key insight: the more environmental variables you pipe into the synthesis engine,
              the more semi-random and unrepeatable each patch becomes. Barometric pressure shifts
              as weather changes. Magnetometer readings fluctuate near metal structures. Ambient light
              varies with time of day. GPS drifts. These are not noise to be filtered out. They are
              the environmental fingerprint that makes every performance unique to the moment and
              place it happens. The instrument doesn&apos;t just respond to the performer. It responds
              to the world the performer is in.
            </p>
            <p className={styles.body}>
              The mapping design is not about precision. It&apos;s about feel. A small tilt should produce
              a subtle drift, not a pitch jump. The calibration parameters for each sensor are documented
              and tunable, because the right values for a seated studio session are different from the
              right values for a standing performance.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Three-Screen Interface</h3>
            <p className={styles.body}>
              The UI is organized into three views across a landscape iPad layout: a Performance View
              for live playing, an FM Engine View for dialing in the synthesis parameters, and a Sensor
              Modulation View for mapping physical gestures to audio parameters. The visual language
              is dark, minimal, and oriented toward live use: high contrast, readable at a glance,
              nothing you need to hunt for during a performance.
            </p>
          </div>
        </section>

        {/* Where it stands */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Where It Stands</h2>
          <p className={styles.body}>
            The architecture is fully documented and the design decisions are made. The Xcode project
            compiles and runs. The SwiftUI screens are built and working, a native audio engine is
            confirmed producing sound in the simulator, and AudioKit is integrated as a dependency.
            The next step is replacing the test sine wave with the actual FM oscillator.
          </p>
          <p className={styles.body}>
            The gap between documentation richness and running code is intentional. This is a
            documentation-first build, which means the hard decisions (4-operator structure, 8 algorithms,
            sensor smoothing parameters, threading model, audio safety rules) are already made and
            recorded. That makes implementation faster and more deliberate than the alternative.
          </p>
          <p className={styles.body}>
            No sensors are flowing to audio yet. No sequencer exists. MPE hasn&apos;t been implemented.
            The project is being honest about that on this page because being honest about process is the
            point. What&apos;s here is a foundation, not a finished product.
          </p>
        </section>

        {/* The AI Collaboration Thread */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Building Without a Development Background</h2>
          <p className={styles.body}>
            I don&apos;t have a software development background. This project is being built with Claude
            Code as a primary implementation collaborator: I provide the domain expertise, the design
            decisions, and the judgment about what&apos;s musically and experientially right. Claude
            writes the code.
          </p>
          <p className={styles.body}>
            The workflow documentation is unusually detailed because it has to be: the CLAUDE.md file
            in the repository contains audio thread safety rules, architectural constraints, and
            communication preferences that keep the AI collaborator aligned across sessions that
            don&apos;t share context. It&apos;s a form of design documentation that most solo developers never
            need to write. It turns out to be valuable precisely because it forces precision about
            what the system should and shouldn&apos;t do.
          </p>
          <p className={styles.body}>
            The question I&apos;m exploring in practice: can deep domain expertise plus AI collaboration
            replace a development team for an instrument of this ambition? The honest answer so far
            is: it can, but the designer has to bring more rigor to the architectural decisions, not
            less. When you can&apos;t read the code to check it, you have to be precise about what you ask for.
          </p>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills and Concepts</h2>
          <div className={styles.skills}>
            {[
              "Embodied interaction design theory (Dourish)",
              "FM synthesis architecture and parameter design",
              "Sensor-to-audio mapping design",
              "AudioKit 5 / SwiftUI / iOS",
              "Xcode project architecture",
              "Human-AI collaborative development",
              "Interaction design for live music performance",
              "NIME (New Interfaces for Musical Expression) research context",
              "Documentation-driven development",
              "MS UX capstone research design",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
