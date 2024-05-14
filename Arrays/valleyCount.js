//const arr = ['D','D','U','U','D','D','U','U'];
const arr = ['D','U','D','U'];
let seaLevel = 0;
let valley = 0;
let mountain = 0;
for (i = 0; i<arr.length; i++){

    if(arr[i] === 'D' && seaLevel === 0) {
        ++valley;
    }
    if(arr[i] === 'U' && seaLevel === 0) {
        ++mountain;
    }

    if(arr[i] === 'D'){
        --seaLevel;
    }
    if(arr[i] === 'U'){
        ++seaLevel;
    }

}

console.log("$$$", valley);

