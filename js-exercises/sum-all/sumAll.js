function calculateSum(num1, num2) {
  return Math.floor(((num2 - num1 + 1) * (num2 + num1)) / 2);
}
function sumAll(inputArray) {
  const [num1, num2] = inputArray;
  if (num1 > num2) return calculateSum(num2, num1);
  return calculateSum(num1, num2);
}
export { sumAll };
