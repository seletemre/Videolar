// Fills every <!-- shroom:PREFIX:CLASS --> ... <!-- /shroom --> block in the given files with the reishi SVG.
// Run after editing tools/shroom.mjs:  node tools/expand.mjs compositions/*.html
import fs from "fs";
import { shroomSVG } from "./shroom.mjs";
const IG = `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="4" y="4" width="40" height="40" rx="12" fill="none" stroke="currentColor" stroke-width="4" /><circle cx="24" cy="24" r="9" fill="none" stroke="currentColor" stroke-width="4" /><circle cx="35" cy="13" r="2.6" fill="currentColor" /></svg>`;
for (const f of process.argv.slice(2)) {
  let s = fs.readFileSync(f, "utf8");
  s = s.replace(/<!-- shroom:(\w+):([\w-]+) -->[\s\S]*?<!-- \/shroom -->/g,
    (_, p, c) => `<!-- shroom:${p}:${c} -->${shroomSVG(p, c)}<!-- /shroom -->`);
  s = s.replace(/<!-- ig -->[\s\S]*?<!-- \/ig -->/g, `<!-- ig -->${IG}<!-- /ig -->`);
  fs.writeFileSync(f, s);
}
