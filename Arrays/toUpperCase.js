
function convertCasing (stringArray) {
    const upperCaseArray = stringArray.map((word) => word.toUpperCase());
    console.log(upperCaseArray);
    return upperCaseArray;
}
module.exports = convertCasing;