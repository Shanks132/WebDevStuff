// minimal express application

const express = require('express')
const app = express()
const port = 3000

//app.get app.delete, app.post, app.put (path,handler)
app.get('/', (req, res) => {
    res.send('YO 01awdawdwq00!');
})

app.get('/Contacts', (req, res) => {
    res.send('YOu can contact @ 1312312213');
})

app.get('/About', (req, res) => {
    res.send('About!');
})
app.get('/FAQ', (req, res) => {
    res.send('IDK WHAT IM DOING!');
    
});
// app.get('/blog/intro-to-js', (req, res) => {
//     //fetching some details about js 
//     res.send('JavaScript is wtf seriously');
    
// });


// app.get('/blog/intro-to-python', (req, res) => {
//     res.send('python is wtf seriously');
//     //fetching some details about js 
// });

app.get('/blog/:slug', (req, res) => {
    console.log(req) ; //request params
    res.send(`${req.params.slug} is shit`);
    // http://localhost:3000/blog/ipadosan?mode=dark&region=bangkok
    
});
app.use(express.static('public'))





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
