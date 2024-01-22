console.log("Video 55 - JS p2")

var a = 5;
var b1 = 6;

console.log(a+b1, typeof("pp poo poo"));
let a1 = "globalScope";
let b = "Mr International";
{
    let b = "Mr. National";
    a1  = "block";
    console.log(b);
    console.log(a1);
}
console.log(b);
console.log(a1);

//remember that let is block scoped and var is globally scoped
// if let is written outside then its globally scoped

let obj = {
    "name":"Shanks",
    job:"Intern",
    key:"Value",
};
console.log(obj);
obj.name = "Shankar";
obj.salary = 100;

console.log(obj);
console.log(obj.name);

let o = {
    pp:"poo",
    anabolic:"steroids"
};
o = 15;
console.log(o);
console.log(typeof("meow"+5));