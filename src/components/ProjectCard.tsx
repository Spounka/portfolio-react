import type { Project } from "../project";

export function ProjectCard({
  projectTitle,
  projectDescription,
  skills,
  demoLink,
  sourceLink,
  img = "/favicon.svg",
  refs = undefined,
}: Project) {
  return (
    <>
      <article
        style={{ display: "flex", flexDirection: "column" }}
        className="card fade-up"
      >
        <div className="project-thumb">
          <img style={{ width: "100%", height: "100%" }} src={img} />
        </div>
        <h3>{projectTitle}</h3>
        <p style={{ flex: 1, alignSelf: "flex-start" }}>{projectDescription}</p>
        <div className="pill-row">
          {skills.map((skill) => {
            return (
              <span key={skill} className="pill">
                {skill}
              </span>
            );
          })}
        </div>
        <div className="project-links" style={{ marginTop: "32px" }}>
          <a target={"_blank"} href={demoLink}>
            Live Demo ↗
          </a>
          <a target={"_blank"} href={sourceLink}>
            Source ↗
          </a>
          {refs?.map((ref) => {
            return (
              <a key={ref} target={"_blank"} href={ref}>
                Ref ↗
              </a>
            );
          })}
        </div>
      </article>
    </>
  );
}
