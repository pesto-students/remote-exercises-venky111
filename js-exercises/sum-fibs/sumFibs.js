function sumFibs(num) {
  if (num < 1) return 0;
  const fiboArray = [];
  fiboArray[0] = 1;
  fiboArray[1] = 1;
  let sum = fiboArray[0] + fiboArray[1];
  for (let i = 2; fiboArray[i - 1] <= num; i += 1) {
    fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
    if (fiboArray[i] % 2 !== 0 && fiboArray[i] <= num) sum += fiboArray[i];
  }
  return sum;
}

export { sumFibs };
