export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="section-heading centered">
        <p className="eyebrow">What I Do</p>
        <h2>Services &amp; Expertise</h2>
        <p>End-to-end development services for scalable product platforms and business workflows.</p>
      </div>
      <div className="service-grid">
        <article className="service-card">
          <div className="service-icon">&lt;/&gt;</div>
          <div>
            <h3>React Front-End Development</h3>
            <p>Reusable interfaces, stateful workflows, responsive layouts, and production-ready component systems.</p>
            <div className="chip-list">
              <span>React Hooks</span>
              <span>Redux</span>
              <span>Next.js</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </article>
        <article className="service-card highlighted">
          <div className="service-icon">API</div>
          <div>
            <h3>Full-Stack API Integration</h3>
            <p>Reliable connections between front-end apps, REST APIs, Express services, and relational databases.</p>
            <div className="chip-list">
              <span>Node.js</span>
              <span>Express</span>
              <span>REST APIs</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </article>
        <article className="service-card">
          <div className="service-icon">UX</div>
          <div>
            <h3>Product UI Modernization</h3>
            <p>Modernized screens, migration support, reusable UI libraries, and cross-browser performance tuning.</p>
            <div className="chip-list">
              <span>VueJS</span>
              <span>Vite</span>
              <span>Webpack</span>
              <span>Performance</span>
            </div>
          </div>
        </article>
        <article className="service-card highlighted">
          <div className="service-icon">CI</div>
          <div>
            <h3>Deployment &amp; Cloud Support</h3>
            <p>Practical deployment support for app servers, CI/CD workflows, Docker, AWS, and Google Cloud.</p>
            <div className="chip-list">
              <span>CI/CD</span>
              <span>Docker</span>
              <span>AWS</span>
              <span>Google Cloud</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
