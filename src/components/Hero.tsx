import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero section-band">
      <div className="hero-bg" aria-hidden="true">
        <div className="grid-field"></div>
        <div className="signal-line signal-line-a"></div>
        <div className="signal-line signal-line-b"></div>
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="availability-pill">Senior Agile Software Engineer</p>
          <h1>
            I&apos;m John Lester Mayuga, <span>Full Stack Developer</span>.
          </h1>
          <p className="hero-text">
            Full Stack Developer with 11+ years of enterprise software engineering experience.
            I deliver scalable React, Next.js, Node.js, Express.js, and API-first applications with reusable
            component libraries, modernized legacy systems, and strong Agile delivery practices.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Work
            </a>
            <a
              className="btn btn-cv"
              href="/assets/John_Lester_Mayuga_CV.pdf"
              download="John_Lester_Mayuga_CV.pdf"
              aria-label="Download John Lester Mayuga's CV as a PDF"
            >
              <span aria-hidden="true">↓</span>
              Download CV
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact Me
            </a>
          </div>
          <div className="social-links" aria-label="Social and contact links">
            <a
              href="https://www.linkedin.com/in/jlmayuga/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a href="mailto:johnlester.mayuga@gmail.com" aria-label="Email">
              @
            </a>
            <a href="tel:+639057117673" aria-label="Phone">
              +
            </a>
          </div>
        </div>

        <div className="delivery-panel" aria-label="Professional delivery highlights">
          <div className="profile-portrait-card">
            <div className="profile-photo" aria-label="John Lester Mayuga profile image">
              <Image
                src="/assets/jl-no-bg.png"
                alt="John Lester Mayuga"
                width={240}
                height={240}
                className="profile-photo-img"
              />
            </div>
            <strong>John Lester Mayuga</strong>
              <span>Full Stack Developer</span>
          </div>
          <div className="panel-topbar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="console-line">
            <span className="muted">stack</span>
            <strong>React.js / Next.js / Node.js / Express.js / REST</strong>
          </div>
          <div className="console-line">
            <span className="muted">domain</span>
            <strong>Enterprise web applications</strong>
          </div>
          <div className="progress-group">
            <div>
              <span>Reusable UI systems</span>
              <span>92%</span>
            </div>
            <div className="meter value-92">
              <span></span>
            </div>
          </div>
          <div className="progress-group">
            <div>
              <span>API integration</span>
              <span>88%</span>
            </div>
            <div className="meter accent value-88">
              <span></span>
            </div>
          </div>
          <div className="mini-grid">
            <article>
              <strong>11+</strong>
              <span>years</span>
            </article>
            <article>
              <strong>9+</strong>
              <span>in Web App</span>
            </article>
            <article>
              <strong>6+</strong>
              <span>major domains</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
