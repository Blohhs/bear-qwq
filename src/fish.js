export function spawnFish(count) {
  const fishes = [];
  
  for (let i = 0; i < count; i++) {
    const fishPromise = new Promise((resolve, reject) => {
      const delay = getRandomDelay();
      
      setTimeout(() => {
        if (shouldCatch()) {
          resolve(`Поймал ${getRandomFishType()}!`);
        } else {
          reject(`Упс, ${getRandomFishType()} уплыла...`);
        }
      }, delay);
    });
    
    fishes.push(fishPromise);
  }
  
  return fishes;
}

function getRandomDelay() {
  return Math.floor(Math.random() * 4000) + 1000;
}

function shouldCatch() {
  return Math.random() < 0.7;
}

function getRandomFishType() {
  const fishTypes = ['карп', 'щука', 'окунь', 'лещ', 'сом'];
  return fishTypes[Math.floor(Math.random() * fishTypes.length)];
}