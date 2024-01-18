const peopleInCity = require('./peopleInCity');

const input = [
    {
        "name": "Sapna",
        "age": 33,
        "city": "London"

    },
    {
        "name": "Pradeep",
        "age": 36,
        "city": "Berlin"
    },
    {
        "name": "Magi",
        "age": 20,
        "city": "London"
    }
];

test('should return numbers greater than 5', () => {
    expect(peopleInCity(input, "London")).toStrictEqual({
        averageAge: 26.5,
        names: ["Sapna", "Magi"]
    });
});
