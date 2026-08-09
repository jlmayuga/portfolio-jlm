export default function AIAgents() {
  return (
    <section className="section ai-agents-section">
      <div className="section-heading centered">
        <p className="eyebrow">AI-Driven Workflow</p>
        <h2>
          Powering Development with <span>AI Agents</span>
        </h2>
        <p>
          I integrate advanced AI models and coding assistants into my daily engineering workflow to maximize velocity and code quality.
        </p>
      </div>
      <div className="ai-agents-grid">
        <article>
          <div className="ai-logo-box claude">
            <img src="/assets/claude.svg" alt="Claude 3.5" width={36} height={36} />
          </div>
          <span>Claude 3.5</span>
        </article>
        <article>
          <div className="ai-logo-box gemini">
            <img src="/assets/gemini.svg" alt="Gemini 1.5" width={36} height={36} />
          </div>
          <span>Gemini 1.5</span>
        </article>
        <article>
          <div className="ai-logo-box openai">
            <img src="/assets/openai.svg" alt="OpenAI Codex" width={36} height={36} />
          </div>
          <span>OpenAI Codex</span>
        </article>
        <article>
          <div className="ai-logo-box copilot">
            <img src="/assets/copilot.svg" alt="GitHub Copilot" width={36} height={36} />
          </div>
          <span>GitHub Copilot</span>
        </article>
        <article>
          <div className="ai-logo-box kimi">
            <img src="/assets/kimi.svg" alt="Kimi AI" width={36} height={36} />
          </div>
          <span>Kimi AI</span>
        </article>
      </div>
    </section>
  );
}
