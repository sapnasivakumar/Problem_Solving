function customString(number, string){
    let result = '';
        for(let i=1; i<=number; i++){
            result = result.concat('', string);
        }
    return result;
}

function stringFormation(a, b){
    let output = '';
    if(a<3){
        output = customString(a, 'a');
    }
    if(a >= 3){
        let iterationsOfA = Math.floor(a/2);
        let finalAddOnOfA = a%2;
        console.log("iterations of A", iterationsOfA,"addOn of A", finalAddOnOfA);
        for(let i =1; i<= iterationsOfA; i++){
            output = output.concat('', customString(i, 'a'));
            console.log("string of A > 3", output);
        }
    }
    if(b<3){
        output = output.concat('', customString(b, 'b'));
    }
     if(b >= 3){
        let iterationsOfB = Math.floor(b/2);
        let finalAddOnOfB = b%2;
        console.log("iterations", iterationsOfB,"addOn", finalAddOnOfB);
    }


}

stringFormation(2,1);
