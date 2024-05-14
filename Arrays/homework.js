const arr = [7, 15, 12, 3];
const sortedArray = arr.map((i) => i).sort((a, b) => a-b);
const descSortedArray = arr.map((i) => i).sort((a, b) => b-a);
console.log(sortedArray);
console.log(arr);
let count = 0;
let descCount = 0;
for(let i = 0; i<sortedArray.length; i++){
    console.log("for loop",i);
    if(arr[i] !== sortedArray[i]){
        ++count;
    }
    if(arr[i] !== descSortedArray[i]){
        ++descCount;
    }
};

console.log("$$$", count);
console.log("result", count-1, descCount-1);
