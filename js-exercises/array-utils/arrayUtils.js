/* eslint-disable no-bitwise */
/* eslint-disable object-curly-newline */

const forEach = function (array, callback, thisArg) {
  const len = array.length >>> 0;
  if (typeof callback !== 'function') {
    throw new TypeError();
  }
  for (let i = 0; i < len; i += 1) {
    if (i in array) {
      callback.call(thisArg, array[i], i, array);
    }
  }
};

const map = function (array, callback, thisArg) {
  const resultArray = [];
  const len = array.length >>> 0;
  if (typeof callback !== 'function') {
    throw new TypeError();
  }
  for (let i = 0; i < len; i += 1) {
    if (i in array) {
      resultArray.push(callback.call(thisArg, array[i], i, array));
    }
  }
  return resultArray;
};

const filter = function (array, callback, thisArg) {
  const resultArray = [];
  const len = array.length >>> 0;
  if (typeof callback !== 'function') {
    throw new TypeError();
  }
  for (let i = 0; i < len; i += 1) {
    if (i in array) {
      if (callback.call(thisArg, array[i], i, array)) {
        resultArray.push(array[i]);
      }
    }
  }
  return resultArray;
};

const reduce = (array, fn, initialValue) => {
  if (typeof fn !== 'function') throw new TypeError(`${fn} is not a function`);
  let accumulator = initialValue === undefined ? 0 : initialValue;
  for (let i = 0; i < array.length; i += 1) {
    accumulator = fn(accumulator, array[i], i, array);
  }
  return accumulator;
};

export { forEach, map, filter, reduce };
