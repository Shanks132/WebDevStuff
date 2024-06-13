const express = require("express");
const mongoose = require('mongoose');


const Order = require('../models/order');
const Product = require("../models/products");
const checkAuth = require("../middleware/checkAuth");

const router = express.Router();
const orderController = require("../controllers/orders")


router.get('/', checkAuth,orderController.order_get_all );

router.post('/', checkAuth,orderController.orders_create_order);

router.get("/:orderId",checkAuth,orderController.orders_get_order);

router.delete("/:orderId",checkAuth,orderController.orders_delete_order);

module.exports = router;