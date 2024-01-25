

const A = [
    [2,3,4],
    [5,6,7],
    [8,9,0]
];


function clockwiseRotation (A) {
    let arr = [];
    let rows = 3;
    let col = 3;


    for( let i=0; i<rows; i++){
        arr[i] = [];
        let k = col-1;
        for(let j=0; j< col; j++){
            arr[i][j] = A[k][i];
            k--;
        }
    }
    return arr;

}

module.exports = clockwiseRotation;
