# 0001. Astro for Static Content Generation & Agentic Indexing

## Context
UKABCS requires a platform rebuild away from Site123 to a self-hosted architecture that provides full ownership, optimal Google SEO/AI-search discoverability, high-performance static delivery, and an intuitive file-based workflow for managing articles, news, and grant calls.

## Decision
We chose **Astro** with static output mode (`output: 'static'`) and Content Collections.

Key rationale:
1. **Zero Client-Side JS by Default**: Delivers pure semantic HTML, producing maximum Lighthouse scores (100/100) and instant indexing by Google and AI web crawlers (Perplexity, SearchGPT, Claude).
2. **File-Based Content Collections**: Articles, news, and project awards live as markdown files in `src/content/` with strictly typed frontmatter (`datePublished`, `author`, `tags`, `image`). Adding an article requires simply dropping a new Markdown file into the folder.
3. **Universal Hosting**: Generates a standard `dist/` directory of static assets deployable to any hosting platform (Vercel, Cloudflare Pages, Netlify, cPanel, Apache/Nginx).
4. **Machine-Readable Metadata**: Direct integration for `sitemap.xml`, `robots.txt`, and AI agent manifests (`llms.txt`).

## Considered Options
- **Next.js (App Router / Export)**: Heavier build overhead and runtime hydration for what is predominantly an authoritative academic content portal.
- **Pure Hand-Coded HTML/CSS**: Lacks modular templating, making maintenance of 16+ pages with shared headers, footers, and 20+ articles error-prone.

## Consequences
- Dynamic form submissions rely on external ClientFlow forms or serverless webhooks rather than server-rendered form handlers.
- Content updates are made either via Git/Markdown or a lightweight headless CMS connected to the repository.
