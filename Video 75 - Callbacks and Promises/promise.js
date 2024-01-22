// alert('promises.js');

let promise1 = new Promise((resolve,reject)=>{
    if(Math.random()<0.6){
        reject("antar mantar shaitaani khopda");
    }
    else{
        setTimeout(()=> {
            console.log('Yes i am done');
            resolve("harry");
        },1000)
    }
});

promise1.then((a)=>{
    console.log(a);
    //if promise is resolved then this snippet executes
})
promise1.catch((err)=>{
    console.log(err);
});     