import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
  it('should return a function', () => {
    expect(typeof flipArgs()).toBe('function');
  });
  it('should return a wrapped version of the original function that accepts reverse args', () => {
    const foo = (a, b) => a - b;
    const flipedArgsFunc = flipArgs(foo);
    expect(flipedArgsFunc(2, 3)).toBe(1);
    expect(flipedArgsFunc(3, 2)).toBe(-1);
  });
});
