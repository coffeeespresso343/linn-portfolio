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
            className="flex items-center bg-bg2 border border-white/[0.07] rounded-full px-2 py-0.5 gap-1 font-mono text-[0.73rem] text-purple lg:text-muted hover:text-accent hover:bg-purple/10 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 012.87-.39c.97 0 1.95.13 2.87.39 2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.68 5.38-5.24 5.67.41.35.78 1.05.78 2.12v3.14c0 .3.21.66.79.55A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"></path>
            </svg>
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
