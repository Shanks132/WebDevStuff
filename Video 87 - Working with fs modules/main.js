const fs = require("fs")
console.log(fs)
console.log('start');

fs.writeFileSync("harry.txt","Onion")

fs.writeFile("harry2.txt","pp poo poo",()=>{
    console.log('meow');
    fs.readFile("harry2.txt",(error,data)=>{
        console.log(error,data.toString());
    })
    // this may turn into a callback hell
});
fs.appendFile("harry.txt","appendText",(e,d)=>{
    console.log(e,d)
})


console.log('end');
