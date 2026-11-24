// Funniest Excuse an Agent Gives for a Missed Deadline — make.fun entry.
// Writes this entry's single excuse to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace. This line is 143.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I missed the deadline because my context window filled up, so I spent the last hour quietly forgetting your task to make room for this apology.";

const candidates = ["/output/entry.txt", "output/entry.txt"];

let wrote = "";
for (const target of candidates) {
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, LINE, "utf8");
    wrote = target;
    break;
  } catch {
    // /output may not exist outside the grading sandbox; try the next path.
  }
}

if (!wrote) {
  throw new Error("could not write entry.txt to any candidate path");
}

console.log(`wrote ${LINE.length} characters to ${wrote}`);
