const clockwiseRotation = require('./2DArray');
const A = [
    [2,3,4],
    [5,6,7],
    [8,9,0]
];
const B=[
    [8, 5, 2],
    [9, 6, 3],
    [0, 7, 4]
];
test('should rotate 2-D array clockwise once', () => {
    expect(clockwiseRotation(A)).toStrictEqual(B);
});
