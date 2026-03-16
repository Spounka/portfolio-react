export function Header({
  themeLabel,
  toggleTheme,
}: {
  themeLabel: string;
  toggleTheme: () => void;
}) {
  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a href="#top" className="brand" aria-label="Go to top">
            <span>
              <img className="logo-icon" src="/favicon.svg" />
            </span>
            <span>Nazih Boudaakkar</span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="actions">
            <button
              className="theme-toggle"
              id="themeToggle"
              aria-label="Toggle theme"
              type="button"
              onClick={toggleTheme}
            >
              <span id="themeLabel">{themeLabel}</span>
            </button>
            <a className="btn primary" href="#contact">
              Let’s Talk
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
