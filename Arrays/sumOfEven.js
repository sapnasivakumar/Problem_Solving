
function sumOfEvenNumbers (array) {
    const sumOfEven = array
        .filter((element) => element % 2 ===0 )
        .reduce((acc, currentValue) => acc+currentValue, 0);

    console.log(sumOfEven);
    return sumOfEven;
}

module.exports = sumOfEvenNumbers;