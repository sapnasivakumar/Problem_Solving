
function getData() {
    
    const promise = new Promise((resolve, reject) => {
        console.log("new promise");
        resolve({data: "Sapna"});
        // reject("Error in fetching data");
    });
    return promise;
}

function postData(data) {
    
    const promise = new Promise((resolve, reject) => {
        console.log("new promise");
        resolve("Post Successful");
        // reject("Error in POST");
    });
    return promise;
}

function fetchDataAndUpdateInIntervals(){
    return getData();
}

function postDataAfterFetchWithRetry(data){
    return postData(data);
}
//fetchDataAndUpdateInIntervals();
function callingWithRetries(fn){  
    return fn().catch((error)=> {
        fn();
    })
}
const prunedRetry = () => callingWithRetries(getData).then((data)=> {callingWithRetries(()=> postData(data))});

//setInterval(prunedRetry, 10000);