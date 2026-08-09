"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [elevated, setElevated] = useState(false);

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
      <a className="brand" href="#home" aria-label="John Lester Mayuga home">
        <span className="brand-mark">JM</span>
        <span>
          <strong>Full Stack</strong> Developer
        </span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#services">Services</a>
        <a href="#work">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-cta" href="#contact">
        Hire Me
      </a>
    </header>
  );
}
