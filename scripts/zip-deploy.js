#!/usr/bin/env node
/**
 * Creates moaiveg-deploy.zip from dist/ for Hostinger upload.
 * Upload the zip to public_html, extract in place, delete the zip.
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const zipPath = path.join(root, "moaiveg-deploy.zip");

if (!fs.existsSync(dist)) {
  console.error("Run npm run build first.");
  process.exit(1);
}

const required = ["index.html", ".htaccess", "assets"];
const missing = required.filter((f) => !fs.existsSync(path.join(dist, f)));
if (missing.length) {
  console.error("Missing from dist:", missing.join(", "));
  process.exit(1);
}

const assetsDir = path.join(dist, "assets");
const jsFiles = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".js"));
const cssFiles = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".css"));
if (!jsFiles.length || !cssFiles.length) {
  console.error("dist/assets must contain built JS and CSS bundles.");
  process.exit(1);
}

const requiredDirs = ["food", "ambinace", "banners", "post", "favicon_io", "lovable-uploads", "theflauxmedia"];
const missingDirs = requiredDirs.filter((d) => !fs.existsSync(path.join(dist, d)));
if (missingDirs.length) {
  console.error("Missing asset folders in dist:", missingDirs.join(", "));
  process.exit(1);
}

if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

execSync(`cd "${dist}" && zip -r "${zipPath}" . -x "*.DS_Store"`, { stdio: "inherit" });

const zipSize = (fs.statSync(zipPath).size / 1024 / 1024).toFixed(1);
const fileCount = fs
  .readdirSync(dist, { recursive: true })
  .filter((f) => !String(f).includes(".DS_Store")).length;

console.log("\n✅ Created:", zipPath, `(${zipSize} MB, ${fileCount} files)`);
console.log("\nHostinger steps:");
console.log("  1. File Manager → public_html");
console.log("  2. Delete OLD site files (or move to a backup folder)");
console.log("  3. Upload moaiveg-deploy.zip");
console.log("  4. Right-click zip → Extract (extract HERE, into public_html)");
console.log("  5. Confirm assets/ folder exists with JS + CSS inside");
console.log("  6. Confirm folders: food/, ambinace/, lovable-uploads/, theflauxmedia/");
console.log("  7. Confirm .htaccess exists (enable “Show hidden files”)");
console.log("  8. Delete the zip file");
console.log("  9. Clear Hostinger cache + hard-refresh browser (Ctrl+Shift+R)");
