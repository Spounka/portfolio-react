import { useEffect, useState } from "react";
import { Header } from "./Header.tsx";
import { Hero } from "./Hero.tsx";
import { Projects } from "./Projects.tsx";
import { About } from "./About.tsx";
import { WorkExperience } from "./WorkExperience.tsx";
import { Contact } from "./Contact.tsx";
import { Footer } from "./Footer.tsx";

import "./styles.css";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
      return;
    }

    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)",
    ).matches;
    const initialTheme = prefersLight ? "light" : "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    localStorage.setItem("theme", initialTheme);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const themeLabel = theme === "light" ? "☀️ Light" : "🌙 Dark";
  const year = new Date().getFullYear();

  return (
    <>
      <div className="blur-orb one"></div>
      <div className="blur-orb two"></div>

      <Header themeLabel={themeLabel} toggleTheme={toggleTheme} />

      <main id="top">
        <Hero />
        <Projects />
        <About />
        <WorkExperience />
        <Contact />
      </main>

      <Footer year={year} />
    </>
  );
}
