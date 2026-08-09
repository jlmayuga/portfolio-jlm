export default function Credentials() {
  return (
    <section className="section credentials">
      <div className="credential-copy">
        <p className="eyebrow">Education &amp; Certifications</p>
        <h2>Formal education, agile certification, and ongoing software development training.</h2>
      </div>
      <div className="credential-list">
        <article className="credential-card has-logo">
          <div className="credential-logo-box">
            <img src="/assets/ama.png" alt="AMA College Logo" className="icagile-logo" />
          </div>
          <div className="credential-info">
            <span>2014</span>
            <h3>Bachelor of Science in Information Technology (Cum Laude)</h3>
            <p>AMA Computer College | Pampanga Campus</p>
            <a
              className="credential-link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              View institution
            </a>
          </div>
        </article>

        <article className="credential-card has-logo">
          <div className="credential-logo-box">
            <img src="/assets/asset-1.svg" alt="ICAgile Logo" className="icagile-logo" />
          </div>
          <div className="credential-info">
            <span>February 2026</span>
            <h3>ICAgile Certified Professional (ICP)</h3>
            <p>ICAgile | Agile Fundamentals, Team Collaboration, Value-Driven Delivery</p>
            <a
              className="credential-link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify Credential
            </a>
          </div>
        </article>

        <article className="credential-card has-logo">
          <div className="credential-logo-box">
            <img src="/assets/Udemy_logo.svg" alt="Udemy Logo" className="udemy-logo" />
          </div>
          <div className="credential-info">
            <span>January 2026</span>
            <h3>React - The Complete Guide</h3>
            <p>Udemy | Next.js, Redux, modern React best practices</p>
            <a
              className="credential-link"
              href="https://www.udemy.com/certificate/UC-01f932f4-9b07-4871-a7f0-a9c3546ea6df/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View certificate
            </a>
          </div>
        </article>

        <article className="credential-card has-logo">
          <div className="credential-logo-box">
            <img src="/assets/Udemy_logo.svg" alt="Udemy Logo" className="udemy-logo" />
          </div>
          <div className="credential-info">
            <span>January 2026</span>
            <h3>Vue.js Fast Crash Course</h3>
            <p>Udemy | Practical Vue.js development fundamentals</p>
            <a
              className="credential-link"
              href="https://www.udemy.com/certificate/UC-6ee25f7c-f70b-4bd8-8168-438679e20e25/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View certificate
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
