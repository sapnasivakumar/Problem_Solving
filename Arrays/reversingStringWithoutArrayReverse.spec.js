const reverseString = require('./reversingStringWithoutArrayReverse');

test('should reverse given string without using default array.reverse', () => {
    expect(reverseString("Sapna")).toStrictEqual("anpaS");
});
