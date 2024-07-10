function lengthOfLastWord(s){
    let wordSplitArray = s.trim().split(' ');
    console.log(wordSplitArray);
    let output = wordSplitArray[wordSplitArray.length -1].length;
    console.log(output);

}

lengthOfLastWord('luffy is still joyboy');