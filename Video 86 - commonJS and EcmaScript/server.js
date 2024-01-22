// const http = require('node:http');

// // const fs = require("fs");
// This is commonJs method to import modules which import synchronously
// Hence we go into package.json and write type:module


// import http from "http"
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World 2</h1>\n'); 
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// // });

// import harry from "./newModule.js"
// console.log(harry)

const a = require("./myModule2.js");
console.log(a,__dirname,__filename);


