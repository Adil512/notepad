import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Aligns public URLs and sitemap `<loc>` entries (e.g. `https://notepad.is/`). */
  trailingSlash: true,
};

export default nextConfig;
