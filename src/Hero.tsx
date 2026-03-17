export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="fade-up">
            <span className="eyebrow">Software Engineer • Portfolio</span>
            <h1>
              Build things fast.
              <br />
              <span className="gradient-text">Make them perfect.</span>
            </h1>
            <p>
              I build sustainable products with a clear attention to automation,
              saving you both time and money
            </p>

            <div className="hero-cta">
              <a href="#projects" className="btn primary">
                View Projects
              </a>
              <a href="#about" className="btn">
                About Me
              </a>
            </div>

            <div className="hero-meta">
              <span>Available for new projects</span>
              <span>Open source friendly</span>
            </div>
          </div>

          <div className="hero-card fade-up">
            <div className="terminal">
              <div className="terminal-top">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="prompt">$</span> whoami
                </div>
                <div className="terminal-line">
                  <span className="strong">Nazih Boudaakkar</span> — developer,
                  problem solver
                </div>
                <div className="terminal-line">
                  <span className="prompt">$</span> stack --primary
                </div>
                <div className="terminal-line">
                  JavaScript • TypeScript • Python
                </div>
                <div className="terminal-line">
                  <span className="prompt">$</span> mission: build simple, solid
                  products
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
