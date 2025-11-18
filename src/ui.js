export const FISH_TYPES = ['карп', 'щука', 'окунь', 'лещ', 'сом'];

export function printResults({ caught, escaped }) {
  console.log(`\n🐻 Итого: поймано ${caught}, уплыло ${escaped}`);
}

export function printCatch(fishType) {
  console.log(`🎣 ${fishType}`);
}

export function printEscape(fishType) {
  console.log(`💨 ${fishType}`);
}

export function printStart(difficulty) {
  console.log(`\n🐻 Медведь начинает рыбалку на ${difficulty} уровне!`);
}

export function printHunger() {
  console.log("\n🐻 Медведь очень голоден...");
}