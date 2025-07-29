import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("mom")).toBe(true);
  });

  it("returns false for non-palindromes", () => {
    expect(isPalindrome("car")).toBe(false);
    expect(isPalindrome("hello")).toBe(false);
  });

  it("returns true for palindromes with mixed case", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
    expect(isPalindrome("MoM")).toBe(true);
  });

  it("returns false for empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws error for non-alphabetic characters", () => {
    expect(() => isPalindrome("race123car")).toThrow();
    expect(() => isPalindrome("mom!")).toThrow();
  });

  it("throws error for non-string input", () => {
    expect(() => isPalindrome(123)).toThrow();
    expect(() => isPalindrome(null)).toThrow();
    expect(() => isPalindrome(undefined)).toThrow();
  });
});