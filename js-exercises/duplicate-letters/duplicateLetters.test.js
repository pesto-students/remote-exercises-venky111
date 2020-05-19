import { duplicateLetters } from "./duplicateLetters";

describe("2 Largest duplicate count", () => {
  test("should get the correct number of duplicates", () => {
    expect(duplicateLetters("qwertyuiopasdfghjkl")).toBe(false);
    expect(duplicateLetters("asdfghjklqwerftyuiop")).toBe(2);
    expect(duplicateLetters("asyfghjklqyerftyuiop")).toBe(3);
    expect(duplicateLetters("psyfpghjklqerftyupiop")).toBe(4);
    // test if input string is empty and also if any parameter is passed
    expect(duplicateLetters("")).toBe(false);
    expect(duplicateLetters()).toBe(false);
  });
});
