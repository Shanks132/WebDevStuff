let randomDelay = async () => {
    return new Promise((resolve, reject) => {
        let rando = 1 + Math.random() * 6; // genetate ramdom no b/w 1 and 7
        setTimeout(() => {   // this function can tank any thing from 1s to 7s
            resolve();
        }, rando * 1000);
    });
}
let bodyStyles = document.body.style;
bodyStyles.background='green';
bodyStyles.color='black';
bodyStyles.fontFamily = 'sans-serif';
bodyStyles.fontSize = '30px'


let dotPrinter = async (div1,char)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            div1.innerHTML += char;
            setTimeout(() => {
                div1.innerHTML += char;
                setTimeout(() => {
                    div1.innerHTML += char;
                    resolve("aye dots printed"); 
                }, 300);
            }, 300);
        }, 300);       
    });
}
let addItem = async (item) => {
    await randomDelay();
    let hackerDiv = document.createElement("div");
    hackerDiv.innerHTML = item; 
    dotPrinter(hackerDiv,".");
    document.body.append(hackerDiv);
}
async function main() {
let text =
    ["Initializing Hacking",
        "Reading your files",
        "Password files detected",
        "Sending all files to the server",
        "All files sent",
        "cleaning up",
        "self destruct"];


    for (let i = 1; i < text.length; i++) {
        await addItem(text[i]);
    }
    await randomDelay();
    document.lastElementChild.remove();
}
main();

