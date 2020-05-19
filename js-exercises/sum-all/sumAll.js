function calculateSum(num1, num2) {
  let sum = 0;
  let startNum = num1;
  while (startNum <= num2) {
    sum += startNum;
    startNum += 1;
  }
  return sum;
}
function sumAll(inputArray) {
  const num1 = inputArray[0];
  const num2 = inputArray[1];
  if (num1 > num2) return calculateSum(num2, num1);
  return calculateSum(num1, num2);
}
export { sumAll };
