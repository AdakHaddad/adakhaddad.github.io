// Central project list — used by all logo showcase variants
const projects = [
  {
    title: "Konekteti",
    url: "https://konekteti22.web.app",
    description: "Election mechanism platform with Firebase Hosting",
  },
  {
    title: "Bingke 61",
    url: "https://bingke61.netlify.app",
    description: "Order page for Bingke 61 traditional cake shop",
  },
  {
    title: "Al-amin Yogyakarta",
    url: "https://alaminyk.vercel.app",
    description: "Organization profile page for Al-amin Yogyakarta",
  },
  {
    title: "DocuMind",
    url: "https://documind-nocturn-ai.netlify.app",
    description: "AI-powered document analysis and mind mapping tool",
  },
  {
    title: "Harvest Stack",
    url: "https://harvest-stack.netlify.app",
    description: "Smart agriculture IoT monitoring dashboard",
  },
  {
    title: "LokaLink",
    url: "https://loka-link.netlify.app",
    description: "Local community platform connecting neighborhoods",
  },
  {
    title: "GIK ExpoMap",
    url: "https://gik-expomap.netlify.app",
    description: "GIS-based expo mapping and navigation system",
  },
  {
    title: "Bawang Capstone",
    url: "https://bawang-capstone.netlify.app",
    description: "Capstone project for smart farming solutions",
  },
  {
    title: "SimDosma",
    url: "https://simdosma.netlify.app",
    description: "Academic advisor management system",
  },
];

const faviconFor = (url, size = 128) => {
  const domain = url
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
};

export { projects, faviconFor };
