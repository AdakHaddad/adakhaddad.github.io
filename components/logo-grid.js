import React from "react";
import ProjectLogo from "./project-logo";
import { FaGithub, FaBookOpen } from "react-icons/fa";

const LogoGrid = ({ projects }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      {projects.map((p, i) => (
        <div
          key={`${p.title}-${i}`}
          className="glass-card p-6 flex flex-col items-center text-center group hover:glow-primary hover:-translate-y-1 transition-all duration-300 fade-in"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <a href={p.url} target="_blank" rel="noopener noreferrer">
            <ProjectLogo
              project={p}
              className="w-16 h-16 rounded-2xl bg-white mb-4 group-hover:scale-110 transition-transform duration-300"
              imgClassName="w-10 h-10"
            />
          </a>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary-300 transition-colors">
            <h3 className="text-white font-bold mb-1">{p.title}</h3>
          </a>
          <p className="text-dark-400 text-xs leading-snug flex-1">{p.description}</p>
          <div className="flex gap-3 mt-3">
            {p.repoUrl && (
              <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="text-dark-500 hover:text-white transition-colors" title="Source code">
                <FaGithub />
              </a>
            )}
            {p.blogUrl && (
              <a href={p.blogUrl} target="_blank" rel="noopener noreferrer" className="text-dark-500 hover:text-accent-400 transition-colors" title="Read the blog">
                <FaBookOpen />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
