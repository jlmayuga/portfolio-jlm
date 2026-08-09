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
          <div className="service-icon">@</div>
          <div>
            <h3>John Lester Mayuga</h3>
            <p>Full Stack Developer</p>
            <a href="mailto:johnlester.mayuga@gmail.com">johnlester.mayuga@gmail.com</a>
            <a href="tel:+639057117673">+63 905 711 7673</a>
          </div>
        </article>
        <article className="contact-card">
          <div className="service-icon">in</div>
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
      </div>
    </section>
  );
}
