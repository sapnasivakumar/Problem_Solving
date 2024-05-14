function countingSort(arr) {

    let result = Array(100).fill(0);
    let resultIndex;
    for(let i = 0; i<arr.length; i++){
        resultIndex = arr[i];
        //console.log(resultIndex);
        // console.log(result[4]);
        result[resultIndex] = result[resultIndex] +1;
    }
    return result;

    // Write your code here

}