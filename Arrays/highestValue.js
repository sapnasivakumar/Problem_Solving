//const array = [2,3,4,5,6,5,6,6];
const array1 = [];

function highestValueAndOccurence (array) {
    let result = array.reduce((acc, curr) =>{
       acc[curr] = (acc[curr] || 0 ) + 1
       return acc;
    }, {})

    const maxValue = array.reduce(
        (prev, current) => {
            return prev > current ? prev : current
        }
    );
    const occurence = result[maxValue];
    return {[maxValue]: occurence};
}

module.exports = highestValueAndOccurence;