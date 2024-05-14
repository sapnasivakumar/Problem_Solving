array1 = [1, 1, 0, -1, -1];
function plusminus(arr){

    let positive = 0;
    let negative = 0 ;
    let zero = 0;

    for (let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            ++zero;
        }else if(arr[i] <0){
            ++negative;
        }else if (arr[i] >0){
            ++positive;
        }
    }
    console.log(`positive ${(positive/arr.length).toFixed(6)} negative ${(negative/arr.length).toFixed(6)} zero ${(zero/arr.length).toFixed(6)}`);

}

plusminus(array1);