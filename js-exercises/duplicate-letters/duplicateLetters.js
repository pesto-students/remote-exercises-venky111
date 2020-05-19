function duplicateLetters(inputString) {
  if (typeof inputString !== 'string') return false;
  const chars = inputString.split('');
  const freq = {};

  if (chars.length < 1) return false;

  chars.forEach((char) => {
    if (freq[char]) {
      freq[char] += 1;
    } else {
      freq[char] = 1;
    }
  });

  // create items Array
  const itemsArray = Object.keys(freq).map((key) => [key, freq[key]]);

  // sort the itemsArray in descending order
  itemsArray.sort((first, second) => second[1] - first[1]);

  return itemsArray[0][1] > 1 ? itemsArray[0][1] : false;
}

export { duplicateLetters };
