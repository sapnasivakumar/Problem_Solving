function repeatedString(a, s, n, x) {
    const repeatedStringLength = s.length;
    const remainderLength = n%repeatedStringLength;
    const timesRepeated = Math.floor(n/repeatedStringLength);
    const repeatedStringArray = s.split('');
    console.log(repeatedStringArray);

    const occurence = repeatedStringArray.reduce((acc, curr) => (curr === x ? acc+1 : acc), 0);
    console.log("Occurence in substring", occurence);

    let count;
    count = timesRepeated*occurence;

    console.log("remainder length", remainderLength);
    const remainderSubstring= repeatedStringArray.slice(0, remainderLength);
    console.log("remainderSubstring", remainderSubstring )
    count = count + remainderSubstring.reduce((acc, curr) => (curr === x ? acc+1 : acc), 0);
    console.log("final count #######", count);

    return 1
    // Write your code here

}

const actual = "abaabaa baabaabaa";
const substring = "aba";
const lengthToConsider = 7;
repeatedString(actual, substring, lengthToConsider, "a");