import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/todo.js";
const app = express()
const port = 3000

let conn = await mongoose.connect("mongodb://localhost:27017/todo");


// const TodoSchema = new mongoose.Schema({
//     title : String,
//     desc : String,
//     isDone : Boolean
// })
app.get('/', async (req, res) => {
    const task1 = new Todo({title:"first todo", desc:"BIG BOSS BIG BOSS",isDone: true});
    task1.save()
    console.log("tasks updated")

    console.log( await Todo.findOne({}));
    res.send('Hello World!')
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
console.log();


