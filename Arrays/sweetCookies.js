// function sweetCookies(k, cookies){
// 	let sortedCookies = cookies.sort((a,b) => a-b);
//   let lessSweetCookies = sortedCookies.filter(cookie => cookie < 7);
//   console.log(lessSweetCookies);
  
//   sortedCookies = sortedCookies.filter(cookie => cookie >7);
//   console.log(sortedCookies);
  
//   for (let i = 0; i<lessSweetCookies.length; i++){
// 		const sweetnessCheck = (lessSweetCookies[i] + 2*lessSweetCookies[i+1]);
//   	if( sweetnessCheck >=7) {
//     		sortedCookies.push(sweetnessCheck);
//         console.log("$$$", sortedCookies);
//     } else {
//     	lessSweetCookies.pop(lessSweetCookies[i]);
//       lessSweetCookies.pop(lessSweetCookies[i+1]);
//       //lessSweetCookies.push(sweetnessCheck);
//       console.log("####", lessSweetCookies);
//     }
//     i++;
//   }
	
// }

// sweetCookies(7, [1,2,3,9,10,12]);







function sweetCookies(k, cookies){
	let sortedCookies = cookies.sort((a,b) => a-b);
  let lessSweetCookies = sortedCookies.filter(cookie => cookie < k);
  console.log(lessSweetCookies);
  
  sortedCookies = sortedCookies.filter(cookie => cookie >k);
  console.log(sortedCookies);
  let j = 0;

  while(lessSweetCookies.length > 1){

		const sweetnessCheck = (lessSweetCookies.shift() + 2*lessSweetCookies.shift());
  	if( sweetnessCheck >=7) {
    		sortedCookies.push(sweetnessCheck);
            ++j;
        console.log("$$$", sortedCookies);
    } else {
      console.log("before", lessSweetCookies);
      lessSweetCookies.push(sweetnessCheck);
      console.log("####", lessSweetCookies);
      ++j;
    }
  }
  
  if(lessSweetCookies.length ===1 || cookies.length ===1){
    console.log("@@@@@", -1);
    return -1;
  } else {
    console.log("$$$$", j);
    return j;
  }

  
	
}

sweetCookies(9, [1, 62, 14]);


