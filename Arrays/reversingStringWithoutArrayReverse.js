function reverseString (word) {
    const array = word.split('');
    console.log(array);

    let length = array.length;
    console.log(length);
    if(length > 0){
        let start_position = length-1;
        let result = [];

        array.forEach((letter) => {
            result[start_position] = letter;
            start_position--;
        });

        return result.join('');
    }
}

module.exports = reverseString;

/* const result = array.map((letter) => {
  result[k] = letter;
  --k;
})
 */

//	result.splice(start_position,0,letter);
