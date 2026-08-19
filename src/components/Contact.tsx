export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-heading">
        <p className="eyebrow">Contact</p>
        <h2>Let's Work Together</h2>
        <p>
          Have a project in mind? I would love to hear about it. Let's discuss how we can bring your vision to life.
        </p>
      </div>
      <div className="contact-grid">
        <article className="contact-card">
          <div className="service-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </div>
          <div>
            <h3>John Lester Mayuga</h3>
            <p>Full Stack Developer</p>
            <a href="mailto:johnlester.mayuga@gmail.com">johnlester.mayuga@gmail.com</a>
            <a href="tel:+639057117673">+63 905 711 7673</a>
          </div>
        </article>
        <article className="contact-card">
          <div className="service-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.5 8.25H3.25V19H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.87 6.75 1.88 1.88 0 0 0 4.88 3ZM19.5 12.83c0-3.24-1.73-4.75-4.04-4.75a3.5 3.5 0 0 0-3.17 1.75V8.25H9.04V19h3.25v-5.32c0-1.4.27-2.76 2-2.76 1.7 0 1.72 1.6 1.72 2.85V19h3.25l.24-6.17Z" />
            </svg>
          </div>
          <div>
            <h3>Connect on LinkedIn</h3>
            <p>See my professional profile, experience, and network.</p>
            <a
              href="https://www.linkedin.com/in/jlmayuga/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/jlmayuga
            </a>
          </div>
        </article>
        <article className="contact-card">
          <div className="service-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.01c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.58c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
            </svg>
          </div>
          <div>
            <h3>Explore My GitHub</h3>
            <p>Browse my repositories, projects, and development work.</p>
            <a
              href="https://github.com/jlmayuga"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/jlmayuga
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
