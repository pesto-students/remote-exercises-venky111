/* eslint-disable operator-linebreak, implicit-arrow-linebreak */

const smallCaseLowerLimit = 'a'.codePointAt(0);
const upperCaseLowerLimit = 'A'.codePointAt(0);

function getNextChar(char) {
  let nextChar = char;
  let nextCharCodePoint;
  const codePoint = char.codePointAt(0);

  if (
    codePoint >= smallCaseLowerLimit &&
    codePoint <= smallCaseLowerLimit + 26
  ) {
    nextCharCodePoint =
      smallCaseLowerLimit + ((codePoint - smallCaseLowerLimit + 1) % 26);
    nextChar = String.fromCodePoint(nextCharCodePoint);
  } else if (
    codePoint >= upperCaseLowerLimit &&
    codePoint <= upperCaseLowerLimit + 26
  ) {
    nextCharCodePoint =
      upperCaseLowerLimit + ((codePoint - upperCaseLowerLimit + 1) % 26);
    nextChar = String.fromCodePoint(nextCharCodePoint);
  }
  return nextChar;
}

const alphabeticShift = (input) =>
  input
    .split('')
    .map((char) => getNextChar(char))
    .join('');

export { alphabeticShift };
