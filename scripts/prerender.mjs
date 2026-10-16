import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distIndex = path.join(root, "dist", "index.html");
const ssrDir = path.join(root, "dist-ssr");
const ssrEntry = path.join(ssrDir, "entry-server.js");

const ROOT_MARKUP = '<div id="root"></div>';
const JSONLD_MARKER = "<!--app-jsonld-->";

const { render, serializeStructuredData } = await import(
  pathToFileURL(ssrEntry).href
);

let html = await readFile(distIndex, "utf8");

if (!html.includes(ROOT_MARKUP) || !html.includes(JSONLD_MARKER)) {
  throw new Error("dist/index.html is missing the root or JSON-LD placeholder");
}

const appHtml = render();
const jsonLd = `<script type="application/ld+json">${serializeStructuredData()}</script>`;

html = html
  .replace(JSONLD_MARKER, () => jsonLd)
  .replace(ROOT_MARKUP, () => `<div id="root">${appHtml}</div>`);

await writeFile(distIndex, html, "utf8");
await rm(ssrDir, { recursive: true, force: true });

console.log(
  `Prerendered dist/index.html (${(appHtml.length / 1024).toFixed(1)} KB of markup + JSON-LD)`,
);
