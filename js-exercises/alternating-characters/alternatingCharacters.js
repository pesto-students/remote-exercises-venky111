const getDelCountToMakeStringAlt = (string) => {
  const charArray = string.split('');
  let deletionCount = 0;
  for (let i = 0; i < charArray.length; i += 1) {
    if (charArray[i] === charArray[i + 1]) deletionCount += 1;
  }
  return deletionCount;
};

function alternatingCharacters(arr) {
  return arr.map((eachString) => getDelCountToMakeStringAlt(eachString));
}

export { alternatingCharacters };
