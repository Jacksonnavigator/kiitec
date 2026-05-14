/**
 * Downloads WordPress media from kiitec.ac.tz into public/images/legacy/
 * (preserves YYYY/MM/filename paths). Re-run anytime to refresh assets.
 *
 * Usage: node scripts/download-wp-media.mjs
 */
import { createWriteStream, existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "public", "images", "legacy");
const ORIGIN = "https://kiitec.ac.tz";
const API = `${ORIGIN}/wp-json/wp/v2/media`;

function relFromUploads(url) {
  const m = String(url).match(/\/wp-content\/uploads\/(.+)$/i);
  return m ? m[1].replace(/\/+$/, "") : null;
}

async function downloadFile(url, destPath) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  mkdirSync(dirname(destPath), { recursive: true });
  const body = res.body;
  if (!body) throw new Error("No body: " + url);
  await pipeline(Readable.fromWeb(body), createWriteStream(destPath));
}

async function fetchAllMedia() {
  const items = [];
  let page = 1;
  let totalPages = 1;
  while (page <= totalPages) {
    const url = `${API}?per_page=100&page=${page}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`API ${res.status}: ${url}`);
    const tp = res.headers.get("X-WP-TotalPages");
    if (tp) totalPages = Math.max(totalPages, parseInt(tp, 10) || 1);
    const batch = await res.json();
    if (!Array.isArray(batch) || batch.length === 0) break;
    items.push(...batch);
    console.error(`Page ${page}/${totalPages}: +${batch.length} (total ${items.length})`);
    page += 1;
  }
  return items;
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  const media = await fetchAllMedia();
  let ok = 0;
  let skip = 0;
  let fail = 0;

  for (const m of media) {
    if (m.media_type !== "image") continue;
    const src = m.source_url;
    const rel = m.media_details?.file || relFromUploads(src);
    if (!rel || !src) {
      fail += 1;
      continue;
    }
    const dest = join(OUT, rel.split("/").join("/"));
    if (existsSync(dest)) {
      skip += 1;
      continue;
    }
    try {
      await downloadFile(src, dest);
      ok += 1;
      if (ok % 25 === 0) console.error(`Downloaded ${ok}…`);
    } catch (e) {
      console.error("FAIL", rel, e.message);
      fail += 1;
    }
  }

  /** Paths referenced in code that may be intermediate sizes (not always separate REST rows). */
  const extraPaths = [
    "2023/06/cropped-KIITEC-LOGO-300x146.png",
    "2023/06/cropped-KIITEC-LOGO-2-32x32.png",
    "2023/06/cropped-KIITEC-LOGO-2-180x180.png",
    "2025/05/IMG_6384-1024x683.jpg",
    "2025/05/IMG_6384-1536x1024.jpg",
    "2024/08/IMG_6800-1024x683.jpg",
    "2025/05/DB-Kiitec-12-1024x684.jpg",
    "2025/05/DB-Kiitec-28-1024x684.jpg",
    "2025/05/DB-Kiitec-32-1024x684.jpg",
    "2025/05/DB-Kiitec-37-1024x684.jpg",
    "2025/05/DB-Kiitec-38-1024x684.jpg",
    "2025/05/new4-1024x683.jpg",
    "2025/05/new5-1024x683.jpg",
    "2025/05/Loc1-768x576.jpg",
    "2025/05/Loc2-768x576.jpg",
    "2025/09/MASTERCARD.png",
  ];

  for (const rel of extraPaths) {
    const dest = join(OUT, rel);
    if (existsSync(dest)) {
      skip += 1;
      continue;
    }
    const url = `${ORIGIN}/wp-content/uploads/${rel}`;
    try {
      await downloadFile(url, dest);
      ok += 1;
      console.error("extra OK", rel);
    } catch (e) {
      console.error("extra FAIL", rel, e.message);
      fail += 1;
    }
  }

  const pdfRel = "2026/03/SPONSORSHIP-APPLICATION-FORM-2026.pdf";
  const pdfDest = join(ROOT, "public", "documents", pdfRel);
  try {
    if (!existsSync(pdfDest)) {
      mkdirSync(dirname(pdfDest), { recursive: true });
      await downloadFile(`${ORIGIN}/wp-content/uploads/${pdfRel}`, pdfDest);
      console.error("PDF OK", pdfRel);
      ok += 1;
    }
  } catch (e) {
    console.error("PDF FAIL", e.message);
    fail += 1;
  }

  writeImageManifest();

  console.log(JSON.stringify({ downloaded: ok, skippedExisting: skip, failed: fail, out: OUT }, null, 2));
}

function writeImageManifest() {
  const urls = [];
  function walk(relDir) {
    const dir = join(OUT, relDir);
    if (!existsSync(dir)) return;
    for (const name of readdirSync(dir)) {
      if (name === "manifest.json") continue;
      const rel = relDir ? `${relDir}/${name}` : name;
      const full = join(dir, name);
      const st = statSync(full);
      if (st.isDirectory()) walk(rel);
      else if (/\.(jpe?g|png|gif|webp)$/i.test(name)) {
        urls.push(`/images/legacy/${rel.replace(/\\/g, "/")}`);
      }
    }
  }
  walk("");
  urls.sort();
  writeFileSync(join(OUT, "manifest.json"), JSON.stringify({ images: urls, generated: new Date().toISOString() }, null, 2));
  console.error(`Wrote manifest.json (${urls.length} images)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
