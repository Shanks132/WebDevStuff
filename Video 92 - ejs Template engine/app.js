const express = require("express");
const app = express();
const port = 3000;
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.set('view engine','ejs')

app.get("/",(req,res)=>{
    // res.send("hello world");
    let siteName = "Adidas";
    let searchText = "Welcome";
    //imagine these are fetched from the server 
    // res.sendFile("./Templates/index.html",{root:__dirname})
    
    res.render("index",{siteName:siteName, searchText:searchText});
})
//template engines  are used to put js variables into the templates

app.get("/blog/:slug",(req,res)=>{
    // res.send("hello world");
    let blogTitle = "Adidas hater pro max";
    let blogText = "Nah i'd Win";
    //imagine these are fetched from the server 
    res.sendFile("./Templates/blogpost.html",{root:__dirname})
})

app.listen(port,()=>{
    console.log("app is listening on port 3000")
})