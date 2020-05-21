import { longestWordInString } from './longestWordInString';

describe('longestWordInString', () => {
  it('return type should be string', () => {
    expect(typeof longestWordInString('Verifying the return type')).toBe(
      'string'
    );
  });

  it('Check if longest work is returned correctly', () => {
    expect(
      longestWordInString('My favorite cricket player is Sachin Tendulkar')
    ).toEqual('Tendulkar');
  });

  it('check if incorrect input is passed, then empty string is returned', () => {
    expect(longestWordInString(2)).toEqual('');
  });
});
