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
router.get('/:id', async(req,res) => {
    let queryId = req.params.id;
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

module.exports = router;