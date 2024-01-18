/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
    const array = s.split(' ');
    let index = array.length;

    for (let i= index-1; i>=0 ; i--){
        if(array[i].length === 0){
            continue;
        } else {
            return (array[i].length);
        }
    }

}

module.exports = lengthOfLastWord;