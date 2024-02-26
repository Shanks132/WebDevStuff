const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/generate',(req,res)=>{
    res.render('index2');
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
console.log();