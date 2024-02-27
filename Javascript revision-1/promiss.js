document.write("Hello javaScript");

function promise() {
    return new Promise(( res, rej) => {
        res(); 
    })
}
console.log(promise());