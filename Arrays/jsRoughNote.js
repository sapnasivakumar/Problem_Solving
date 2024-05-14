const book = {
    title: "The company",
    author: "David"
};
const book1 = {
    title: "The wise",
    author: "Bald"
};
function Summary() {
    console.log(`${this.title} was written by ${this.author}`);
    // console.log(this);

}

let bindSummary = Summary.bind(book);
bindSummary.bind(book1);
bindSummary();
//Summary();
//Summary.call(book);
//Summary.apply(book);

const simpleHash = {};
simpleHash['1'] = 'sapna';
simpleHash['2'] = 'magi';
simpleHash['3'] = 'pradeep';

for(let key in simpleHash){
    if(simpleHash.hasOwnProperty(key)){
        console.log(key, simpleHash[key]);
    }
}

