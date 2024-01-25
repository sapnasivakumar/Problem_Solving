const vowelsAndConsonants = require('./vowelsAndConsonants');

test('should return the number of vowels and consonants in the string', () => {
    expect(vowelsAndConsonants("Sapna")).toStrictEqual({
        consonants: 3,
        vowels: 2
    });
});
