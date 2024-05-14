
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
    const data = getData();
    data.then((data) => {
        console.log("Resolved getData");
        //post data
        postDataAfterFetchWithRetry(data);
    }).catch((error) => {
        fetchDataAndUpdateInIntervals();
    })
}

function postDataAfterFetchWithRetry(data){
    const post = postData(data);
    post.then(() => {
        console.log("Resolved PostData succesfully");
    }).catch((error) => {
        postDataAfterFetchWithRetry(data);
    })
}
//fetchDataAndUpdateInIntervals();

setInterval(fetchDataAndUpdateInIntervals, 10000);