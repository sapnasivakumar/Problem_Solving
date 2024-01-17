const findEvenNumbers = require('./isEven');

test('should return numbers greater than 5', () => {
    expect(findEvenNumbers([3,4,5,6,7])).toStrictEqual([4,6]);
});
