import { describe, it, expect } from "vitest";
import { capitalise, shorten } from "./bookTextCorrection";

describe("capitalise function", () => {
  it('Should return the string with all words in "title case"', () => {
    const bookTitle = "Big Book Title";
    expect(capitalise(bookTitle)).toStrictEqual("Big Book Title");
  });

  it('Should return a string with lower case words in "title case"', () => {
    const bookTitle = "big book title";
    expect(capitalise(bookTitle)).toStrictEqual("Big Book Title");
  });

  it("Should NOT return the string with all words in lowercase", () => {
    const bookTitle = "Big Book Title";
    expect(capitalise(bookTitle)).not.toStrictEqual("big book title");
  });

  it("Should return words found in the littleWords array in lowercase", () => {
    const bookTitle = "Title Of A In The";
    expect(capitalise(bookTitle)).toStrictEqual("Title of a in the");
  });

  it("Should return words found in the littleWords array in lowercase unless its the first word", () => {
    const bookTitle = "The Of A In The";
    expect(capitalise(bookTitle)).toStrictEqual("The of a in the");
  });

  it("Should change all caps words to title case and minor words to lowercase", () => {
    const bookTitle = "THE BIG BOOK OF THINGS IN A BAG";
    expect(capitalise(bookTitle)).toStrictEqual(
      "The Big Book of Things in a Bag",
    );
  });
});

describe("shorten function", () => {
  it("Should return shortened strings above character limit to character limit with elipses", () => {
    const longString = "The quick brown fox jumps over the lazy dog";
    expect(shorten(longString, 40)).toStrictEqual(
      "The quick brown fox jumps over the lazy ...",
    );
  });

  it("Should not return string unchanged if its above character limit", () => {
    const longString = "The quick brown fox jumps over the lazy dog";
    expect(shorten(longString, 40)).not.toStrictEqual(
      "The quick brown fox jumps over the lazy dog",
    );
  });

  it("Should return strings under the character limit unchanged", () => {
    const shortString = "Spot the Dog";
    expect(shorten(shortString, 40)).toStrictEqual("Spot the Dog");
  });

  it("Should not return strings under the character limit with elipses", () => {
    const shortString = "Spot the Dog";
    expect(shorten(shortString, 40)).not.toStrictEqual("Spot the Dog...");
  });

  it("Should return shortened string to 5 characters and append with elipses", () => {
    const shortString = "Spot the Dog";
    expect(shorten(shortString, 5)).toStrictEqual("Spot ...");
  });
});
