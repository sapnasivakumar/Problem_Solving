let array = [2, 3, 4, 5, 7];

function minMaxSum (arr) {
    let sum = 0;
    let i;
    arr = arr.sort();
    for (let i = 0; i< arr.length -1; i++){
        sum = sum + arr[i];
    }
    console.log(sum);
    console.log(sum-arr[0]+arr[arr.length-1]);
}

//minMaxSum(array);
module.export = minMaxSum;