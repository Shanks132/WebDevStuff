const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs')

const birds = require('./routes/birds')

// app.use('/blog', birds)

function dateRn()
{
    var currentdate = new Date(); 
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds() + "\n";
    return datetime;
}
//middleware acts as an intermediate 
app.use((req,res,next)=>{
    console.log(req.headers);
    req.author = "Shanks";
    fs.appendFileSync('logs.txt',`middleware 1 working at ${dateRn()}`);
    next();
    // res.send("MiddleWare 1");
});


app.use((req,res,next)=>{
    console.log("middleware 2");    
    next();
    // res.send("MiddleWare 2");
})


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/about', (req, res) => {
    req.author = "Karthik";
    res.send('Hello '+ req.author);
})

app.get('/about/contact', (req, res) => {
    res.send('Hello Contact ' + req.author)
})

app.listen(port, () => {
console.log(`Example app listening on port port`)
});

// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
// });
console.log( );
