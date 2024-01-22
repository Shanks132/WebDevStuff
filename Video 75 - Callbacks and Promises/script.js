// console.log("hello");
// console.log("everynyan"); //syncronous 

// setTimeout(()=>{
//     console.log("how are you?");
// },2000);


// setTimeout(()=>{
//     console.log("Fine saank you");
// },1000);
// // if a delay us possible then due to async nature of JS, the script continues after 
// // completing the bottom code 
// console.log("ooo mai gaaaad!");

const callback=(arg)=>{
    console.log(arg);
}
const loadScript = (src,callback)=>{
    let sc = document.createElement('script');
    sc.src = src;
    sc.onload=callback("harry");
    document.head.append(sc);
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)

