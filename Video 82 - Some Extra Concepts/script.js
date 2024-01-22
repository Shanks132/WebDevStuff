async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(69);
        }, 1000)

    }); // ...remains - destructuring
}

const sum =(a,b,c)=>{
    return a +b + c;
}
//IIFE - immediately invoked function expressions
; 
(async function main() {
    let a = await sleep();
    let b = await sleep();
    console.log(a);
    console.log(b);

    let [x,y,...remains] =[2,5,8,10,22,56]; // ... -The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
    console.log("x=",x);
    console.log("y=",y);
    console.log("remains=",remains); 
    
    //destructuring can be done in objects as well 
    let obj = {a:1,b:2,c:3};
    let {var1,var2} = obj;
    console.log(a,b);
    let arr = [3,5,7];
    console.log(sum(arr[0],arr[1],arr[2]));
    console.log(sum(...arr));
    a1 = "the";
    b1 = "no";
    const c = {a1,b1};
    console.log(c);
    

    

})();