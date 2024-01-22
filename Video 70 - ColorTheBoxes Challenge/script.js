

function colorDecider(random,boxName){
    if(random<0.2){
        console.log(random);
        boxName.style.backgroundColor="red";
    }
    if(random>=0.2 && random<0.4){
        console.log(random);
        boxName.style.backgroundColor="blue";
    }
    if(random>=0.4 && random<0.6){
        console.log(random);
        boxName.style.backgroundColor="green";
    }
    if(random>=0.6 && random<0.8){
        console.log(random);
        boxName.style.backgroundColor="yellow";
    }
    if(random>=0.8){
        console.log(random);
        boxName.style.backgroundColor="orange";
    }
}
function random255(){
    return Math.floor(Math.random()*255);
}
let divs = document.getElementsByClassName("box");
for(let i = 0; i<divs.length;i++){
    // let randomNo = Math.random();//choose a random number each time for each div
    let boxName = divs[i]; // take one div from the divs array
    // colorDecider(randomNo,boxName);//use the function to decide the color
    boxName.style.backgroundColor=`rgb(${random255()},${random255()},${random255()})`;
}