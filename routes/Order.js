// Order Routes

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Order = require('../models/Order');

//get all order 
router.get('/', async (req,res) => {
    try{
        const orders = await Order.find();
    }
    catch(err){
        console.log(err);
    }
    res.render('orders',{orders:orders});
});

//verify order
router.post('/verify', async(req,res) => {
    let queryId = req.body.orderId;
    try{
        const existingOrder = await Order.findById({id:queryId});
        let isFound = true;
        if (existingOrder.length == 0){
            isFound = false;
        }

        res.render('orderConfirmation',{isFound:isFound, existingOrder:existingOrder});
    }
    catch(err){
        console.log(err);
    }
});

//lacak order
router.post('/lacak', async (req,res) => {
    const orderQueryId = req.body.orderId;
    try {
        const orderResult = await Order.findById(orderQuery);
    }
    catch(err){
        console.log(err);
    }
    res.render('',{});
})

module.exports = router;