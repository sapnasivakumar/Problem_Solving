const lengthOfLastWord = require('./lengthOfLastWord');

test('should return numbers greater than 5', () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toStrictEqual(4);
});
