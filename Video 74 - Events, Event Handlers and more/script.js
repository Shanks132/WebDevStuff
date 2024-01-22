//referces:https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

let btn = document.getElementById("btn");
// btn.addEventListener("click",()=>{
//     alert("We love casting spellz");
//     document.querySelector(".box").innerHTML="UNGA BUNGA";
// })

btn.addEventListener("dblclick",()=>{
    window.open("https://youtu.be/dQw4w9WgXcQ?si=zOJ_GMKpMdE6FWtv");
})

btn.addEventListener("contextmenu",()=>{
    //alert("We love casting spellz");
    window.open("https://www.youtube.com/watch?v=2GXlAJPa-KM");
})

document.addEventListener("keydown",(e)=>{
    console.log(e);
    if(e.key == "k" && e.ctrlKey == false){
        alert("press ctrl k to see magic");
    }
    if(e.key == "k" && e.ctrlKey){
        window.open("https://www.youtube.com/watch?v=IaE039IiYt4",'_blank')
    }
    if(e.key == "w" && e.ctrlKey){
        window.open("https://www.youtube.com/watch?v=DJfg39WkMvE")
    }

})
function colorGenerator(){
    let divs = document.querySelector(".container");
     // take one div from the divs array
    divs.style.backgroundColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    
}

// let a = setInterval(()=>{ // runs multiple times like an arduino loop
//     colorGenerator();
// },1000);
// console.log(a);

let a = setTimeout(()=>{ // runs once
    colorGenerator();
},1000);
console.log(a);
    



