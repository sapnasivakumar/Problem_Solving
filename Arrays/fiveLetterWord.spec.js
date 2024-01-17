const fiveLetterWords = require('./fiveLetterWord');

test('should return numbers greater than 5', () => {
    expect(fiveLetterWords(['cat', 'sapna'])).toStrictEqual(['sapna']);
});
