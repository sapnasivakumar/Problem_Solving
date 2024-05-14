function findMedian(arr){
    console.log("Inside the find median", arr);
    arr.sort((a, b) => a-b);
    const middleIndex = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
    } else {
        return arr[middleIndex];
    }
}


function transactionAlert(expenditure, d){
    let count = 0;
    for(let i = d; i<expenditure.length; i++){
        console.log("traversal after d", expenditure[i]);
        let median = findMedian(expenditure.slice(i-d, i));
        console.log(median);
        if(expenditure[i] >= 2*median){
            console.log("Alert required : more spent");
            ++count;
        } else {
            console.log("NO Alert");
        }

    }
    console.log("$$$$$", count);
    return count;
}

//transactionAlert([2, 3, 4, 2, 3, 6, 8, 4, 5], 5);
//transactionAlert([10, 20, 30, 40, 50], 3);
transactionAlert([1, 2, 3, 4, 4], 4);
