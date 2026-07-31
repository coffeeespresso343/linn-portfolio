import { MoveUp } from "lucide-react";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.07] bg-bg py-7">
      <div className="max-w-295 mx-auto px-10 md:px-14 flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
        <div className="rounded-full flex items-center flex-row gap-2 justify-center">
          <img
            src={Logo}
            alt="Linn Logo"
            className="h-5 w-5 rounded-full ring ring-accent/60"
          />
          <span className="font-display font-bold text-xs text-accent/90">
            Linn Khant
          </span>
        </div>

        <p className="flex items-center flex-col text-[0.76rem] text-dim">
          Build with Heart and too much Coffee
          <span> Linn Khant &copy; {new Date().getFullYear()}</span>
        </p>
        <div className="flex gap-6">
          <a
            href="#hero"
            className="flex items-center gap-0.5 font-mono text-[0.72rem] text-muted hover:text-accent transition-colors duration-200"
          >
            Back to Top <MoveUp size={14} />
          </a>
          <a
            href="https://github.com/coffeeespresso343/"
            target="_blank"
            className="flex items-center gap-1 font-mono text-[0.72rem] text-muted hover:text-accent transition-colors duration-200"
          >
            <svg
              width="14"
              height="14"
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
