const nums = [6,5,4,4];
const nums1 = [1,2,2,3];
const nums2 = [1,4,3,8,2];

function monotonicArray (arr) {
    let result;
    if(arr[0] > arr[1]){
        //monotonic decreasing
        arr.reduce(
            (prev, current) => {
                result = prev >= current ? current : false;
                return result;

            }
        );
        console.log("###", result);

    } else {
        arr.reduce(
            (prev, current) => {
                console.log("prev", prev);
                console.log("curr", current);
                result = prev <= current ? current : false;
                return result;
            }
        );

        console.log("@@@", result);
        //monotonic increasing
    }

    if(Number.isInteger(result)){
        console.log("true")
        return true;
    } else {
        console.log("result", result);
        return result;
    }

}

module.exports = monotonicArray;