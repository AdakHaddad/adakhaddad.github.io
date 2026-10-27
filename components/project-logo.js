import React, { useState } from "react";
import { faviconFor } from "./projects-data";

// Logo fallback chain: repo logo file -> site favicon -> letter tile
const ProjectLogo = ({ project, className = "", imgClassName = "" }) => {
  const candidates = [
    project.logoUrl,
    project.url ? faviconFor(project.url) : null,
  ].filter(Boolean);
  const [index, setIndex] = useState(0);
  const exhausted = index >= candidates.length;

  if (exhausted) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-primary-500/30 to-secondary-500/30 text-xl font-bold text-white ${className}`}
      >
        {project.title.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center overflow-hidden ${className}`}>
      <img
        src={candidates[index]}
        alt={`${project.title} logo`}
        className={`object-contain ${imgClassName}`}
        loading="lazy"
        onError={() => setIndex((i) => i + 1)}
      />
    </div>
  );
};

export default ProjectLogo;
