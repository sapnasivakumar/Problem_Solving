function minimumCost(k, c){
	const sortedCostArray = c.sort((a,b) => a-b);
  const length = sortedCostArray.length
  let newCost;
	
 // let cost = sortedCostArray.slice(length-k, length).reduce((acc, curr) => acc+curr, 0);
  //console.log("###", cost);
	let i = 0;
 /*  cost = sortedCostArray.slice(0, length-k).reduce((acc, curr) => acc+(i+1) * curr, cost);
  console.log("2 iteration", cost);
  ++i; */
	let l = 0;
  let cost = 0;
  for(let j = length-1 ; j>=0; j-- ){
    
    cost = cost + (i+1)*sortedCostArray[j];
    ++l;
    console.log("cost  %%%%", cost, i, l);
    if(l===k){
    	++i;
      l=0;
     }
  	console.log(j);
		//cost = sortedCostArray.slice(j-k, j).reduce((acc, curr) => acc+(i+1) * curr, cost);
    
    
    //console.log("***", newCost);
    //++i;
  }
  console.log("for loop", cost);
 
	
}

minimumCost(3, [1,2,3,4,5,6,7,8,9]);