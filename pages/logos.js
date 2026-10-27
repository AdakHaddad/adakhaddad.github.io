import React from "react";
import Head from "next/head";
import Nav from "@/components/nav";
import LogoShowcase from "@/components/logo-showcase";
import { getProjects } from "@/lib/projects";

export default function LogosPage({ projects }) {
  return (
    <>
      <Head>
        <title>Logo Showcase | AdakHaddad</title>
      </Head>
      <Nav />
      <section className="py-16 md:py-24 min-h-screen">
        <div className="section-container">
          <div className="text-center mb-10">
            <h1 className="section-title gradient-text mb-2">Project Logo Showcase</h1>
            <p className="text-dark-400">Pick a style — Grid, Carousel, or Map (and delete the rest).</p>
          </div>
          <LogoShowcase projects={projects} />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();
  return { props: { projects } };
}
