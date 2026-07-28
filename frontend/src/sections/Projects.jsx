import { useState } from "react";
import { projects, filterTabs } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import FadeIn from "../components/ui/FadeIn";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(filter));

  return (
    <section id="projects" className="py-28 bg-bg">
      <div className="max-w-295 mx-auto px-10 md:px-14">
        <div className="section-label">// 03 - Projects</div>
        <h2 className="section-title">
          Things I've <em>Built</em>
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-9">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`font-mono text-[0.72rem] tracking-wide px-4 py-1.5 rounded-full border 
                transition-all duration-200 
                 ${
                   filter === tab.key
                     ? "bg-accent text-bg border-accent"
                     : "border-white/[0.07] text-muted hover:border-accent hover:text-accent bg-transparent"
                 }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {visible.map((p, i) => (
            <FadeIn key={p.id} delay={i * 60}>
              <ProjectCard {...p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
