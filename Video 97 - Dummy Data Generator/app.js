const mongoose = require("mongoose");
const express = require("express");
const Employee = require("./Models/schema.js")

const path = require('path');
const port = 3000;
const app = express();

app.set('view engine', 'ejs');
mongoose.connect("mongodb://localhost:27017/EmployeeTable");


app.get('/', (req, res) => {
    res.render('index', {})
    // res.send('Hello World!')
})

app.get("/generate", async(req, res) => {
    await Employee.deleteMany({});
    let nameSet = ['Alice', 'Bob', 'Charlie', 'David', 'Eva','Frank', 'Grace', 'Hank', 'Ivy', 'Jack'];
    let languageSet = ['JavaScript', 'Python', 'Java', 'C++', 'C#','Ruby', 'Swift', 'TypeScript', 'Go', 'PHP'];
    let citySet = ["London", 'Mumbai', 'Delhi', 'Paris', 'Hong Kong', 'Colombo', 'Ayodhya','Madeira','Machester','Madrid'];
    let isManagerOrNot = [true, false];

    const newEmp = await Employee.create({
        name: nameSet[Math.floor(Math.random() * 10)],
        salary: 10000,
        langauge: languageSet[Math.floor(Math.random() * 10)],
        city: citySet[Math.floor(Math.random() * 10)],
        isManager: isManagerOrNot[(Math.random() > 0.5 ? true : false)]
    })
    res.send(newEmp);
    console.log("employee data is saved");

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})






