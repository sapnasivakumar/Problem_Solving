function findEvenNumbers (array) {
    const isEven = array.filter((element) => element % 2 === 0 );
    console.log(isEven);
    return isEven;
}

module.exports = findEvenNumbers;
