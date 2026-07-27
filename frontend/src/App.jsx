import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Collab from "./sections/Collab";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <div className="noise-overlay fixed inset-0 z-[998] pointer-events-none opacity-25" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Collab />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
