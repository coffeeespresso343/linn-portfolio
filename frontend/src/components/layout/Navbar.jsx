import { AnimatePresence, motion } from "framer-motion";
import { Menu, User, X } from "lucide-react";
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
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`
      fixed top-0 left-0 right-0 z-900 flex items-center justify-between
      px-10 py-4 transition-all duration-300
      ${isScrolled ? "bg-bg/10 border-b border-white/[0.07] backdrop-blur-2xl" : "bg-bg/75 backdrop-blur-2xl"}
    `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-accent/30">
            <User size={28} />
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
        <button
          aria-label="Toggle menu"
          className="md:hidden text-white transition-colors hover:bg-white/5"
          onClick={() => setIsMenuOpen((o) => !o)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isMenuOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 top-16 right-0 z-[700] bg-purple-500/5 backdrop-blur-md md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 30,
              }}
              className="md:hidden fixed h-[calc(100vh-4rem)] w-[72%] max-w-sm top-16 right-0 border-l border-purple/20 shadow-2xl shadow-accent/10 bg-bg/30 backdrop-blur-xl z-[800] p-8"
            >
              <nav className="flex h-full flex-col justify-center gap-4">
                {[...NAV_LINKS, { href: "#contact", label: "Contact" }].map(
                  (l, i) => (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{
                        delay: i * 0.05,
                        duration: 0.25,
                      }}
                      onClick={() => setIsMenuOpen(false)}
                      className={`w-full rounded-xl px-5 py-3 font-mono text-sm  transition-colors
                        ${
                          isActive === l.href.slice(1)
                            ? "text-accent bg-accent/15 border border-accent/30 shadow-lg shadow-accent/10"
                            : "text-muted hover:bg-white/5 hover:text-accent"
                        }`}
                    >
                      {l.label}
                    </motion.a>
                  ),
                )}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
