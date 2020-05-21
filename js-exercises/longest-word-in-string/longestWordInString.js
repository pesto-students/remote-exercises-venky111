function longestWordInString(inputString) {
  let result = '';
  if (typeof inputString !== 'string') return result;

  result = inputString.split(' ').reduce((longestWord, currentWord) => {
    if (currentWord.length > longestWord.length) return currentWord;
    return longestWord;
  }, '');
  return result;
}

export { longestWordInString };
