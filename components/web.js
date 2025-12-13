import React from "react";

const WebsitePreview = ({ title, url }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <iframe
        title={title}
        src={url}
        className="w-full border-0 bg-white"
        style={{ height: "50vh" }}
        loading="lazy"
      />
    </div>
  );
};

const Web = () => {
  const websites = [
    { title: "Konekteti", url: "https://konekteti22.web.app" },
    { title: "Bingke 61", url: "https://bingke61.vercel.app" },
    { title: "Al-amin Yogyakarta", url: "https://alaminyk.vercel.app" },
  ];

  const descriptions = [
    "Deploying an election mechanism with Firebase Hosting",
    "Designed a simple order page for Bingke 61 cake shop",
    "Designed organization profile page",
  ];

  const websiteDescriptionPairs = websites.map((website, index) => {
    const description = descriptions[index];
    const isLeftAligned = index % 2 === 0;

    return (
      <div
        key={index}
        className={`flex flex-col md:flex-row ${
          isLeftAligned ? "md:flex-row" : "md:flex-row-reverse"
        } items-center justify-between glass-card p-6 md:p-8 gap-6 md:gap-10 fade-in`}
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <div className="w-full md:w-1/2">
          <WebsitePreview title={website.title} url={website.url} />
        </div>
        <div
          className={`w-full md:w-1/2 px-2 md:px-6 ${
            index % 2 === 0 ? "md:text-right" : "md:text-left"
          } text-center`}
        >
          <h3 className="font-bold text-2xl md:text-3xl mb-3 gradient-text-primary">
            {website.title}
          </h3>
          <p className="text-lg text-dark-300">{description}</p>
        </div>
      </div>
    );
  });

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
            A collection of web applications I&apos;ve built with passion.
          </p>
        </div>

        {/* Projects - Alternating Layout */}
        <div className="flex flex-col gap-8">
          {websiteDescriptionPairs}
        </div>
      </div>
    </section>
  );
};

export default Web;
