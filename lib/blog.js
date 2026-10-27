import axios from "axios";
import { marked } from "marked";

const ISSUES_API = "https://api.github.com/repos/AdakHaddad/adakhaddad.github.io/issues";
const BLOG_LABEL = "blog";

marked.setOptions({ breaks: true, gfm: true });

const toPost = (issue) => ({
  id: issue.number,
  slug: String(issue.number),
  title: issue.title,
  body: marked.parse(issue.body || ""),
  htmlUrl: issue.html_url,
  labels: (issue.labels || [])
    .filter((l) => l.name !== BLOG_LABEL)
    .map((l) => l.name),
  createdAt: issue.created_at,
  author: issue.user?.login || "AdakHaddad",
});

export async function getBlogPosts() {
  try {
    const res = await axios.get(
      `${ISSUES_API}?labels=${BLOG_LABEL}&state=open&per_page=100&sort=created&direction=desc`,
      { headers: { Accept: "application/vnd.github+json" }, timeout: 10000 }
    );
    return res.data.map(toPost);
  } catch {
    return [];
  }
}

export async function getBlogPost(id) {
  try {
    const res = await axios.get(`${ISSUES_API}/${id}?state=all`, {
      headers: { Accept: "application/vnd.github+json" },
      timeout: 10000,
    });
    const issue = res.data;
    if (!(issue.labels || []).some((l) => l.name === BLOG_LABEL)) return null;
    return toPost(issue);
  } catch {
    return null;
  }
}

export { BLOG_LABEL };
