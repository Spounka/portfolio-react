export function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="grid cols-2">
            <div className="card fade-up">
              <div className="section-head">
                <div>
                  <h2>About</h2>
                  <p>
                    A precision solutions engineer with great attention to
                    DevOps
                  </p>
                </div>
              </div>

              <p>
                I design and build software with a bias toward clarity,
                maintainability, and practical results. I like systems that feel
                simple on the surface and remain understandable underneath.
              </p>

              <div className="about-list">
                <div className="stat">
                  <strong>+5</strong>
                  <span>Years building things</span>
                </div>
                <div className="stat">
                  <strong>+20</strong>
                  <span>Projects completed</span>
                </div>
                <div className="stat">
                  <strong>+80%</strong>
                  <span>Satisfaction Rate</span>
                </div>
              </div>
            </div>

            <div className="card fade-up">
              <div className="section-head">
                <div>
                  <h2>Toolbox</h2>
                  <p>
                    What I'm good at
                  </p>
                </div>
              </div>

              <div className="pill-row">
                <span className="pill">JavaScript</span>
                <span className="pill">TypeScript</span>
                <span className="pill">React</span>
                <span className="pill">Node.js</span>
                <span className="pill">Python</span>
                <span className="pill">PostgreSQL</span>
                <span className="pill">Docker</span>
                <span className="pill">Vagrant</span>
                <span className="pill">Ansible</span>
                <span className="pill">Git</span>
                <span className="pill">GitHub Actions</span>
                <span className="pill">GitLab Runners</span>
                <span className="pill">Nginx</span>
                <span className="pill">Caddy</span>
                <span className="pill">Linux</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
