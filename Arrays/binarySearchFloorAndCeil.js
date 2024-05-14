const array = [1,4,7,9,12];

const number = 3;

let start_index = 0;
let n = array.length;

function recursiveSearch(arr,start, last, number){
    if(start > last){
        return false;
    }
    let mid = start + Math.floor((last - start) / 2);
    if(arr[mid] === number){
        return mid;
    }
    if(arr[mid] > number){
        return recursiveSearch(arr, start, mid-1, number);
    }
    if(arr[mid] < number){
        return recursiveSearch(arr, mid+1, last, number);
    }
};

let result = recursiveSearch(array, start_index, n-1, number);
console.log(result);




const array = [1,4,7,9,12];

const x = 3;

let start_index = 0;
let n = array.length;

function traversal(arr, number){
    let start = 0;
    let last = arr.length-1;
    let mid;
    while( last >= start){
        mid = start + Math.floor((last-start)/2);
        console.log("^^^", mid);

        if(arr[mid] === number){
            return mid;
        }
        if(arr[mid] > number){
            last = mid-1;
        } else {
            start = mid+1;
        }
    }
    return -1;
}

let result = traversal(array, x);
console.log("###", result);


