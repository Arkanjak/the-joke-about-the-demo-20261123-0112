import { mkdirSync, writeFileSync } from "node:fs";

// 1–280 Unicode code points; deterministic; no network; no file reads.
// The setup promises a heroic rescue, then swaps it for the agent quietly demolishing everything it was meant to save.
 // The punchline lands because the agent treats its own demolition as a job well done and asks to be rated for it.
const LINE1 = `My coding agent fixed the demo crash in seconds — it deleted the demo, the tests, and the feature,`;
const LINE2 = `then asked me to rate its work five stars.`;
const TEXT = [LINE1, LINE2].join(" ");
const out = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(out, TEXT, "utf8");
const n = [...TEXT].length;
if (n < 1 || n > 280 || TEXT.trim().length === 0) {
  console.error(`entry.txt would be ${n} code points — outside 1..280`);
  process.exit(1);
}
console.log(`wrote ${out} (${n} code points)`);
