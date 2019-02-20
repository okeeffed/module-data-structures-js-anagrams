const lib = require('./strcmpSolution');
// const mocha = require('mocha');
const chai = require('chai');
const {expect} = chai;
describe('check lowercase of two strings are anagrams', function () {
    it('should handle basic anagram', function () {
        const res = lib.anagram('race car', 'racrace');
        expect(res)
            .to
            .equal(true);
    });

    it('should handle punctuation', function () {
        const res = lib.anagram('race car', 'RACE! CAR!');
        expect(res)
            .to
            .equal(true);
    });

    it('should handle non-anagrams with different lengths', function () {
        const res = lib.anagram('test', 'testa');
        expect(res)
            .to
            .equal(false);
    });

    it('should handle non-anagrams with same length', function () {
        const res = lib.anagram('tests', 'testa');
        expect(res)
            .to
            .equal(false);
    });

    it('should handle anagrams with varying char length', function () {
        const res = lib.anagram('rrracb', 'abcrrrr');
        expect(res)
            .to
            .equal(false);
    });
});