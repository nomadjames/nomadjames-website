import styles from "./page.module.css";
import Tldr from "@/components/Tldr";
import PretextTitle from "@/components/PretextTitle";

export const metadata = {
  title: "PAUG.net: Community Platform for the Pittsburgh Ableton User Group | James Dishman",
  description:
    "Case study on designing and building paug.net, a standalone community hub for the Pittsburgh Ableton User Group after social media stopped being a reliable way to reach members.",
};

export default function PaugPage() {
  return (
    <div className={styles.page}>
      <main className="container">

        {/* Back link */}
        <a href="/portfolio" className={styles.backLink}>&larr; Work</a>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.category}>Web Development / Community Design</span>
            <span className={styles.metaDot} aria-hidden="true">&middot;</span>
            <span className={styles.year}>2026</span>
            <span className={styles.metaDot} aria-hidden="true">&middot;</span>
            <span className={styles.context}>Co-founder &middot; Pittsburgh Ableton User Group</span>
          </div>
          <PretextTitle text={"PAUG.net:\nCommunity Platform"} className={styles.title} />
          <p className={styles.liveLink}>
            <a href="https://paug.net" target="_blank" rel="noopener noreferrer">
              Visit paug.net &rarr;
            </a>
          </p>
          <div className={styles.methods}>
            {[
              "Next.js",
              "GitHub Pages",
              "Decap CMS",
              "Responsive Design",
              "Community UX",
              "Dark UI",
              "Mailchimp Integration",
              "DNS / SSL",
              "Google Analytics 4",
              "Space Mono + Inter",
            ].map((m) => (
              <span key={m} className={styles.method}>{m}</span>
            ))}
          </div>
        </header>

        <Tldr>
          The Pittsburgh Ableton User Group needed a home that wasn&apos;t rented from a social media platform. I designed and built paug.net as a standalone community hub with events, blog, founder bios, and a CMS so non-technical co-founders can publish content. The site is live, DNS is configured, and PAUG finally has a URL it owns.
        </Tldr>

        {/* The Problem */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Problem</h2>
          <p className={styles.body}>
            I co-founded the Pittsburgh Ableton User Group with Paul Miller and Steve Knots about a decade ago. For most of that time, we used Facebook and Instagram to announce events, share mixes, and keep the community connected. That worked until it didn&apos;t.
          </p>
          <p className={styles.body}>
            The decline was gradual and then sudden. Facebook&apos;s algorithm changes meant that even people who followed the group page were not seeing our posts. Instagram reach dropped in the same direction. Platform instability, outages, policy shifts, and the general feeling that Meta was no longer building for communities like ours made it clear that we were renting space on someone else&apos;s infrastructure. Members were missing events. New people couldn&apos;t find us reliably. There was no central, permanent place that represented what PAUG actually is.
          </p>
          <p className={styles.body}>
            This is not a unique problem. Small creative communities everywhere ran into the same wall. The difference is that most of them don&apos;t have a web developer as a co-founder.
          </p>
        </section>

        {/* The Design Question */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <h2 className={styles.sectionTitle}>The Design Question</h2>
          <blockquote className={styles.pullQuote}>
            What does a community hub look like when it actually belongs to the community?
          </blockquote>
          <p className={styles.body}>
            The goal was not to replicate social media. We did not need a feed, we did not need likes, and we did not need an algorithm deciding who sees what. We needed a place where anyone could find PAUG, see upcoming events, read about who we are, and optionally get on a mailing list. Simple on the surface, but the design decisions underneath that simplicity mattered.
          </p>
        </section>

        {/* What I Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Built</h2>
          <p className={styles.body}>
            PAUG.net is a static site built with Next.js, deployed on GitHub Pages, and configured with a custom domain. The site includes an events page, a blog, an about page with bios and photos of all three founders, and infrastructure for a mailing list signup via Mailchimp.
          </p>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Aesthetic as Identity</h3>
            <p className={styles.body}>
              The visual direction was intentional. PAUG is an electronic music community rooted in production culture, not a corporate meetup group. The design reflects that: dark backgrounds, neon accent colors, a scanline overlay that references CRT monitors and analog gear, and a glitch-inflected visual language. The typography pairs Space Mono (for headers and labels) with Inter (for body text), giving the site a technical feel without sacrificing readability.
            </p>
            <p className={styles.body}>
              The aesthetic is closer to brutalist or punk design than anything you would find in a SaaS template. That was the right call for this audience. PAUG members are producers, DJs, and sound designers. The site needed to feel like it belonged to them, not like a startup landing page someone forgot to customize.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Content Management for Non-Developers</h3>
            <p className={styles.body}>
              A site that only the developer can update is a site that stops getting updated. One of the three founders, Steve, handles most of the event coordination. He needed a way to post events and blog entries without touching code, opening a terminal, or learning Git. Decap CMS solves this. It provides a browser-based editing interface that commits directly to the GitHub repo, which triggers a rebuild and deploy. Steve can log in, write a post, and publish it. The pipeline handles the rest.
            </p>
            <p className={styles.body}>
              This was a design decision as much as a technical one. The CMS had to be simple enough that the least technical founder could use it confidently, without training beyond a five-minute walkthrough.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Mobile-First Navigation</h3>
            <p className={styles.body}>
              Most of PAUG&apos;s audience checks event details on their phones, often right before heading out. The navigation is a responsive hamburger menu that works cleanly on mobile without hiding important content behind too many taps. Desktop gets the full nav bar. The layout adapts but the information hierarchy stays consistent across breakpoints.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Infrastructure</h3>
            <p className={styles.body}>
              DNS is configured and pointing to GitHub Pages. SSL is provisioned automatically. The deployment pipeline is GitHub Actions triggered by pushes to main. There is no server to maintain, no hosting bill, and no database. For a community group that runs on volunteer effort, that operational simplicity matters. The less infrastructure overhead, the more likely the site stays alive.
            </p>
            <p className={styles.body}>
              The site is instrumented with Google Analytics 4 so we can see whether people are actually finding it, which pages they land on, and whether the events page is doing its job. Analytics is running on both paug.net and nomadjames.com, which means every production site I own is reporting real traffic data rather than running blind.
            </p>
          </div>
        </section>

        {/* Design Decisions */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Design Decisions That Mattered</h2>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>No algorithm, no feed</h3>
            <p className={styles.body}>
              The whole point of leaving social media was to stop being subject to algorithmic distribution. PAUG.net is a flat site. Everything is visible, everything is findable. If there is an event posted, anyone who visits the events page will see it. That is the feature.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Founder bios as trust signal</h3>
            <p className={styles.body}>
              The about page includes photos and bios for all three founders. For a community group, knowing who runs things matters. It is a trust signal, especially for people discovering PAUG for the first time. Real names, real faces, real context about why we started the group and what it is for.
            </p>
          </div>

          <div className={styles.finding}>
            <h3 className={styles.findingTitle}>Mailing list over social follows</h3>
            <p className={styles.body}>
              A mailing list is the one communication channel that belongs to the sender. No algorithm sits between us and our members. Mailchimp integration is built into the site and pending final configuration. Once live, it replaces the unreliable reach of social media with a direct line to people who opted in.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tech Stack</h2>
          <ul className={styles.reflectionList}>
            <li><strong>Framework:</strong> Next.js (static export)</li>
            <li><strong>Hosting:</strong> GitHub Pages with custom domain</li>
            <li><strong>CMS:</strong> Decap CMS (Git-backed, browser-based)</li>
            <li><strong>Typography:</strong> Space Mono + Inter</li>
            <li><strong>Visual:</strong> Dark theme, neon accents, scanline overlay, glitch aesthetic</li>
            <li><strong>Email:</strong> Mailchimp (integration built, pending final config)</li>
            <li><strong>SSL:</strong> Auto-provisioned via GitHub Pages</li>
            <li><strong>CI/CD:</strong> GitHub Actions on push to main</li>
            <li><strong>Analytics:</strong> Google Analytics 4 (same instrumentation as nomadjames.com)</li>
          </ul>
        </section>

        {/* Outcome */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Outcome</h2>
          <p className={styles.body}>
            The site is live at{" "}
            <a href="https://paug.net" target="_blank" rel="noopener noreferrer" style={{ color: "var(--orange)" }}>
              paug.net
            </a>
            . DNS is configured, SSL is active, real content is published, and all three founders are represented. PAUG has a home that it owns. Members can find events without hoping the algorithm surfaces a post. New people searching for &quot;Pittsburgh Ableton User Group&quot; land on a real site with real information instead of an abandoned Facebook page.
          </p>
          <p className={styles.body}>
            For a community that has been running for about ten years, having a permanent address on the internet is overdue. It changes how we talk about PAUG: instead of &quot;find us on Facebook,&quot; it is &quot;go to paug.net.&quot; That sounds small. It is not.
          </p>
        </section>

        {/* What I'd Do Differently / What's Next */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I&apos;d Do Differently / What&apos;s Next</h2>
          <ul className={styles.reflectionList}>
            <li>
              <strong>Decap CMS onboarding for Steve:</strong> The CMS is set up but Steve has not used it solo yet. The real test is whether he can post an event without asking me anything. That walkthrough needs to happen and any friction points need to get smoothed out
            </li>
            <li>
              <strong>Mailchimp integration:</strong> The signup form is built into the site structure. Final Mailchimp configuration and testing is next. Once that is live, we can actually communicate with members directly
            </li>
            <li>
              <strong>Event RSVP system:</strong> Right now events are informational. A lightweight RSVP or &quot;I&apos;m interested&quot; feature would give us signal on expected attendance, which helps with venue planning
            </li>
            <li>
              <strong>Content velocity:</strong> The site only works as a community hub if it gets updated regularly. The CMS makes that possible technically, but the human habit of actually posting still needs to develop. That is a design problem too, just not one you solve with code
            </li>
            <li>
              <strong>Acting on the analytics:</strong> GA4 is wired up and reporting, but the next step is actually looking at the data. Which events get the most page views? Where do people land first? How does the signup form convert once Mailchimp is live? The instrumentation is the easy part. Building a habit of reading it and feeding insights back into the design is the part that matters
            </li>
          </ul>
        </section>

        {/* Skills Demonstrated */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills Demonstrated</h2>
          <div className={styles.skills}>
            {[
              "Next.js development",
              "Static site architecture",
              "Community-centered design",
              "Headless CMS configuration",
              "Responsive web design",
              "DNS and SSL provisioning",
              "CI/CD pipeline setup",
              "Visual design (dark/brutalist aesthetic)",
              "Typography selection",
              "Stakeholder communication",
              "Non-technical user onboarding",
              "Mailchimp integration",
              "Google Analytics 4 instrumentation",
              "GitHub Pages deployment",
            ].map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
