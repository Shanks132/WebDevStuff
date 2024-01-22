// // faulty calci
// /*
// + ---> -
// * ---> +
// - ---> /
// / ---> **
//  only 10% of the time
// */

// // math.random generates random number from 0 to 1
// //so we multiply it by 10 and round it down
// //
// function ganit() {
//     let rando = Math.floor(Math.random() * 10);
//     let a = Number(prompt("Number a: "));
//     let b = Number(prompt("Number b: "));
//     let op = prompt("What operation ? :");
//     console.log("a=", a, "b=", b, "rando: " + rando);
//     let add = (x, y) => {
//         return parseInt(x) + parseInt(y);
//     }
//     let sub = (x, y) => {
//         return x - y;
//     }
//     let multiply = (x, y) => {
//         return x * y;
//     }
//     let divide = (x, y) => {
//         return x / y;
//     }
//     let pow = (x, y) => {
//         return x ** y;
//     }

//     if (rando != 1) {
//         if (op == '+') {
//             console.log(add(a, b));
//         }

//         else if (op == '-') {
//             console.log(sub(a, b));
//         }

//         else if (op == '*') {
//             console.log(multiply(a, b));
//         }

//         else if (op == '/') {
//             console.log(divide(a, b));
//         }

//         else if (op == '**') {
//             console.log(pow(a, b));
//         }
//         else {
//             console.log("dekh ke type kar.")
//         }
//     }
//     else {
//         if (op == '+') {
//             console.log(sub(a, b));
//         }

//         else if (op == '-') {
//             console.log(divide(a, b));
//         }

//         else if (op == '*') {
//             console.log(add(a, b));
//         }

//         else if (op == '/') {
//             console.log(pow(a, b));
//         }

//         else if (op == '**') {
//             console.log(pow(a, b));
//         }
//         else {
//             console.log("dekh ke type kar.")
//         }
//     }
// }

// const button = document.getElementById("RamanujanGanitProMax");
// text = button.addEventListener("click",ganit);


//use object to store corresponding wrong calulations
let obj = {
    "+":"-",
    "/":"**",
    "*":"+",
    "-":"/",
    "**":"**"
};

let a = prompt("Enter a number");

let b = prompt("Enter another number");
let c = prompt("what operator");
if(Math.random()<0.1){
    c=obj[c];
    alert(`The result is ${eval(`${a}${c}${b}`)}`);      
}
else{
    alert(`The result is ${eval(`${a}${c}${b}`)}`);
} 



