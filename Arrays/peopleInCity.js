

function peopleInCity (input, city){

    let output = {"names": [], "averageAge": 0};
    let averageAge = [];

    let result = input.filter((item) => {
        if(item.city === city){
            output.names.push(item.name);
            averageAge.push(item.age);
        }
        return true;
    });
    if(averageAge.length > 0){
        output.averageAge = (averageAge.reduce((sum,age)=>  sum+age))/averageAge.		length;
    }


    console.log("$$$$$", output);
    return output;

}


module.exports = peopleInCity;