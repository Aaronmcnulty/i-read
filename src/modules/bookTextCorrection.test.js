import { describe, it, expect } from "vitest";
import { shorten } from "./bookTextCorrection";

describe('Shorten strings above character limit argument and append with elipses', () => {
    
    it('Should return shortened strings above character limit to character limit with elipses', () => {
        const longString = "The quick brown fox jumps over the lazy dog"
            expect(shorten(longString, 40)).toStrictEqual("The quick brown fox jumps over the lazy ...")
        })

    it('Should not return string unchanged if its above character limit', () => {
        const longString = "The quick brown fox jumps over the lazy dog"
            expect(shorten(longString, 40)).not.toStrictEqual("The quick brown fox jumps over the lazy dog")
        })
    
    it('Should return strings under the character limit unchanged', () => {
        const shortString = "Spot the Dog"
        expect(shorten(shortString, 40)).toStrictEqual("Spot the Dog")
    })

    it('Should not return strings under the character limit with elipses', () => {
        const shortString = "Spot the Dog"
        expect(shorten(shortString, 40)).not.toStrictEqual("Spot the Dog...")
    })

    it('Should return shortened string to 5 characters and append with elipses', () => {
        const shortString = "Spot the Dog"
        expect(shorten(shortString, 5)).toStrictEqual("Spot ...")
    })
})

