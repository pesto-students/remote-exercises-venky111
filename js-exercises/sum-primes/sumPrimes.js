function checkPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

function sumPrimes(num) {
  if (num < 2) return 0;
  let sum = 0;
  for (let i = 2; i <= num; i += 1) {
    if (checkPrime(i)) sum += i;
  }
  return sum;
}

export { sumPrimes };
