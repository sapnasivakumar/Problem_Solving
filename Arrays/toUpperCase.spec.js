const convertCasing = require('./toUpperCase');

test('should return numbers greater than 5', () => {
    expect(convertCasing(['helloworld'])).toStrictEqual(['HELLOWORLD']);
});
