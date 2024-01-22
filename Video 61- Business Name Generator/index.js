/*
Adjetives:
Crazy 
Amazing 
Fire

Shop Name:
Engine 
Foods
Garments

Suffix:
Bros
Limited
Hub
*/
console.log("start")
let adj={
    1:"crazy",
    2:"amazing",
    3:"fire"
};
let shopName={
    1:"Engine",
    2:"Foods",
    3:"Garments"
};

let Suffix={
    1:"Bros",
    2:"Ltd",
    3:"Hub"
};

let r1=Math.random()*30;
let r2=Math.random()*30;
let r3=Math.random()*30;

function decider(num){
    if(num<10){
        return 1;
    }
    if(num>=10 && num<20){
        return 2;
    }
    else{
        return 3;
    }
}
console.log(`${adj[decider(r1)]} ${shopName[decider(r2)]} ${Suffix[decider(r3)]}`)
alert(`${adj[decider(r1)]} ${shopName[decider(r2)]} ${Suffix[decider(r3)]}`)