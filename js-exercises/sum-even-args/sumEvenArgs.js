const sumEvenArgs = (...args) => {
  let sum = 0;
  for (const element of args) {
    if (typeof element === 'number' && element % 2 === 0) sum += element;
  }
  return sum;
};

export { sumEvenArgs };
