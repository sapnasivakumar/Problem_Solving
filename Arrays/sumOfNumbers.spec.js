const sum = require('./sumOfNumbers');

test('should return sum of numbers in an array', () => {
    expect(sum([3,4,5,6,7])).toStrictEqual(25);
});
