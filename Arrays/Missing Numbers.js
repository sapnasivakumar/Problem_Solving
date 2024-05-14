const myMap1 = new Map();
const myMap2 = new Map();



const arr1 = [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12];
const arr2 = [11, 4, 11, 7, 13, 4, 12, 11, 10, 14];
let result = [];
let i = 0;
arr2.forEach(
	(ele) => {
  	if(myMap2.has(ele)){
    	console.log("ele", myMap2.get(ele));
      let value = myMap2.get(ele);
      myMap2.set(ele, value+1);
      
    } else {
    	myMap2.set(ele, 1)
    }
  }
);


arr1.forEach(
	(ele) => {
  	if(myMap1.has(ele)){
    	console.log("ele", myMap1.get(ele));
      let val = myMap1.get(ele);
      myMap1.set(ele, val+1);
      
    } else {
    	myMap1.set(ele, 1)
    }
  }
);

console.log("arr1 to map1", [...myMap1.entries()]);
console.log("arr2 to map2", [...myMap2.entries()]);

arr1.forEach(
	(ele1) => {
  		if(!myMap2.has(ele1)){
      	result.push(ele1);
      } else if( myMap1.get(ele1) !== myMap2.get(ele1)) {
      	if(!result.includes(ele1)){
					result.push(ele1);        
        }

      }
		}
);

console.log(result.sort( (a,b) => a-b));