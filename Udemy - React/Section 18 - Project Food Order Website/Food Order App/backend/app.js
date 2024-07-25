/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const morgan = require("morgan");
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
const upload = multer({ storage: storage })
const Item = require("./Models/item");


mongoose.connect("mongodb+srv://kannanshankar130203:hzuNEnVSReT2RyV8@foodappcluster.to1zg8k.mongodb.net/?retryWrites=true&w=majority&appName=FoodAppCluster");
app.use(morgan("dev"))
app.use("/uploads",express.static("uploads"))
app.use((req,res,next)=>{
  //type of website that can access our website/server 
  //*-denotes any website
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if(req.method === "OPTIONS"){
    //OPTIONS method is sent before any request 
    res.header("Access-Control-Allow-Methods","PUT, POST, PATCH, DELETE, GET")
    return res.status(200).json({})
  }
  next();
})


app.get('/menu', (req, res) => {
  Item.find()
    .exec()
    .then(docs => {  
      // if(docs){
      const response = {
        count: docs.length,
        products: docs.map(doc => {
          console.log(doc.foodPic)
          return {
            name: doc.foodName,
            price: doc.price,
            foodPic: doc.foodPic,
            _id: doc._id,
            description:doc.description

          }
        })
      }
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
});

app.post("/menu", upload.single("foodPic"), (req, res, next) => {
  
  const item = new Item({
    _id: new mongoose.Types.ObjectId(),
    foodName: req.body.foodName,
    price: req.body.price,
    foodPic: req.file.path.replace(/\\/g, '/'),
    description: req.body.description
  })
  item.save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST request to /",
        createdProduct: {
          foodName: result.foodName,
          price: result.price,
          foodPic:result.foodPic ,
          description: result.description

        },
      })
    })
})

module.exports = app; 