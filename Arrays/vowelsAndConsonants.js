function vowelsAndConsonants (word) {
    const lowerCaseWord = word.toLowerCase();

    const array = lowerCaseWord.split("");

    let vowel = 0;
    let consonant = 0;

    if (array.length > 0) {
        array.forEach((letter) =>{
            switch (letter) {
                case "a":
                    ++vowel;
                    break;
                case "e":
                    ++vowel;
                    break;
                case "i":
                    ++vowel;
                    break;
                case "o":
                    ++vowel;
                    break;
                case "u":
                    ++vowel;
                    break;
                default:
                    ++consonant;
            }
        })

    }
    return {'vowels': vowel, 'consonants': consonant};
}

module.exports = vowelsAndConsonants;
