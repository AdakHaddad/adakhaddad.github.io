import React from "react";
import ProjectLogo from "./project-logo";
import { FaGithub, FaBookOpen } from "react-icons/fa";

const LogoCard = ({ project, className = "", style = {} }) => (
  <div
    className={`glass-card w-56 shrink-0 flex flex-col items-center text-center group hover:glow-primary hover:-translate-y-1 transition-all duration-300 ${className}`}
    style={style}
  >
    <a href={project.url} target="_blank" rel="noopener noreferrer">
      <ProjectLogo
        project={project}
        className="w-14 h-14 rounded-2xl bg-white mb-3 group-hover:scale-110 transition-transform duration-300"
        imgClassName="w-9 h-9"
      />
    </a>
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary-300 transition-colors">
      <h3 className="text-white font-bold">{project.title}</h3>
    </a>
    <p className="text-dark-400 text-[11px] leading-snug mt-1 px-3">{project.description}</p>
    <div className="flex gap-3 mt-2">
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-dark-500 hover:text-white transition-colors" title="Source code">
          <FaGithub />
        </a>
      )}
      {project.blogUrl && (
        <a href={project.blogUrl} target="_blank" rel="noopener noreferrer" className="text-dark-500 hover:text-accent-400 transition-colors" title="Read the blog">
          <FaBookOpen />
        </a>
      )}
    </div>
  </div>
);

const LogoCarousel = ({ projects }) => {
  const reversed = [...projects].reverse();
  const marqueeDuration = `${projects.length * 4}s`;

  return (
    <div className="space-y-6">
      {/* Row 1 → left */}
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div
          className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: marqueeDuration }}
        >
          {[...projects, ...projects].map((p, i) => (
            <LogoCard key={`row1-${i}`} project={p} />
          ))}
        </div>
      </div>

      {/* Row 2 → right */}
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div
          className="flex gap-6 w-max animate-marquee-reverse hover:[animation-play-state:paused]"
          style={{ animationDuration: `${projects.length * 5}s` }}
        >
          {[...reversed, ...reversed].map((p, i) => (
            <LogoCard key={`row2-${i}`} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
