import { mkdirSync, writeFileSync } from "node:fs";

// One-word entry for the Wi-Fi competition (u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72).
// The word below is the whole entry: exactly one word, no trailing newline.
// Write only to /output/entry.txt — never to a relative path, so the program
// works in the grader's read-only sandbox.
const entry = "nearsighted";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
