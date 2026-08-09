"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [elevated, setElevated] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setElevated(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="site-header" data-elevated={elevated ? "true" : "false"}>
        <div className="brand">
          <button
            type="button"
            className="brand-mark"
            onClick={() => setIsImageOpen(true)}
            aria-label="View profile image"
          >
            <Image src="/assets/jl.png" alt="John Lester Mayuga" width={38} height={38} />
          </button>
          <a className="brand-copy" href="#home" aria-label="John Lester Mayuga home">
            <span>
              <strong>Full Stack</strong> Developer
            </span>
          </a>
        </div>
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
      {isImageOpen ? (
        <div className="image-modal" role="dialog" aria-modal="true" aria-label="Profile image preview">
          <div className="image-modal-backdrop" onClick={() => setIsImageOpen(false)} />
          <div className="image-modal-panel">
            <button className="image-modal-close" type="button" onClick={() => setIsImageOpen(false)} aria-label="Close image preview">
              ×
            </button>
            <img src="/assets/jl.png" alt="John Lester Mayuga" />
          </div>
        </div>
      ) : null}
    </>
  );
}
