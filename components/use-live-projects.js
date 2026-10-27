import React, { useEffect, useState } from "react";
import { getProjects } from "@/lib/projects";

// Merge live refresh: build-time data is the base; client re-fetches on load
// so new repos appear even on a static host without a rebuild.
const useLiveProjects = (initial) => {
  const [projects, setProjects] = useState(initial);

  useEffect(() => {
    let alive = true;
    getProjects().then((live) => {
      if (alive && live.length) setProjects(live);
    });
    return () => {
      alive = false;
    };
  }, []);

  return projects;
};

export default useLiveProjects;
