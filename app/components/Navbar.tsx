"use client";
import Link from "next/link";

export default function Navbar() {
  // Smooth scroll
  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY;
      const start = window.scrollY;
      const distance = top - start;
      const duration = 300; // ms
      let startTime: number | null = null;
      function scrollStep(timestamp: number) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        window.scrollTo(0, start + distance * progress);
        if (progress < 1) {
          window.requestAnimationFrame(scrollStep);
        }
      }
      window.requestAnimationFrame(scrollStep);
    }
  }
  return (
    <nav className="navbar fixed bottom-5 left-1/2 -translate-x-1/2 justify-center items-center py-4 border p-4 rounded-4xl shadow-lg backdrop-blur-md font-bold">
      <ul className="flex gap-6">
        <li>
          <Link href="#home" onClick={e => handleNavClick(e, "home")} className="hover:underline">Home</Link>
        </li>
        <li>
          <Link href="#projects" onClick={e => handleNavClick(e, "projects")} className="hover:underline">Projects</Link>
        </li>
        <li>
          <Link href="#contact" onClick={e => handleNavClick(e, "contact")} className="hover:underline">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}