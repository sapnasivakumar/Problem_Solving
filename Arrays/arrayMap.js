const array = [1, 2, 3, 4, 5, 6, 7];

function findGreaterElements (arr) {
    const isGreaterArray = arr.filter((element) => element > 5);
    console.log(isGreaterArray);
    return isGreaterArray;
}
module.exports = findGreaterElements;