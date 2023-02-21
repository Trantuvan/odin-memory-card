function shuffle<T>(arr: T[]): T[] {
  const cloneArray = arr.slice(0);
  let currentIndex: number = arr.length;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // *using array destructing to swap indexRandom with indexCurrent
    // * cloneArray[currentIndex] = cloneArray[randomIndex]
    [cloneArray[currentIndex], cloneArray[randomIndex]] = [cloneArray[randomIndex], cloneArray[currentIndex]];
  }

  return cloneArray;
}

export default shuffle;
