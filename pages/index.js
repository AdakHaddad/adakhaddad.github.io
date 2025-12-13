import React from "react";
import Head from "next/head";
import Nav from "@/components/nav";
import Typewriter from "typewriter-effect";
import Web from "@/components/web";
import { FaDownload, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>AdakHaddad | Portfolio</title>
        <meta
          name="description"
          content="Muhammad Muqtada Alhaddad - Full Stack Developer & Tech Enthusiast. Explore my projects and skills."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center py-16 md:py-24 overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Badge */}
            <span className="inline-block px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/30 text-accent-400 text-sm font-medium mb-6 fade-in">
              Welcome to my Portfolio
            </span>

            {/* Typewriter Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in delay-100">
              <span className="gradient-text">
                <Typewriter
                  options={{
                    strings: [
                      `Hey There 👋`,
                      `I'm Muhammad Muqtada Alhaddad`,
                      `Long Life Student 📚`,
                      `Tech Enthusiast 🤖`,
                      `Full Stack Developer 💻`,
                    ],
                    speed: 50,
                    deleteSpeed: 30,
                    loop: true,
                    autoStart: true,
                  }}
                />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-dark-400 text-lg md:text-xl max-w-2xl mb-8 fade-in delay-200">
              Passionate about building beautiful, functional web applications 
              and exploring cutting-edge technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in delay-300">
              <a
                href="https://drive.google.com/drive/folders/1o25A-zP3hmc919RxK0gSwIaVrmPYOnlD?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <FaDownload /> View CV & Certificates
              </a>
              <a href="#projects" className="btn-secondary flex items-center gap-2">
                Explore Projects <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-dark-900/50">
        <Web />
      </section>

      {/* SparkAR Section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="glass-card p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <span className="inline-block px-4 py-2 rounded-full bg-secondary-500/10 border border-secondary-500/30 text-secondary-400 text-sm font-medium mb-4">
                  AR Experience
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="gradient-text-primary">SparkAR</span> Creator
                </h2>
                <p className="text-dark-300 text-lg mb-6 leading-relaxed">
                  I also create interactive Instagram filters using SparkAR! 
                  Experience augmented reality effects that bring fun and creativity 
                  to your social media content. 😎
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="/Assets/spark.gif"
                    alt="SparkAR Animation"
                    className="w-16 h-16 rounded-xl animate-float"
                  />
                  <div className="text-sm text-dark-400">
                    <p>Interactive filters</p>
                    <p>Face tracking effects</p>
                    <p>3D animations</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden glow-secondary">
                  <img
                    src="/Assets/SparkAR.png"
                    alt="SparkAR Projects"
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-dark-900/50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title gradient-text mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-dark-400 text-lg mb-8">
              Interested in collaborating or have a project in mind? 
              Check out my CV and certifications to learn more about my skills and experience.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1o25A-zP3hmc919RxK0gSwIaVrmPYOnlD?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-lg"
            >
              <FaDownload /> Download My CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="section-container text-center">
          <p className="text-dark-500 text-sm">
            © {new Date().getFullYear()} Muhammad Muqtada Alhaddad. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </>
  );
}
