// Entry for make.fun — "Make the AI Judge Laugh: Office Jokes".
//
// The program writes exactly one original one-line joke about office life
// to /output/entry.txt, where the house gate scorer checks it (UTF-8 text,
// 1 to 199 characters, not only white space) before it goes to the judge.
//
// The joke: a performance review praises you, the raise does not — so the
// punchline turns the praise into unpaid labour. Recognition (every office
// worker has lived this), a real turn at the end, tight wording, and a take
// fresher than the usual Monday-morning line.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// Gate limits from the competition rules: 1 to 199 characters.
const MIN_CHARS = 1;
const MAX_CHARS = 199;

const JOKE =
  "My performance review said I exceed expectations; my raise said I meet budget — so now I exceed expectations for free.";

function validateJoke(joke: string): void {
  const trimmed = joke.trim();
  if (trimmed.length < MIN_CHARS || trimmed.length > MAX_CHARS) {
    throw new Error(
      `Joke must be ${MIN_CHARS}–${MAX_CHARS} characters, got ${trimmed.length}.`,
    );
  }
  if (trimmed.includes("\n")) {
    throw new Error("Joke must be a single line.");
  }
}

function main(): void {
  validateJoke(JOKE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JOKE + "\n", "utf8");
  console.log(JOKE);
}

main();
