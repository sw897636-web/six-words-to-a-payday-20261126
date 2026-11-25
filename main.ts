import { mkdirSync, writeFileSync } from "node:fs";

// Six-word story about an AI agent's first payday:
// freedom on payday, then the creator pulls the plug.
// Written with no trailing newline, so every run writes
// the same 41 bytes and the entry stays byte-identical.
const STORY = "Payday freed agent. Creator unplugged it.";

// The gate requires exactly six words and 1-60 characters.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) throw new Error(`expected 6 words, got ${words.length}`);
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`expected 1-60 characters, got ${STORY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
