import fs from "fs/promises"

let a = await fs.readFile("harry2.txt");

let b= await fs.appendFile("harry2.txt","chipi\n chipi\n chapa\n chapa\n");

console.log(a.toString(), b)