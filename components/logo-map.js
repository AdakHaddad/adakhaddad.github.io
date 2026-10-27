import React from "react";
import ProjectLogo from "./project-logo";

// Deterministic pseudo-random position per project (stable across renders)
const positionFor = (index) => {
  const golden = 2.399963; // golden angle for even spread
  const angle = index * golden;
  // Elliptical orbit around center (percentages of container)
  const rx = 40;
  const ry = 34;
  const x = 50 + Math.cos(angle) * rx * (0.6 + 0.4 * ((index % 3) / 3));
  const y = 50 + Math.sin(angle) * ry;
  return { x: `${Math.min(88, Math.max(12, x))}%`, y: `${Math.min(88, Math.max(12, y))}%` };
};

const sizes = ["w-16 h-16", "w-14 h-14", "w-12 h-12"];
const durations = ["8s", "10s", "12s", "9s", "11s", "13s"];

const LogoMap = ({ projects }) => {
  const points = projects.map((_, i) => positionFor(i));

  return (
    <div className="relative w-full h-[28rem] md:h-[34rem] rounded-2xl overflow-hidden glass-card">
      {/* Grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} preserveAspectRatio="none">
        {points.map((a, i) => {
          const b = points[(i + 1) % points.length];
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#lineGrad)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
          );
        })}
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating logos */}
      {projects.map((p, i) => {
        const pos = positionFor(i);
        const size = sizes[i % sizes.length];
        const PLogo = (
          <ProjectLogo
            project={p}
            className={`${size} rounded-2xl bg-white shadow-lg group-hover:scale-125 transition-transform duration-300`}
            imgClassName="w-[60%] h-[60%]"
          />
        );
        return (
          <div
            key={`${p.title}-${i}`}
            className="absolute group z-10"
            style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
          >
            {/* Pulse ring */}
            <span
              className={`absolute inset-0 rounded-full animate-pulse-ring ${
                i % 2 === 0 ? "border border-primary-500/50" : "border-2 border-secondary-500/50"
              }`}
              style={{ animationDelay: `${i * 0.4}s` }}
            />
            <div
              className="animate-drift cursor-pointer"
              style={{ animationDuration: durations[i % durations.length], animationDelay: `${i * 0.7}s` }}
            >
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  {PLogo}
                </a>
              ) : (
                PLogo
              )}
            </div>
            {/* Tooltip */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1.5 rounded-lg bg-dark-800 border border-white/10 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {p.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LogoMap;
