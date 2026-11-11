// Checks that every source/resource URL in the curated encyclopedia responds.
// Usage: npm run check:sources
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = "src/adapters/curated/areas";
// Search pages are generated from a query, so they always exist.
const SKIP = [/^https:\/\/es\.khanacademy\.org\/search\?/, /^https:\/\/www\.youtube\.com\/results\?/];

function files(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? files(path) : path.endsWith(".ts") ? [path] : [];
  });
}

const urls = new Map();
for (const file of files(ROOT)) {
  for (const [url] of readFileSync(file, "utf8").matchAll(/https:\/\/[^"'\s`]+/g)) {
    if (!SKIP.some((re) => re.test(url))) urls.set(url, file);
  }
}

async function status(url) {
  const headers = { "user-agent": "easy-homework-source-check/1.0" };
  try {
    let res = await fetch(url, { method: "HEAD", redirect: "follow", headers });
    if (res.status === 405 || res.status === 403) res = await fetch(url, { redirect: "follow", headers });
    return res.status;
  } catch (error) {
    return `error: ${error.cause?.code ?? error.message}`;
  }
}

const broken = [];
for (const [url, file] of urls) {
  const code = await status(url);
  if (typeof code !== "number" || code >= 400) broken.push({ url, file, code });
}

console.log(`Checked ${urls.size} URLs, ${broken.length} broken.`);
for (const b of broken) console.log(`  ${b.code}  ${b.url}  (${b.file})`);
process.exit(broken.length > 0 ? 1 : 0);
