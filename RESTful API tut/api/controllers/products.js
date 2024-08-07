const express = require("express");
const mongoose = require('mongoose');

const Product = require("../models/products");

exports.products_get_all = (req, res, next) => {
  Product.find()
  .select('name price _id productImage')
  .exec()
  .then(docs=>{
    // if(docs){
    const response={
      count:docs.length,
      products:docs.map(doc=>{
        return{
          name:doc.name,
          price:doc.price,
          productImage: doc.productImage,
          _id : doc._id,
          request:{
            type:'GET',
            url:"http://localhost:3000/products/"+doc._id,
          }
        }
      })
    }
    res.status(200).json(response);
    // console.log(docs)
    // }
    // else{
    //    res.status(404).json({
    //     message:"No docs available",
    //    })
    // }
  })
  .catch(err=>{
    res.status(500).json({error:err})
  }) 
}
exports.products_get_product = (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
  .select("name price _id productImage")
  .exec()
  .then(doc=>
    {
      if(doc){
        console.log("From database",doc);
        res.status(200).json({
          product:doc,
          productImage: doc.productImage,
          request:{
            type:"GET",
            description:'Get all products',
            url: 'http://localhost:3000/products'
          }
        }
      );
      }
      else{
        res.status(404).json({message:"no valid product"})
      }
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({error:err});
  })
  // if (id === 'special') {
  //   res.status(200).json({
  //     message: "You dicovered the special ID",
  //     id: "YOU ARE MY SPECIAL",
  //   });
  // }
  // else {
  //   res.status(200).json({
  //     message: "You dicovered the special ID",
  //     id: id,
  //   });
  // }
}

exports.products_create_product =  (req, res, next) => {
  // const product = {
  //   name : req.body.name,
  //   price : req.body.price
  // }
  console.log(req.file)
  const product = new Product({
     _id : new mongoose.Types.ObjectId(),
     name : req.body.name,
     price : req.body.price,
     productImage : req.file.path
  });

  product.save()
  .then(result=>{
    console.log(result);
      res.status(201).json({
        message: "Handling POST request to /products",
        createdProduct : {
          name:result.name,
          price:result.price,
          _id : result._id,
          request : {
            type:"GET",
            url:"http://localhost:3000/products/"+result._id
          }
        },
      })
    })
  .catch(err=>{
    console.log(err);
    res.status(500).json({error:err});
    }
);
}
exports.products_update_product = (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {}
  for (const ops of req.body){
    updateOps[ops.propName] = ops.value;
  }
  
  Product.updateOne({_id : id},{$set:updateOps})
  .exec()
  .then(result=>{
    console.log(result);
    res.status(200).json({
      message:"Prduct updated",
      request:{
        type:"GET",
        url: 'http://localhost:3000/products/'+id,
      }

    });
  }).catch(err=>{
    console.log(err);
    res.status(200).json({error : err});
  })
}
exports.products_delete_product= (req, res, next) => {
  const id = req.params.productId;
  
  Product.deleteOne({_id: id})
  .exec()
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err =>{
    res.status(500).json({
      error:err,
    })
  })

  // res.status(200).json({
  //   message: "deleted product",
  //   id: id,
  // });

}