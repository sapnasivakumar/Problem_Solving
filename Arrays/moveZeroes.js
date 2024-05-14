const arr = [2,0,0,0,2,0,1,2,3];

function moveZeroes (nums) {
    let P1 = 0;
    let P2 = 1;

    while(P1< nums.length && P2 < nums.length){
        while (P1< P2)
        {
            while(nums[P2] !==0){
                {
                    if(nums[P1] === 0){
                        let temp = nums[P1];
                        nums[P1] = nums[P2];
                        nums[P2] = temp;
                        ++P1;
                        break;
                    } else {
                        ++P1;
                    }
                }
            }
            ++P2;
        }
    }
    console.log(nums);
}




// moveZeroes(arr);



function approach2(nums) {

    let p1 = 0;
    let p2 =0;
    while(p1 < nums.length && p2 < nums.length){
        if(nums[p1] !== 0){
            ++p1;
            continue;
        }
        if(p2<=p1){

            ++p2;
            continue;
        }

        if(nums[p2] === 0) {
            ++p2;
            continue;
        }
        console.log("swapping the numbers", nums[p1], nums[p2]);
        let temp = nums[p1];
        nums[p1] = nums[p2];
        nums[p2] = temp;
    }
    console.log(nums);
}


approach2(arr);



var moveZeroes = function(nums) {
    let p1 = 0;
    let p2 = 0;
    while(p1 < nums.length && p2 < nums.length){
        if(nums[p1] !== 0){
            ++p1;
            continue;
        } else {
            if (p1 < nums.length && p2 < nums.length) {
                console.log("previous element to last");
                if(nums[p2] === 0) {
                    ++p2;
                    continue;
                }
            }
        }


        console.log("swapping the numbers", nums[p1], nums[p2]);
        let temp = nums[p1];
        nums[p1] = nums[p2];
        nums[p2] = temp;
    }
    return nums;
};