import { ProjectCard } from "./components/ProjectCard";
import type { Project } from "./project";

const projects: Project[] = [
  {
    projectTitle: "Medex",
    projectDescription: "B2B RFQ marketplace for medical products.",
    skills: ["React", "TypeScript", "DjangoRest", "Python"],
    demoLink: "",
    sourceLink: "https://github.com/Spounka/Medex-Frontend",
    img: "/medex-thumb.png",
  },
  {
    projectTitle: "ClickR Photography",
    projectDescription:
      "A landing page for a SaaS photography website. Design from Figma",
    skills: ["React", "TypeScript", "TailwindCSS"],
    demoLink: "https://clickr-sr6x.onrender.com/",
    sourceLink: "https://github.com/Spounka/clickr-landing-page",
    img: "/clickr-thumb.png",
    refs: [
      "https://www.figma.com/community/file/979703961394752403/clickr-photography-agency-landing-page",
    ],
  },
];

export function Projects() {
  return (
    <>
      <section id="projects">
        <div className="container">
          <div className="section-head fade-up">
            <div>
              <h2>Selected Projects</h2>
            </div>
          </div>

          <div className="grid cols-3">
            {projects.map((project) => {
              return <ProjectCard key={project.projectTitle} {...project} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
