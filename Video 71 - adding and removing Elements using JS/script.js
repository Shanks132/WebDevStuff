/*
let a = document.querySelector(".container").innerHTML;//returns HTML that is inside the div
let aText = document.querySelector(".box").innerText;//returns text is inside the div
console.log(aText);
let containerText = document.querySelector(".container").innerText;
console.log(containerText);
console.log(a);
console.log(document.querySelector(".container").nodeName   );

console.log(document.querySelector(".container").outerHTML);

console.log(document.querySelector(".container").tagName);

console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").setAttribute("Style","display:flex;"));

console.log(document.querySelector(".box").removeAttribute("style"));
console.log(document.querySelector(".box").attributes);
document.designMode="on"; // can edit any shit 

console.log(document.querySelectorAll(".box")[1].dataset);
*/
let div1 = document.createElement("div");
div1.innerHTML = "As the strongest curse <b>Jogoat</b> fought the King of curses, Fraudkuna";
div1.setAttribute("class","joGoat");
// document.querySelector(".container").append(div1); //adds at the end

//insertion functions are as follows:
/*
1.parentNode.append - inset at the end 
2.parentNode.prepend - insert at the start 
3.node.before(e) - insert before node
4.node.after(e) - insert after node
5.node.replaceWith(e) - replace with node
*/


//insert HTML/Text/Element -used to inset html

// 1.beforeBegin - before the start of element
// 2.afterbegin - first inside the element
// 3.beforeend - at the end inside of the element
// 4.afterend - after the end of element

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("beforeend","<span style = 'display:flex; flex-direction: row;align-content: center;justify-content: center;align-items: center;'><h3>Hello How are you</h3> I am under the water please help me here too much raining</span>");
console.log(document.getElementsByClassName("container")[0].classList);
console.log(document.getElementsByClassName("container")[0].className);

console.log(document.getElementsByClassName("container")[0].classList.remove("harry"));

console.log(document.getElementsByClassName("container")[0].classList.toggle("animations"));
