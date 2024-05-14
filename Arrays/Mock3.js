function rateService(sourceCurrency, targetCurrency) {
    const conversionPromise = new Promise((resolve, reject) => {
        console.log("Promise inside the rateService");
        resolve(100.0);
        // reject();
    });
    return conversionPromise;
}

const cache = {
   
};
//'INRUSD' : 0.0

const convertAmount = async (amount, sourceCurrency, targetCurrency) => {
    const key = sourceCurrency+targetCurrency;
    console.log("****", key);
    if(key in cache){
        console.log("Searching in cache successful");
        return amount*cache[key];
        // pick value from cache and compute
    }else{
        console.log("rate service call");
        try{
            const conversionRate = await rateService(sourceCurrency, targetCurrency);
            console.log("inside the resolves rate service response", conversionRate);
            const targetAmount = amount * conversionRate;
            console.log(targetAmount);
            cache[key] = conversionRate;
            console.log("####", cache);
            setTimeout(()=> {
                delete cache[key];
            }, 3000)
            return targetAmount;
        }catch(error){
            console.log("Error obtaining the converted Amount", error);
        }  
    }

 
};

setInterval(() => {
    convertAmount(100, 'INR', 'USD')
.then((amt) => {
    console.log("@@@@", amt);
})
}, 1000);
//console.log("Final Value ", finalAmount);
// rate service => provided with the source and target currecncy => ouput 105.0(floating point number)
// multiply the amount with the output of the rate service
// 


