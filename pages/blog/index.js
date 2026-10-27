import React from "react";
import Head from "next/head";
import Nav from "@/components/nav";
import { getBlogPosts } from "@/lib/blog";
import { FaExternalLinkAlt, FaRegComments } from "react-icons/fa";
import { useRouter } from "next/router";

export const Blog = ({ posts }) => {
  const router = useRouter();
  return (
    <div className="space-y-6">
      {posts.map((post, i) => (
        <a
          key={post.id}
          href={`/blog/${post.slug}/`}
          className="glass-card p-6 block group hover:glow-primary hover:-translate-y-0.5 transition-all duration-300 fade-in"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-300 transition-colors">
                {post.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-dark-400">
                <span>{new Date(post.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                {post.labels.slice(0, 3).map((l) => (
                  <span key={l} className="px-2 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs">
                    {l}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-dark-500 group-hover:text-primary-400 transition-colors shrink-0">
              <FaExternalLinkAlt />
            </span>
          </div>
        </a>
      ))}
      {posts.length === 0 && !router.isFallback && (
        <div className="glass-card p-10 text-center">
          <FaRegComments className="w-8 h-8 mx-auto text-dark-500 mb-4" />
          <p className="text-dark-400">No posts yet — first one coming soon.</p>
        </div>
      )}
    </div>
  );
};

export default function BlogIndex({ posts = [] }) {
  return (
    <>
      <Head>
        <title>Blog | AdakHaddad</title>
      </Head>
      <Nav />
      <section className="py-16 md:py-24 min-h-screen">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium mb-4">
              Writing
            </span>
            <h1 className="section-title gradient-text mb-4">Blog</h1>
            <p className="text-dark-400">Thoughts, project deep-dives, and lessons learned.</p>
          </div>
          <Blog posts={posts} />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getBlogPosts();
  return { props: { posts } };
}
