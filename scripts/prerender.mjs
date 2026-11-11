// Renders the React app to static HTML so the page works (and is indexable)
// before JavaScript loads, then removes the temporary SSR build.
import { readFileSync, writeFileSync, rmSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const base = process.env.SITE_BASE ?? "/Marcus-/";
const origin = process.env.SITE_ORIGIN ?? "https://pierreburrows.github.io";
const ssrDir = resolve(root, "dist-ssr");
const entry = readdirSync(ssrDir).find((f) => f.startsWith("entry-server") && f.endsWith(".js"));
const { render } = await import(pathToFileURL(resolve(ssrDir, entry)).href);

const file = resolve(root, "dist/index.html");
let html = readFileSync(file, "utf8");
html = html
  .replace("<!--app-html-->", render())
  .replaceAll("%BASE_ABS%", origin + base)
  .replaceAll("%BASE%", base);
writeFileSync(file, html);
writeFileSync(resolve(root, "dist/404.html"), html);
writeFileSync(resolve(root, "dist/.nojekyll"), "");
rmSync(ssrDir, { recursive: true, force: true });
console.log("Prerendered dist/index.html");
