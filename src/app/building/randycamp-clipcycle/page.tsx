import styles from "../sensorsynth/page.module.css";
import Tldr from "@/components/Tldr";
import PretextTitle from "@/components/PretextTitle";
import SmartBackLink from "@/components/SmartBackLink";

export const metadata = {
  title: "RandyCamp Clipcycle | James Dishman",
  description:
    "An active creative technology build for RandyCamp: a fullscreen VJ clip cycler, psychedelic compositor, generated media library, and planned interface and Raspberry Pi installation path.",
};

export default function RandyCampClipcycle() {
  return (
    <div className={styles.page}>
      <main className="container">
        <SmartBackLink fallbackHref="/building" className={styles.backLink}>← Building</SmartBackLink>

        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.category}>Creative Technology · Installation</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span className={styles.year}>2026</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span className={styles.course}>In Progress</span>
          </div>
          <PretextTitle text={"RandyCamp Clipcycle:\nA Portable Visual System"} className={styles.title} />
          <div className={styles.methods}>
            {["VJ System Design", "PySide6 / libmpv", "OpenGL Compositing", "Generated Video", "Installation Interface", "Raspberry Pi Target", "Live Visuals"].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        <Tldr>
          RandyCamp Clipcycle started as a fullscreen VJ experiment and is now an active installation build. The current system can discover a RandyCamp media folder, randomize videos and stills, blend two libmpv decks through an OpenGL compositor, and run psychedelic transitions without a browser frontend. The next step is turning it into a controllable object: an interface, a performer-friendly control layer, and probably a Raspberry Pi build that can live at RandyCamp without needing my full workstation.
        </Tldr>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Shift</h2>
          <p className={styles.body}>
            This started as a simple question: can I make the RandyCamp visuals feel alive without manually VJing every cut? The first answer was a clip cycler. That was useful, but too thin. Once the system started blending clips, layering stills, randomizing transitions, and running dedicated RandyCamp media folders, it stopped feeling like a sketch.
          </p>
          <p className={styles.body}>
            The project is now a build. It has a runtime, a media pipeline, a local launcher, a preview path, and a clear next form: an installation-grade visual system that can run during RandyCamp with a physical or simple digital interface.
          </p>
        </section>

        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>What Exists Now</h2>
          <p className={styles.body}>
            The runtime is Clipcycle Clarence, a Python application built with PySide6 and python-mpv. It uses a single fullscreen window by default. Playback comes from libmpv, not OpenCV, VLC bindings, or a web player.
          </p>
          <p className={styles.body}>
            The visual engine uses two mpv players inside one OpenGL compositor. One deck is active. The other can become a ghost layer, so the image is not just one clip after another. The hidden deck can affect the visible deck through blend modes, shader overlays, and transitions before the system resolves into the next clip.
          </p>
          <p className={styles.body}>
            The RandyCamp config points at <code>/home/james/Clips/randycamp-visuals</code>. The current local folder has 81 playable media files: 61 videos and 20 images. There are desktop launchers for fullscreen use and for a 1280 by 720 preview window.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Visual Language</h2>
          <p className={styles.body}>
            The system is intentionally unstable in a controlled way. It can randomize segment length, playback speed, reverse playback, orientation, transition style, blend mode, shader overlay, and still-image overlays. Stills are not treated as dead slides. They can become moving transparent texture layers with their own opacity, drift, tile count, rotation, and fade timing.
          </p>
          <p className={styles.body}>
            The generated RandyCamp material includes ASCII monkeys, psychedelic loops, transparent overlays, and a separate Art Institute of Chicago prototype that cycles 102 videos against public-domain artwork. That ArtIC version is not the final installation. It is a proof that the visuals can hold together as a live collage system instead of a playlist.
          </p>
        </section>

        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The Interface Problem</h2>
          <p className={styles.body}>
            The current controls are still too developer-shaped: keyboard commands, config files, launchers, and timers. That is fine for testing. It is not the right interface for RandyCamp.
          </p>
          <p className={styles.body}>
            The next design problem is deciding what the operator should actually control. Not everything needs a knob. The useful controls are probably mode, intensity, category, freeze/advance, transition behavior, and maybe a panic/reset action. The interface should shape the performance without forcing someone to manage the whole engine manually.
          </p>
          <p className={styles.body}>
            This is where the project becomes UX work, not just visual code. The interface has to survive noise, darkness, distraction, and people who should not need to understand the internals to make the thing feel alive.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hardware Direction</h2>
          <p className={styles.body}>
            The likely target is a Raspberry Pi installation build. That is not done yet. The current verified runtime is on my Ubuntu workstation. The Pi version will need its own performance audit, hardware decode check, launch-on-boot path, controller mapping, and failure recovery.
          </p>
          <p className={styles.body}>
            That hardware constraint is useful. It forces the project away from desktop demo thinking and toward a box that can be turned on, left alone, and still make sense. If it cannot run reliably at the event, the visuals are not finished.
          </p>
        </section>

        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>What Comes Next</h2>
          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>1. Control surface</h3>
            <p className={styles.body}>
              Define the small set of controls that matter during a live installation and map them to keyboard, MIDI, GPIO, web UI, or another simple interface.
            </p>
          </div>
          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>2. Raspberry Pi test</h3>
            <p className={styles.body}>
              Prove whether libmpv, PySide6, OpenGL compositing, and the current RandyCamp media can run acceptably on the target hardware.
            </p>
          </div>
          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>3. Installation mode</h3>
            <p className={styles.body}>
              Add boot behavior, safe defaults, crash recovery, and a way to restart or reconfigure without turning the installation into a laptop session.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills and Concepts</h2>
          <div className={styles.skills}>
            {[
              "Creative technology installation design",
              "Live visual system architecture",
              "PySide6 application structure",
              "python-mpv / libmpv playback",
              "OpenGL shader compositing",
              "Generated media pipeline",
              "Still image overlay design",
              "Raspberry Pi deployment planning",
              "Interface design for performance environments",
              "Hardware-aware UX constraints",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
