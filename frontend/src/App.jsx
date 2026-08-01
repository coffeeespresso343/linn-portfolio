import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Collab from "./sections/Collab";
import Contact from "./sections/Contact";
import { useToast } from "./context/ToastContext";
import { useEffect } from "react";
import useCursor from "./hooks/useCursor";
import Testimonials from "./sections/Testimonials";

function App() {
  const { showToast } = useToast();

  useCursor();

  useEffect(() => {
    const hasEnteredSession = sessionStorage.getItem("hasEnteredSession");

    if (!hasEnteredSession) {
      const hasVisitedBefore = localStorage.getItem("hasVisited");

      showToast(
        hasVisitedBefore
          ? "Welcome back! Good to see you again."
          : "Hello, Welcome to my website. Take a look around.",
        "info",
      );

      sessionStorage.setItem("hasEnteredSession", "true");
      localStorage.setItem("hasVisited", "true");
    }
  }, [showToast]);

  useEffect(() => {
    // Ctrl + K to jump contact section
    function onKey(e) {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
        setTimeout(
          () => document.querySelector("#contact input")?.focus(),
          700,
        );
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-trail" />

      <div className="noise-overlay fixed inset-0 z-[999] pointer-events-none opacity-25" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Collab />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
