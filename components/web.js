import React, { useState } from "react";
import { FaExternalLinkAlt, FaCode, FaTimes } from "react-icons/fa";

const WebsitePreview = ({ title, url }) => {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="aspect-video bg-dark-800 rounded-xl overflow-hidden">
        <iframe
          title={title}
          src={url}
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
      {/* Overlay for better UX */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
      >
        <span className="flex items-center gap-2 btn-primary text-sm">
          Visit Site <FaExternalLinkAlt className="text-xs" />
        </span>
      </a>
    </div>
  );
};

// Code snippets for easter egg
const codeSnippets = {
  "Konekteti": `// Firebase Hosting Setup
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  projectId: "konekteti22",
  // Real-time election mechanism
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);`,

  "Bingke 61": `// Next.js Order Page Component
export default function OrderPage() {
  const [cart, setCart] = useState([]);
  
  return (
    <div className="grid gap-4">
      {cakes.map(cake => (
        <CakeCard 
          key={cake.id}
          onAdd={() => addToCart(cake)}
        />
      ))}
    </div>
  );
}`,

  "Al-amin Yogyakarta": `// Organization Profile Component
const ProfileSection = ({ data }) => (
  <section className="glass-card p-8">
    <h1 className="gradient-text">
      {data.name}
    </h1>
    <p>{data.description}</p>
    <TeamGrid members={data.team} />
  </section>
);`
};

const ProjectCard = ({ title, description, url, index }) => {
  const [showCode, setShowCode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="glass-card-hover p-6 fade-in relative group"
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setShowCode(false); }}
    >
      {/* Easter egg: tiny code icon on hover */}
      <button
        onClick={() => setShowCode(!showCode)}
        className={`absolute top-3 right-3 z-20 w-7 h-7 rounded-lg bg-dark-800/80 border border-white/10 flex items-center justify-center text-xs transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        } ${showCode ? 'text-primary-400 border-primary-500/50' : 'text-dark-400 hover:text-primary-400'}`}
        title="Peek at source code"
      >
        {showCode ? <FaTimes /> : <FaCode />}
      </button>

      {/* Code overlay */}
      {showCode && (
        <div className="absolute inset-0 z-10 bg-dark-950/95 backdrop-blur-sm rounded-2xl p-4 overflow-hidden fade-in">
          <div className="h-full overflow-auto">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-xs text-dark-400 ml-2">{title.toLowerCase().replace(' ', '-')}.jsx</span>
            </div>
            <pre className="text-xs md:text-sm text-dark-200 font-mono leading-relaxed overflow-x-auto">
              <code>{codeSnippets[title] || '// Source code'}</code>
            </pre>
          </div>
        </div>
      )}

      <WebsitePreview title={title} url={url} />
      <div className="mt-5">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 gradient-text-primary inline-block">
          {title}
        </h3>
        <p className="text-dark-300 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const Web = () => {
  const projects = [
    { 
      title: "Konekteti", 
      url: "https://konekteti22.web.app",
      description: "Deploying an election mechanism with Firebase Hosting for seamless real-time voting experience."
    },
    { 
      title: "Bingke 61", 
      url: "https://bingke61.vercel.app",
      description: "Designed a simple and elegant order page for Bingke 61 cake shop with modern UI."
    },
    { 
      title: "Al-amin Yogyakarta", 
      url: "https://alaminyk.vercel.app",
      description: "Designed a professional organization profile page with clean aesthetics."
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="section-title gradient-text">
            Past Projects
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto mt-4">
            A collection of web applications I&apos;ve built, showcasing my skills in modern web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Web;
