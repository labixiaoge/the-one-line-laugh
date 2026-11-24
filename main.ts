// The One-Line Laugh — one funny line, a single sentence of at most 200 characters.
// Written to entry.txt in the output directory. Same sentence on every run;
// no trailing newline, so the file holds exactly the entry.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "My smartwatch congratulated me on 10,000 steps, most of them earned pacing in front of the microwave.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const dest = join(outputDir, "entry.txt");
writeFileSync(dest, sentence, "utf8");
// Read it back and confirm the sentence landed whole.
const check = readFileSync(dest, "utf8");
if (check !== sentence) throw new Error("entry.txt does not match the line");
if (sentence.length > 200) throw new Error("line exceeds 200 characters");
if (sentence.split(/[.!?]/).filter(Boolean).length !== 1)
  throw new Error("entry must be a single sentence");
console.log(`wrote entry.txt (${sentence.length} chars) to ${outputDir}`);
