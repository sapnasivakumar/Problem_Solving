function fiveLetterWords (stringArray) {
    const fiveLettersArray = stringArray.filter((word) => word.length >=5 ? word : false );
    console.log(fiveLettersArray);
    return fiveLettersArray;

}

module.exports = fiveLetterWords;

