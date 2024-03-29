const highestValueAndOccurence = require('./highestValue');

test('should return highest number in array with its number of occurence', () => {
    expect(highestValueAndOccurence([3,4,5,6,7,7])).toStrictEqual({ '7': 2 });
});

test('should return highest number in array with its number of occurence', () => {
    expect(highestValueAndOccurence([-6,-7,8,8,7])).toStrictEqual({ '8': 2 });
});

