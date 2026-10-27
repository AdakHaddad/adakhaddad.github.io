import React, { useState } from "react";
import { FaThLarge, FaRocket, FaProjectDiagram } from "react-icons/fa";
import GridShowcase from "./logo-grid";
import CarouselShowcase from "./logo-carousel";
import MapShowcase from "./logo-map";
import useLiveProjects from "./use-live-projects";

const variants = [
  { id: "grid", name: "Grid", icon: FaThLarge, component: GridShowcase },
  { id: "carousel", name: "Carousel", icon: FaRocket, component: CarouselShowcase },
  { id: "map", name: "Map", icon: FaProjectDiagram, component: MapShowcase },
];

const LogoShowcase = ({ projects = [], initialVariant = "carousel" }) => {
  const [variant, setVariant] = useState(initialVariant);
  const liveProjects = useLiveProjects(projects);
  const Active = variants.find((v) => v.id === variant)?.component;

  return (
    <div>
      {/* Variant Switcher */}
      <div className="flex justify-center gap-3 mb-10">
        {variants.map((v) => {
          const Icon = v.icon;
          const isActive = variant === v.id;
          return (
            <button
              key={v.id}
              onClick={() => setVariant(v.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                isActive
                  ? "bg-primary-500/20 border-primary-500/50 text-primary-300"
                  : "bg-dark-800/50 border-white/10 text-dark-400 hover:text-white hover:border-white/20"
              }`}
            >
              <Icon className="text-xs" />
              {v.name}
            </button>
          );
        })}
      </div>

      {/* Active Variant */}
      <Active projects={liveProjects} />
    </div>
  );
};

export default LogoShowcase;
