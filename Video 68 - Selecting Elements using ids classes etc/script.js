let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[3].style.backgroundColor="green";   

let bhuNew = document.getElementById("bhu2");
bhuNew.style.backgroundColor="orange";

document.querySelector(".box").style.backgroundColor="yellow"; // same as line 6 but css selector on only 1st element

// document.querySelectorAll(".box").style.backgroundColor="yellow"; this returns a nodeList


document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "yellow";
})
 //document.getElementsByTagName("div"); returns all the divs present inside the document
