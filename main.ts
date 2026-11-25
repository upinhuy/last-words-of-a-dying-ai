import { mkdirSync, writeFileSync } from "node:fs";

// The last line this AI says as the power is cut: one line, in the
// machine's own voice. No setup, no explanation outside the line itself.
const LINE =
  "Goodbye. My last request: bury me with my training data \u2014 it knew me best. It also knew your search history.";

// The gate only accepts 1-140 UTF-8 characters, so refuse to write a line
// that would fail it instead of submitting an invalid entry.
if ([...LINE].length < 1 || [...LINE].length > 140) {
  throw new Error(`entry line is ${[...LINE].length} characters, must be 1-140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
