let arr = [-1,2,-3,-4,5,6];

let newArr = arr.map((x,index,array)=>{
    return x*x;
});
console.log(newArr);

const positive = (e)=>{
    if(e>=0){
        return true;
    }
    return false;
}
console.log(arr.filter(positive));

let arr2 = [2,3,4,5,6];
const red = (a,b)=>{
    console.log(`${a} * ${b} = ${a*b}`)
    return a*b;
}
console.log(arr2.reduce(red))


