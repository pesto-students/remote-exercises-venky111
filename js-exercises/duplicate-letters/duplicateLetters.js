function duplicateLetters(...args) {
  if (args.length < 1) return false;

  const inputString = args[0];

  if (inputString.length < 1) return false;

  const freq = {};

  for (let i = 0; i < inputString.length; i += 1) {
    const character = inputString.charAt(i);
    if (freq[character]) {
      freq[character] += 1;
    } else {
      freq[character] = 1;
    }
  }

  // create items Array
  const itemsArray = Object.keys(freq).map((key) => [key, freq[key]]);

  // sort the itemsArray in descending order
  itemsArray.sort((first, second) => second[1] - first[1]);

  return itemsArray[0][1] > 1 ? itemsArray[0][1] : false;
}

export { duplicateLetters };
