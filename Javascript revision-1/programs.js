document.write("Hello javaScript");

let num = prompt("Enter number :- ");

function Factaroil(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact*i;
    }
    return fact;
}
let fact = Factaroil(num);
console.log("Factroil of :- ", fact );



let SumOfNatural = (num)=>{
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum = sum + i;
    }
    return sum ;
}
let add = SumOfNatural(num);
console.log("Sum of :- ", add);



let ncr = (num) => {
    let r =  2 ;
    return  Factaroil(num) / Factaroil(num - r);
}
let ncrr = ncr(num);
console.log("Ncr of :- ", ncrr);