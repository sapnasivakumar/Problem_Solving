/* 

function total(nums, k) {

  let count = 0;
  const sortedArray = nums.sort((a,b) => a-b);
  
  console.log(sortedArray);
  
  for( let i =0; i< sortedArray.length; i++){
    count = count+sortedArray[i];
    if(count > k){
      console.log("result", i);
      return i;
    }
    
  }
}

total([1,12,5,10,111,200,1000], 50);

let numStr = "42";
let num = +numStr; // '+' operator triggers type coercion.
console.log(num);
 */
/* 
function outerFunc() {
  let outerVar = 'I am outside!';
  function innerFunc() {
    console.log(outerVar); 
  }
  const result = innerFunc;
 // console.log(result);
 console.log(`result is ${outerVar}`);
  return innerFunc;
}
let inner = outerFunc();
console.log(inner);
inner(); // Output: I am outside!


 */