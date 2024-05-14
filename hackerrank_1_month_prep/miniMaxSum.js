const array = [1, 3, 5, 7, 9];

function miniMaxSum(arr){
    const sortedArray = arr.sort();
    let min =0;
    let max = 0;
    for (let i =0; i<= arr.length -2; i++){
        min = min+sortedArray[i];
    }
    for (let j = arr.length-1; j>=1; j--){
        max = max+sortedArray[j];
    }
    console.log("$$$$min", min);
    console.log("@@@@max", max);
}

miniMaxSum(array);
// change with reduce
// think of a singe iteration solution

