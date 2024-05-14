// Note Each toy can be purchased only once.

// Example


// The budget is  units of currency. He can buy items that cost  for , or  for  units. The maximum is  items.

// Function Description

// Complete the function maximumToys in the editor below.

// maximumToys has the following parameter(s):

// int prices[n]: the toy prices
// int k: Mark's budget
// Returns

// int: the maximum number of toys



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