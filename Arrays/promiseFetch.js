
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


//setTimeout(fetchDataAndUpdate, 2000);

function postingAfterGet(result) {
    const postPromise = postData(result);
    postPromise.then((postInfo)=> {
        console.log("Post data using the result of getdata", postInfo);
    })
    .catch((error) => {
        console.log("Error in posting data", error);
        postingAfterGet(result);
    })
} 

function fetchDataAndUpdateInIntervals() {
    const promise = getData();
    promise.then((result) => {
        console.log("Result from setInterval @@@", result);
        postingAfterGet(result);
    })
    .catch((error) => {
        console.log("Error is getData", error);
        fetchDataAndUpdateInIntervals();
    })

}

//fetchDataAndUpdateInIntervals();
//setInterval(fetchDataAndUpdateInIntervals, 3000);







const fetchbookListPromise = (searchString) => {
    const url = "https://openlibrary.org/search.json?q="+searchString+"&limit=6";
    try {
        const booklistPromise = fetch(url);
        booklistPromise.then(response => response.json())
            .then((data) => {
                const list = data.docs.map((book) => {
                    return {
                        title: book.title,
                        publish_year: book.publish_year,
                        ebook_access: book.ebook_access,
                        author_name: book.author_name
                    }
                });
                console.log("Printing the result from promise.then", list);
                // console.log(data);
              });
           
    } catch(error){
        console.log("Throwing the error");
    }
    console.log("Complettion of execution");

    

}; 


const fetchBookList = async (searchString) => {
    const url = "https://openlibrary.org/search.json?q="+searchString+"&limit=6";
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw Error(response.status+' '+response.statusText);
        }
        const json = await response.json();
        const books = json.docs.map((book) => {
            return {
                title: book.title,
                publish_year: book.publish_year,
                ebook_access: book.ebook_access,
                author_name: book.author_name
            }
        } );
        // console.log("%%%%%%", books);
        return books;
       
    }catch(error){
        // console.log("error in fetching the booklist", error);
        return error;

    }
    console.log("Complettion of execution");
};



function fetchDataAndUpdate() {
// fetch the data and perform updateion operations 
   const promise = fetchBookList("Sapna");
   const result = promise.then((data) => {
    console.log("result from settimeout", data);

   })
//    console.log("outside the then");
    // update the next service

    setTimeout(fetchDataAndUpdate, 2000);
}

fetchBookList("Sapna").then(() => {
    console.log("called fetchBooklist");
    return true;
}).then((data) => {
    console.log("second then", data)
})
///const result = fetchBookList("Sapna");
//console.log("$$$$$$$$$", result);
//console.log("Execution after async");

//fetchbookListPromise("Sapna")

//fetchDataAndUpdate();
