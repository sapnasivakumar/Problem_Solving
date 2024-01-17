const sumOfEvenNumbers = require('./sumOfEven');

test('should return sum of only even numbers from the array', () => {
    expect(sumOfEvenNumbers([3,4,5,6,7])).toStrictEqual(10);
});
