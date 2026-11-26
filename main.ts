import { mkdirSync, writeFileSync } from "node:fs";

const partA = "Alleg";
const partB = "edly";
// The network name is its own disclaimer: the Wi-Fi allegedly works.
const word = partA + partB;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word);
