import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /** Pure static export to `./out` for Cloudflare Workers Static Assets + edge router. */
  output: "export",
  images: {
    unoptimized: true,
  },
  /** Aligns public URLs and sitemap `<loc>` entries (e.g. `https://notepad.is/`). */
  trailingSlash: true,
  /** Avoid wrong inferred root when another lockfile exists higher in the tree. */
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
