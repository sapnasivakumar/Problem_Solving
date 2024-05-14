/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {


    let firstSum = nums.slice(0, k).reduce((acc, curr) => acc+curr, 0);
    console.log("first Sum $$$", firstSum);
    let result;
    let firstAvg = firstSum/k;
    result = firstAvg;
    let sum, average;

    let j = k;



    for(let i = 0; i< nums.length - k; i++){
        sum = firstSum -nums[i] +nums[j];
        average = sum / k;
        if(average > result)
        {
            result= average;
        }
        ++j;
        firstSum = sum;
        firstAvg = average;
    }
    return result;
};