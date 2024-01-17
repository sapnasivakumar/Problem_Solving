function sum (arr) {
    const sumOfNumbers = arr.reduce((accumulator, currentValue) => accumulator+currentValue, 0);
    console.log(sumOfNumbers);
    return sumOfNumbers;
}

module.exports = sum;