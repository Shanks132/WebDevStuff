const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const checkAuth = require("../middleware/checkAuth")



const productController = require("../controllers/products")

const multer = require("multer");
const storage = multer.diskStorage({
  destination : function (req, file, cb){
    cb(null,'./uploads/');
  },
  filename:function (req,file,cb){
    cb(null, new Date().toISOString + file.originalname)
  }
})

const fileFilter = (req,file,cb)=>{
  //reject files
  if(file.mimetype === "img/jpeg" || file.mimetype === "image/png"){
    cb(null, true);
  }
  else{
    cb(null, false);
  }
}

const upload = multer({storage:storage,
  limits:{fileSize:1024*1024*5,},
  fileFilter:fileFilter
}) ;
//handles get request 
router.get('/', productController.products_get_all );

router.get("/:productId", productController.products_get_product)

router.post('/',checkAuth,upload.single('productImage'),productController.products_create_product);

router.patch("/:productId",checkAuth ,productController.products_update_product);

router.delete("/:productId",checkAuth,productController.products_delete_product);


module.exports = router;
