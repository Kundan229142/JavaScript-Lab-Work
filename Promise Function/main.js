// new Promise( function(resolve,reject){
//     resolve();
// })
// //Promise {<fulfilled>: undefined}

// new Promise( function(resolve,reject){
//     reject();
// })
// //Promise {<rejected>: undefined}

// new Promise( function(resolve,reject){

// })
// // Promise {<pending>}


const b = Math.floor(Math.random()*10);
console.log(b);

const a = new Promise(( function(resolve,reject){     
    if(b%2 === 0){
        console.log("Promiss Fulfilled Succesfully....!!")
    }
    else{
        console.log("Error....!!") 
    }
    }))