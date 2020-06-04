// Write your own test cases.
import { filter, forEach, map, reduce } from './arrayUtils';

describe('forEach', () => {
  test('should call callback on every element of the array', () => {
    const mockCallback = jest.fn((x) => x + x);
    forEach([1, 2, 3, 4, 5, 6], mockCallback);
    expect(mockCallback.mock.calls.length).toBe(6);
  });

  test('should not call Callback on values not provided in sparse array', () => {
    const mockCallback = jest.fn((x) => x * x);
    forEach([1, 2, 3, , 5, 6], mockCallback);
    expect(mockCallback.mock.calls.length).toBe(5);
  });

  test('for each with thisArgs', () => {
    const mockCallback = jest.fn(function callback(x) {
      return x + this.name;
    });
    forEach([1, 2], mockCallback, { name: 'sachin' });
    expect(mockCallback.mock.calls.length).toBe(2);
  });
});

describe('map function', () => {
  test('should return new array with mapped values', () => {
    let array = [2, 4, [1, 3], 5];
    const callback = (ele, i) => {
      return ele * 2;
    };
    const expected = [4, 8, NaN, 10];
    expect(map(array, callback)).toEqual(expected);
  });
  test('map an array containing objects', () => {
    const callback = (value) => value.a + value.b;
    const expected = map(
      [
        { a: 1, b: 2 },
        { a: 3, b: 4 },
      ],
      callback
    );
    expect(expected).toStrictEqual([3, 7]);
  });
});

describe('Filter function', () => {
  test('should return filtered array', () => {
    const callback = (value) => 2 * value < 10;
    const expected = filter([1, 2, 3, 4, 5, 6], callback);
    expect(expected).toStrictEqual([1, 2, 3, 4]);
  });

  test('filter an array containing objects', () => {
    const callback = (value) => value.a + value.b > 5;
    const expected = filter(
      [
        { a: 1, b: 2 },
        { a: 3, b: 4 },
      ],
      callback
    );
    expect(expected).toStrictEqual([{ a: 3, b: 4 }]);
  });

  test('filter with thisArgs', () => {
    function callback(value) {
      return value * this.count > 40;
    }
    const expected = filter([1, 2], callback, { count: 30 });
    expect(expected).toStrictEqual([2]);
  });
});

describe('Reduce function', () => {
  test('should return accumulated sum', () => {
    const expected = reduce(
      [1, 2, 3],
      (accumulator, current) => accumulator + current,
      0
    );
    expect(expected).toBe(6);
  });
});
