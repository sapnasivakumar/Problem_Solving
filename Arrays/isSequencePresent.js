function isSequence(s, t) {
    let result = false;
    let temp = 0;
    let indexTemp = 0;
    let counter = 0;
    if(s.length === 0){
        return true;
    }

    for(let j=0; j<s.length; j++){
        for(let i=temp; i<t.length; i++ ){
            console.log("inside the nested for loop", t[i], s[j]);
            if(t[i] === s[j]){
                console.log("inside the if cond");
                console.log("printing i and temp", i, temp, indexTemp);
                temp = i+1;
                indexTemp = i;
                ++counter;
                break;
            }
        }
    }
    if(counter === s.length){
        return true;
    }else{
        return false
    }

}

const s = ['a','f','b'];
const t = ['a','h','b','g','d','c', 'f'];

const isSequencePresent = isSequence(s, t);
console.log("result", isSequencePresent);
