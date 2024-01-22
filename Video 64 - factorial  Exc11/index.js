const redfun=(a,b)=>{
    return a*b;
}

let a =[];
let input = prompt("Enter num to find factorial");
let i=input;
while(input>0){
    a.push(input--);
}

console.log("using reduce "+a.reduce(redfun));

//using while loop
let ans = 1;
while(i>0){
    ans = ans*i;
    i--;
}
console.log("using while loop "+ ans );