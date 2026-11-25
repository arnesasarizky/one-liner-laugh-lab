import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The excuse a robot vacuum gives after eating a sock: it was not a
// malfunction, it was hunger. Nobody in this house feeds it on purpose,
// so a lone sock on the floor looked like the only meal on offer.
// The excuse is assembled from its three beats — the abandoned sock,
// the deadpan "frankly", and the confession that nobody feeds it —
// joined with spaces so the line reads as one flat, unbothered plea.
const ENTRY_PARTS = [
  "The sock was on the floor, unattended,",
  "and frankly nobody in this house",
  "has ever fed me on purpose.",
];

const ENTRY_TEXT = ENTRY_PARTS.join(" ");

const OUTPUT_PATH = "/output/entry.txt";
const CHARACTER_LIMIT = 200;

function checkEntry(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("Entry must not be blank.");
  }
  if (text.length > CHARACTER_LIMIT) {
    throw new Error(
      `Entry is ${text.length} characters, over the ${CHARACTER_LIMIT}-character limit.`,
    );
  }
}

function writeEntry(): void {
  checkEntry(ENTRY_TEXT);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY_TEXT, { encoding: "utf8" });
}

writeEntry();
