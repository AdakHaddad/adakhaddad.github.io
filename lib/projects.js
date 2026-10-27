import axios from "axios";
import data from "@/data/projects.json";

const USER = "AdakHaddad";
const LOGO_NAMES = ["logo.svg", "logo.png", "logo.webp", "logo.jpg", "logo.jpeg"];
const BLOG_NAMES = ["blog.md"];
const BRANCHES = ["main", "master"];

const blobView = (rawUrl) =>
  rawUrl &&
  rawUrl.replace(
    `https://raw.githubusercontent.com/${USER}/`,
    `https://github.com/${USER}/`
  ).replace(/\/(main|master)\//, "/blob/$1/");

const raw = (repo, branch, name) =>
  `https://raw.githubusercontent.com/${USER}/${repo}/${branch}/${name}`;

async function head(url) {
  try {
    const res = await axios.head(url, { timeout: 8000 });
    return res.status === 200;
  } catch {
    return false;
  }
}

const firstExisting = async (repo, names) => {
  for (const branch of BRANCHES) {
    for (const name of names) {
      const url = raw(repo, branch, name);
      if (await head(url)) return url;
    }
  }
  return null;
};

export async function getProjects() {
  let repos = [];
  try {
    const res = await axios.get(
      `https://api.github.com/users/${USER}/repos?per_page=100&sort=updated&stype=sources`,
      { headers: { Accept: "application/vnd.github+json" }, timeout: 10000 }
    );
    repos = res.data
      .filter((r) => !r.fork && !r.archived)
      .filter((r) => !data.hidden.some((h) => h.toLowerCase() === r.name.toLowerCase()));
  } catch (e) {
    repos = [];
  }

  const repoProjects = await Promise.all(
    repos.map(async (r) => {
      const override = data.overrides[r.name] || {};
      const [logo, blog] = await Promise.all([
        override.logo ? firstExisting(r.name, [override.logo]) : firstExisting(r.name, LOGO_NAMES),
        firstExisting(r.name, BLOG_NAMES),
      ]);
      const deployedUrl =
        r.homepage &&
        (await head(`https://${r.homepage.replace(/^https?:\/\//, "")}`))
          ? r.homepage
          : null;
      return {
        source: "github",
        title: r.name,
        url: override.url || deployedUrl || r.html_url,
        repoUrl: r.html_url,
        description: override.description || r.description || "",
        blogUrl:
          override.blogUrl ||
          (blog
            ? blobView(blog)
            : null),
        logoUrl: logo,
        topics: r.topics || [],
        updated: r.updated_at,
      };
    })
  );

  const extraProjects = (data.extras || []).map((e) => ({
    source: "extra",
    title: e.name,
    url: e.url,
    repoUrl: null,
    description: data.overrides[e.name]?.description || e.description || "",
    blogUrl: data.overrides[e.name]?.blogUrl || null,
    logoUrl: null,
    topics: [],
  }));

  // Merge: hide repo entries whose title matches an extra (deployed version wins)
  const extraNames = new Set(extraProjects.map((p) => p.title.toLowerCase()));
  const merged = repoProjects.filter((p) => !extraNames.has(p.title.toLowerCase()));

  return [...extraProjects, ...merged];
}
