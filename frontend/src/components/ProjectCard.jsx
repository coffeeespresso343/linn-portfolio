import { ArrowUpRight, Flame, LoaderIcon } from "lucide-react";

const ProjectCard = ({
  num,
  title,
  description,
  tags,
  team,
  year,
  featured,
  wip,
  github,
  demo,
}) => {
  return (
    <div
      className={`card card-hover p-6 flex flex-col gap-3 relative overflow-hidden
                     before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px
                     before:bg-linear-to-r before:from-transparent before:via-accent/40 before:to-transparent
                     before:opacity-0 before:transition-opacity hover:before:opacity-100
                     ${featured ? "border-purple/35" : ""}
                     ${wip ? "opacity-75" : ""}`}
    >
      <span className="font-mono text-[0.63rem] text-accent tracking-[2px]">
        {num}
      </span>
      {featured && (
        <span
          className="absolute flex items-center gap-1 top-3.5 right-3.5 font-mono text-[0.63rem] tracking-wide bg-purple/18
         text-[#c09eff] px-2 py-0.5 rounded-full"
        >
          <Flame size={13} className="text-[#ff6b35]" />
          Featured
        </span>
      )}

      {wip && (
        <span
          className="absolute flex items-center gap-1 top-3.5 right-3.5 font-mono text-[0.63rem] tracking-wide
                         bg-[rgba(255,107,53,0.12)] text-[#ff6b35] px-2 py-0.5 rounded-full"
        >
          <LoaderIcon size={13} /> In Progress
        </span>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span key={t} className="tag-pill">
            {t}
          </span>
        ))}
      </div>

      <h3 className="font-display font-bold text-[1.02rem] leading-snug">
        {title}
      </h3>
      <p className="text-[0.83rem] text-muted flex-1 leading-relaxed">
        {description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-2 flex-wrap">
        <span
          className={`font-mono text-[0.65rem] px-2.5 py-0.5 rounded-full border
                          ${
                            team.includes("Team")
                              ? "bg-accent/[0.07] text-accent border-accent/16"
                              : "bg-yellow/[0.07] text-yellow border-yellow/16"
                          }`}
        >
          {team}
        </span>
        <span className="font-mono text-[0.65rem] text-dim">{year}</span>
      </div>

      {/* Links */}
      <div className="mt-3 flex gap-4 items-center justify-between pt-1">
        {github && (
          <a
            href={github}
            target="_blank"
            className="flex items-center bg-bg2 border border-white/[0.07] rounded-full px-2 py-0.5 gap-1 font-mono text-[0.73rem] text-muted hover:text-accent hover:bg-purple/10 transition-colors"
          >
            <img
              src="/github.webp"
              alt="GitHub Logo"
              className="h-5 w-5 rounded-full"
            />
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            className="flex items-center gap-1 font-mono text-[0.73rem] border border-accent/20 rounded-full px-2 py-0.5 text-accent bg-purple/10 hover:text-purple hover:border-purple/10 transition-colors"
          >
            Visit {title} <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
