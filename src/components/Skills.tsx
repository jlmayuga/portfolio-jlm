export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading centered">
        <p className="eyebrow">Technical Skills &amp; Competencies</p>
        <h2>Skills &amp; Technologies</h2>
        <p>Core engineering strengths for enterprise web application development and agile delivery.</p>
      </div>
      <div className="skill-matrix">
        <article>
          <div className="skill-icon-header">
            <i className="devicon-react-original-wordmark colored"></i>
            <h3>Frontend</h3>
          </div>
          <p>React.js, Next.js, Redux, Vue.js, AngularJS, JavaScript (ES6+), TypeScript, Tailwind CSS, Vite, HTML5, CSS3</p>
        </article>
        <article>
          <div className="skill-icon-header">
            <i className="devicon-nodejs-plain-wordmark colored"></i>
            <h3>Backend &amp; DB</h3>
          </div>
          <p>Node.js, Express.js, REST API development, PostgreSQL, MySQL</p>
        </article>
        <article>
          <div className="skill-icon-header">
            <i className="devicon-docker-plain-wordmark colored"></i>
            <h3>Cloud &amp; DevOps</h3>
          </div>
          <p>Docker, AWS, Google Cloud Platform, CI/CD, Git, GitHub, GitLab, Bitbucket</p>
        </article>
        <article>
          <div className="skill-icon-header">
            <i className="devicon-jira-plain-wordmark colored"></i>
            <h3>Delivery</h3>
          </div>
          <p>Agile Scrum, SDLC, Legacy Modernization, Technical Leadership, Performance Optimization</p>
        </article>
      </div>
    </section>
  );
}
