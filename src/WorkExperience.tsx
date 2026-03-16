export function WorkExperience() {
  return (
    <>
      <section id="experience">
        <div className="container">
          <div className="section-head fade-up">
            <div>
              <h2>Experience</h2>
            </div>
          </div>

          <div className="timeline">
            <div className="card timeline-item fade-up">
              <time dateTime="2024">April 2024 — Present</time>
              <div>
                <h3>Research & Development Engineer — Corepulse</h3>
                <ul>
                  <li>
                    Deployed a service mesh solution for <code>HTTPS</code>{" "}
                    communication between microservices using{" "}
                    <code>HashiCorp's Consul</code>.
                  </li>
                  <li>
                    Designed a High Availability solution for{" "}
                    <code>PostgreSQL</code> for a banking client using{" "}
                    <code>Log Streaming</code> providing 99.99\% availability.
                  </li>
                  <li>
                    Installed and deployed a pre-defined multi-node{" "}
                    <code>Kubernetes</code> cluster on physical HPE servers as
                    part of a larger infrastructure rollout.
                  </li>
                </ul>
              </div>
            </div>

            <div className="card timeline-item fade-up">
              <time dateTime="2021">Jan 2021 — Present</time>
              <div>
                <h3>Web Developer — Self-Employed</h3>
                <ul>
                  <li>
                    Integrated various websites with <code>Cloudflare</code>{" "}
                    reducing bandwidth usage by at least 10\% and load times by
                    +2s.
                  </li>
                  <li>
                    Automated deployments to{" "}
                    <code>GCP, AWS, Azure and DigitalOcean</code> using
                    <code>Ansible, GitHub Actions, and Docker</code>, cutting
                    setup time by 50%.
                  </li>
                  <li>
                    Installed and deployed a pre-defined multi-node
                    <code>Kubernetes</code> cluster on physical HPE servers as
                    part of a larger infrastructure rollout.
                  </li>
                </ul>
              </div>
            </div>

            <div className="card timeline-item fade-up">
              <time dateTime="2021">Sep 2021 — Jun 2024</time>
              <div>
                <h3>Master's Degree — Software Engineering</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
