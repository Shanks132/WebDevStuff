const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken"); 
const User = require("../models/user")

exports.user_create_user = (req,res,next)=>{
  User.find({email:req.body.email}).exec()
  .then(user=>{
    if(user.length>=1){
      return res.status(409).json({message:"User already Exists"});
    //409 - conflict w/already present resources
    //422 - cant process request
    }
    else{
      bcrypt.hash(req.body.password, 10, (err,hash)=>{
        if(err){
          res.status(500).json({
            error:err
          })
        }
        else{
          const user = new User({
            _id : new mongoose.Types.ObjectId(),
            email: req.body.email,
            // password : req.body.password,
            password : hash
          })
          user.save()
          .then(result=>{
            res.status(200).json({message : `Account created for ${req.body.email}`})
          })
          .catch(err=>{
            res.status(500).json({error : err})
          })
        }
      })
    }
  })
  .catch(err=>{
    res.status(500).json({
      message:"unknown error occured"
    })
  }) 
}

exports.user_delete_user = (req,res,next)=>{
  User.deleteOne({_id:req.params.userId}).exec().then(result=>{
    res.status(200).json(result)
  }).catch(err=>{
    res.status(400).json({error:err});
  })
}

exports.user_login = (req,res,next)=>{
  User.find({email:req.body.email})
  .exec()
  .then(user=>{
    if(user.length < 1){
      res.status(401).json({message:"Auth failed"});
    }
    else{
      bcrypt.compare(req.body.password, user[0].password, (err, result)=>{
        if(err){
          res.status(401).json({message:"Auth Failed"});
        }
        if(result){
          const token = jwt.sign({
            email: user[0].email,
            userId: user[0]._id,
          },
          process.env.JWT_KEY,
          {
            expiresIn:"1h"
          },

          );
          res.status(200).json(
            {message:"Auth Successful",token:token}
          );
        }
        else{
          res.status(401).json({message:"Auth Failed"});
        }
      })
    }

  })
  .catch()
}