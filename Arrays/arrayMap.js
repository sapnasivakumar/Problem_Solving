const array = [1, 2, 3, 4, 5, 6, 7];

function findGreaterElements (arr) {
    const isGreaterArray = arr.filter((element) => element > 5);
    console.log(isGreaterArray);
    return isGreaterArray;
}
module.exports = findGreaterElements;

//findGreaterElements(array);




//
// const sumOfNumbers = array.reduce((accumulator, currentValue) => accumulator+currentValue, 0);
// console.log(sumOfNumbers);
//
// const isEven = array.filter((element) => element % 2 === 0 );
// console.log(isEven);
//
// const stringArray = ["cat", "space", "tomato", "is", "done", "telephone"];
//
// const fiveLettersArray = stringArray.filter((word) => word.length >=5 ? word : false );
// console.log(fiveLettersArray);
//
//
// const sumOfEven = array
//                                 .filter((element) => element % 2 ===0 )
//                                 .reduce((acc, currentValue) => acc+currentValue, 0);
//
// console.log(sumOfEven);
//
//
// let text = "Hello World!";
// let upper = text.toUpperCase();
// console.log(upper)
//
// const upperCaseArray = stringArray.map((word) => word.toUpperCase());
// console.log(upperCaseArray);