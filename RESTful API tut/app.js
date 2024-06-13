const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
const userRoutes = require("./api/routes/user")

//shouldnt userpassword directly here but that it for now
mongoose.connect("mongodb+srv://kannanshankar130203:Shankar%4013@restapicluster.cbsm0tq.mongodb.net/?retryWrites=true&w=majority&appName=RESTapiCluster");

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/uploads',express.static("uploads"));
app.use((req,res,next)=>{
  // res.header("Access-Control-Allow-Origin","http://my-cool-website");
  
  
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
app.use('/products',productRoutes);

app.use("/orders",orderRoutes);

app.use("/user",userRoutes)
app.use("/",(req,res,next)=>{
  const error = new Error("Not found");
  error.status = 404;
  next(error)
});
app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
    error:{
      message:error.message,
    }
  })
})

module.exports = app;