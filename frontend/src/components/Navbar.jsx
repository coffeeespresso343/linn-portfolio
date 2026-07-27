import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#collab", label: "Collab" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setIsActive(e.target.id);
        });
      },
      { rootMargin: "-38% 0px -55% 0px" },
    );
    sections.forEach((s) => obs.observe(s));

    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-900 flex items-center justify-between
      px-10 py-4 transition-all duration-300
      ${isScrolled ? "bg-bg/97 border-b border-white/[0.07] backdrop-blur-2xl" : "bg-bg/75 backdrop-blur-2xl"}
    `}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-accent/30">
          <svg viewBox="0 0 80 80" className="w-full h-full">
            <defs>
              <linearGradient id="navAvG" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c30ff" />
                <stop offset="100%" stopColor="#00e5ff" />
              </linearGradient>
            </defs>
            <rect width="80" height="80" fill="url(#navAvG)" />
            <ellipse cx="40" cy="74" rx="24" ry="15" fill="rgba(0,0,0,0.5)" />
            <rect x="35" y="49" width="10" height="13" rx="4" fill="#c8a574" />
            <ellipse cx="40" cy="36" rx="15" ry="17" fill="#c8a574" />
            <ellipse cx="40" cy="23" rx="15" ry="8" fill="#281400" />
            <rect x="25" y="23" width="30" height="9" fill="#281400" />
            <circle cx="34.5" cy="36" r="2" fill="#2e1800" />
            <circle cx="45.5" cy="36" r="2" fill="#2e1800" />
            <path
              d="M35 43 Q40 47 45 43"
              stroke="#8a4428"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="font-mono font-bold text-lg tracking-widest">
          <span className="text-accent">[</span>LK
          <span className="text-accent">]</span>
        </span>
      </div>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-7">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={`font-mono text-[0.75rem] tracking-wide transition-colors duration-200 ${
                isActive === l.href.slice(1)
                  ? "text-accent"
                  : "text-muted hover:text-accent"
              }`}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="font-mono text-[0.75rem] text-accent border border-accent/30 px-4 py-1.5 rounded-md transition-all duration-200 hover:bg-accent hover:text-bg"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button className="md:hidden" onClick={() => setIsMenuOpen((o) => !o)}>
        {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
      </button>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-60 bg-bg/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-[800]">
          {[...NAV_LINKS, { href: "#contact", label: "Contact" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-mono text-2xl text-muted hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
