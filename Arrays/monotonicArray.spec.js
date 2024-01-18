const monotonicArray = require('./monotonicArray');

test('should return numbers greater than 5', () => {
    expect(monotonicArray([3,4,5,6,7])).toStrictEqual(true);
});
