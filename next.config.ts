import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /** Aligns public URLs and sitemap `<loc>` entries (e.g. `https://notepad.is/`). */
  trailingSlash: true,
  /** Avoid wrong inferred root when another lockfile exists higher in the tree (fixes missing `src/proxy` / bad module paths in dev). */
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
