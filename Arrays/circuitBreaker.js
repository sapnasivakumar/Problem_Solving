function getInfo() {
    const promise = new Promise((resolve, reject) => {
        console.log("new promise created");
        // resolve({data: "Sapna"});
        reject("Error in getting Info");
    });
    return promise;
    
}

let countFailure = 0;
function circuitBreaker(x, y, api, attempt = 0){
    const operation = api();
    console.log("!!!!!!", x, y);
    
    // console.log("&&&&", countFailure);
    operation.then((result) => {
        console.log("Resolved Promise successfully", result);
        return result;
    })
    .catch((error) => {
        ++attempt;
        console.log("Error in resolving the promise", attempt);
        if(attempt < y){
           circuitBreaker(x, y, api, attempt);
        } else{

            console.log(`failed ${attempt} times`);
            
            // setInterval(circuitBreaker(x,y),  x);
            setTimeout(() => circuitBreaker(x, y, api, attempt), x);
            attempt = 0;
        }
        
        
    });

}

circuitBreaker(3000, 2, getInfo, 0);