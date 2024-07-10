function flowerbed(array, n){
    let startingValue = array[0];
    let result = 0;

    for( let i =1; i< array.length; i++){
        if(array[i] === Math.abs(startingValue -1 )){
            console.log("abs value", Math.abs(startingValue -1 ));
            startingValue = array[i];
            
        }else {
            result = result + 1;
        }
        
    }
    console.log("$$$$", result);
}

flowerbed([1,0,0,0,1], 1);