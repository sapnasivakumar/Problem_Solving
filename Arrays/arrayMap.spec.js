const findGreaterElements = require('./arrayMap');

    test('should return numbers greater than 5', () => {
        expect(findGreaterElements([3,4,5,6,7])).toStrictEqual([6,7]);
    });
