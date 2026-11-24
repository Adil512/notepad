import fs from "node:fs";
import path from "node:path";

const OUT_DIR = path.resolve("out");
const BUILD_ID_SRC = path.resolve(".next/BUILD_ID");
const MAX_FREE_ASSETS = 20_000;

const TOOL_CATEGORY_FOLDERS = new Set([
  "data",
  "dev-tools",
  "documents",
  "editors",
  "excel",
  "format",
  "text",
  "writing",
]);

if (!fs.existsSync(OUT_DIR)) {
  console.error(`Error: export directory not found at ${OUT_DIR}`);
  process.exit(1);
}

// Persist Next.js BUILD_ID inside ./out so cloudflare-worker.ts can serve
// matching-buildId prefetch responses without importing generated TS files.
if (fs.existsSync(BUILD_ID_SRC)) {
  const buildId = fs.readFileSync(BUILD_ID_SRC, "utf8").trim();
  fs.writeFileSync(path.join(OUT_DIR, "_build_id.txt"), buildId, "utf8");
}

let removedSegmentEntries = 0;
let removedFlatToolDirs = 0;

function pruneSegmentArtifacts(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.")) {
      fs.rmSync(fullPath, { recursive: true, force: true });
      removedSegmentEntries++;
      continue;
    }
    if (entry.isDirectory()) {
      pruneSegmentArtifacts(fullPath);
    }
  }
}

function pruneRedirectedFlatToolDirs() {
  for (const localeEntry of fs.readdirSync(OUT_DIR, { withFileTypes: true })) {
    if (!localeEntry.isDirectory()) continue;
    const toolsDir = path.join(OUT_DIR, localeEntry.name, "tools");
    if (!fs.existsSync(toolsDir)) continue;
    for (const child of fs.readdirSync(toolsDir, { withFileTypes: true })) {
      if (!child.isDirectory()) continue;
      if (!TOOL_CATEGORY_FOLDERS.has(child.name)) {
        fs.rmSync(path.join(toolsDir, child.name), {
          recursive: true,
          force: true,
        });
        removedFlatToolDirs++;
      }
    }
  }
}

function countFiles(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) count += countFiles(fullPath);
    else count++;
  }
  return count;
}

pruneSegmentArtifacts(OUT_DIR);
pruneRedirectedFlatToolDirs();

const remainingFiles = countFiles(OUT_DIR);
console.log(
  `[prune-export] Removed ${removedSegmentEntries} segment-cache entries and ${removedFlatToolDirs} redirected flat tool dirs.`
);
console.log(`[prune-export] Final ./out/ asset file count: ${remainingFiles}`);

if (remainingFiles >= MAX_FREE_ASSETS) {
  console.error(
    `[prune-export] Error: ./out/ has ${remainingFiles} files, exceeding Cloudflare Free limit (${MAX_FREE_ASSETS}).`
  );
  process.exit(1);
}
