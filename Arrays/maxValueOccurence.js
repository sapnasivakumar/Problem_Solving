let array = [2, 3, 4, 5, 7, 3, 5, 6, 7, 7];

function maxValueOccurence (arr, maxValue) {
    const occurence = arr.reduce((a, curr) => (curr === maxValue ? a + 1 : a),	0);
    console.log("%%%%%", occurence);
    return occurence;

}

maxValueOccurence(array, Math.max(...array));

