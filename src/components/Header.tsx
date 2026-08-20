"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [elevated, setElevated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setElevated(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="site-header" data-elevated={elevated ? "true" : "false"}>
        <div className="brand">
          <a className="brand-copy" href="#home" aria-label="John Lester Mayuga home">
            <span>
              <strong>Full Stack</strong> Developer
            </span>
          </a>
        </div>
      <nav className="nav-links" data-open={menuOpen ? "true" : "false"} aria-label="Primary navigation">
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#work" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <a className="header-cta" href="#contact">
        Hire Me
      </a>
    </header>
  );
}
