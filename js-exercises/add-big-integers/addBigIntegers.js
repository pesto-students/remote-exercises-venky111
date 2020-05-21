function addBigIntegers(intString) {
  const intStringArray = intString.split('\n');
  let sum = BigInt(0);
  for (const eachInt of intStringArray) {
    sum += BigInt(eachInt);
  }
  return sum.toString();
}

export { addBigIntegers };
