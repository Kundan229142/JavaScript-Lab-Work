// Problem - 1
// Reverce this :- My name is Kundan Kumar;
// output is :- Kumar Kundan is name My

let str = "My name is Kundan Kumar";
let rev = str.split(" ").reverse().join(" ");
console.log(rev);
// complete 



// Problem - 2
// Reverce this :- My name is Kundan Kumar;
// output is :- ym eman si nadnuk ramuk

let str2 = "My name is Kundan Kumar";
let rev2 = str2.split(" ");
let res = "";
for( let item of rev2){
    res += item.split('').reverse().join('');
    res += ' ';
}
console.log(res);


