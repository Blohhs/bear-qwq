import { spawnFish } from './fish.js';
import { printResults, printCatch, printEscape, printStart, printHunger } from './ui.js';

export const DIFFICULTY = {
  EASY: { name: 'лёгкий', fish: 3 },
  MEDIUM: { name: 'средний', fish: 5 },
  HARD: { name: 'сложный', fish: 10 },
};

export async function catchFish(count) {
  const fishes = spawnFish(count);
  const results = await Promise.allSettled(fishes);
  
  let caught = 0;
  let escaped = 0;
  
  results.forEach(result => {
    if (result.status === 'fulfilled') {
      caught++;
    } else {
      escaped++;
    }
  });
  
  return { caught, escaped };
}

export async function startFishing(count) {
  printHunger();
  const result = await catchFish(count);
  printResults(result);
  return result;
}

export async function watchFishing(count) {
  printHunger();
  const fishes = spawnFish(count);
  
  let caught = 0;
  let escaped = 0;
  
  for (const fishPromise of fishes) {
    try {
      const result = await fishPromise;
      caught++;
      printCatch(result);
    } catch (error) {
      escaped++;
      printEscape(error);
    }
  }
  
  printResults({ caught, escaped });
  return { caught, escaped };
}

export function chooseDifficulty() {
  const args = process.argv.slice(2);
  const level = args[0]?.toUpperCase();
  
  if (level && DIFFICULTY[level]) {
    return DIFFICULTY[level];
  }
  return DIFFICULTY.MEDIUM;
}