const arr = [4,2,1,1,2];
const extra = 1;

const maximum = Math.max(...arr);
console.log(maximum);
let i = 0;
let result = arr.map((value) => {
    if((value + extra) >= maximum){
        return true;
    }
    else {
        return false;
    }
});

console.log(result);