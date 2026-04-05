import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Notepad.is | Online notepad & writing tools",
    short_name: "Notepad.is",
    description:
      "Fast, local-first notepad and writing utilities in your browser.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#7c3aed",
    orientation: "any",
    categories: ["productivity", "utilities"],
  };
}
