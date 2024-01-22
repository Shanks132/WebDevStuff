const express = require('express')
const fs = require('fs')

const app = express()
const port = 3000;

let files = fs.readdirSync(__dirname)
let len = files.length;

let files_arr=[];

for(let i=0; i<len; i++){
    let extName = files[i].split(".").pop();
    
    if (extName != "json" && extName != "js" && fs.statSync(files[i]).isFile() ){
        files_arr.push(files[i]);
          
    }
}
// console.log(files_arr);

const path = require('path');
for(let i=0; i<files_arr.length; i++){
    let extName = files_arr[i].split(".").pop();
    let folderName = extName
    if(fs.existsSync(folderName)){
        const currentPath = path.join(__dirname,files_arr[i]);
        const newPath = path.join(__dirname,extName,files_arr[i]);
        fs.renameSync(currentPath,newPath);
    }
    else{
        fs.mkdirSync(extName);
        const currentPath = path.join(__dirname,files_arr[i]);
        const newPath = path.join(__dirname,extName,files_arr[i]);
        fs.renameSync(currentPath,newPath);
    }    
}
// console.log(files_arr);

