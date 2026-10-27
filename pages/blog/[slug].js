import React from "react";
import Head from "next/head";
import Nav from "@/components/nav";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";

const Post = ({ post }) => {
  const router = useRouter();

  if (!post) {
    return (
      <>
        <Nav />
        <section className="py-24 min-h-[60vh]">
          <div className="section-container text-center">
            <p className="text-dark-400 mb-6">
              {router.isFallback || !router.isReady
                ? "Loading post…"
                : "This post was published but this static page was built before it existed."}
            </p>
            <Link href="/blog/" className="btn-secondary inline-flex items-center gap-2">
              <FaArrowLeft /> Back to Blog
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | AdakHaddad Blog</title>
      </Head>
      <Nav />
      <section className="py-16 md:py-24">
        <div className="section-container max-w-3xl">
          <Link href="/blog/" className="inline-flex items-center gap-2 text-sm text-dark-400 hover:text-white transition-colors mb-8">
            <FaArrowLeft /> All posts
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-dark-400 mb-10">
            <span>{new Date(post.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
            {post.labels.map((l) => (
              <span key={l} className="px-2 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs">
                {l}
              </span>
            ))}
            <a
              href={post.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>

          <article
            className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-primary-300 prose-code:bg-dark-800 prose-code:text-accent-300 prose-pre:bg-dark-800 prose-blockquote:border-l-primary-500 prose-blockquote:text-dark-300"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </section>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const posts = await getBlogPosts();
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: true, // new issues render client-side until next build
  };
}

export async function getStaticProps({ params }) {
  const post = await getBlogPost(Number(params.slug));
  if (!post) return { props: { post: null } };
  return { props: { post } };
}
