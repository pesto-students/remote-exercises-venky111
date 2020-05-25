// It returns new difference array having duplicates also.
function diffArray(first, second) {
  return [
    ...first.filter((element) => !second.includes(element)),
    ...second.filter((element) => !first.includes(element)),
  ];
}

function diffArrayWithNoDuplicates(first, second) {
  const firstSet = new Set(first);
  const secondSet = new Set(second);

  return [
    ...first.filter((element) => !secondSet.has(element)),
    ...second.filter((element) => !firstSet.has(element)),
  ];

  // return _.xor(firstSet, secondSet);
}

export { diffArray, diffArrayWithNoDuplicates };
