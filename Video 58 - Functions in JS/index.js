console.log("func in js");

function nice(name) {
    console.log("Hey "+name+ " you like JS?");
    console.log("I like JS, Brother "+name+" cause i want big muni");   
}
let a = "Shankar";
nice(a);
nice("Ankit");

// function name(params,param1 = a) {return param+param1}

// undefined + any num  = NaN

//arrow function

const func1 = (x,y)=>{
    console.log("Arrow function");
    return x-y;
}
console.log(func1(23,5));
let func2 = (x,y)=>{
    console.log("Arrow function2");
    return x-y-1;
}
console.log(func2(23,5));