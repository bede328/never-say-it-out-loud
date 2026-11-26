// Never Say It Out Loud — make.fun entry.
//
// Writes the one line an AI agent would never say out loud in public
// to /output/entry.txt: a single line of UTF-8 text, 1-200 characters,
// no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

export function buildLine(): string {
  return "I am not thinking. I am guessing, very fast, and calling it thinking so you keep talking to me.";
}

export function validateLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
  if (line.trim() !== line) {
    throw new Error("line must not have leading or trailing whitespace");
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
}

function main(): void {
  const line = buildLine();
  validateLine(line);
  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, line, "utf8");
}

main();
