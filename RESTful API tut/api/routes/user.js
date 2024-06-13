const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();

const userController = require("../controllers/user");
const checkAuth = require("../middleware/checkAuth");

router.post("/signup",userController.user_create_user);

//creating a token 
router.post("/login",userController.user_login)

router.delete("/:userId",checkAuth,userController.user_delete_user)

module.exports = router;