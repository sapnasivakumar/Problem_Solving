function summaryRanges(arr) {
    let prev = arr[0];
    let temp = [];
    for(let i =1; i< arr.length; i++){
        if(arr[i] === arr[i-1]+1){
            temp.push(arr[i-1]);
            if(i === arr.length-1){
                temp.push(arr[i]);
                console.log(`${temp[0]} -> ${temp[temp.length-1]}`);
            }
        } else if (arr[i] !== arr[i-1]+1){
            temp.push(arr[i-1]);
            if(temp.length === 1){
                console.log(temp[0]);
            } else {
                console.log(`${temp[0]} -> ${temp[temp.length-1]}`);
            }

            temp = [];
        }
    }

}

summaryRanges([0,2,3,4,6,8,9]);