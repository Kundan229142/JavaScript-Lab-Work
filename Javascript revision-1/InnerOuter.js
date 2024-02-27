document.write("Hello javaScript");

 function outer() {
    let num = 1;

    function inner() {
        console.log(num);
        num++;
    }

    return inner;
 }

 let re = outer();
 re();
 re();
 re();
 re();
 re();