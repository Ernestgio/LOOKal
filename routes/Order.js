// Order Routes

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Order = require('../models/Order');

//get all order 
router.get('/', async(req, res) => {
    try {
        const orders = await Order.find();
    } catch (err) {
        console.log(err);
    }
    res.render('orders', { orders: orders });
});

//verify order
router.post('/verify', async(req, res) => {
    let queryId = req.body.orderId;
    try {
        const existingOrder = await Order.findById({ id: queryId });
        let isFound = true;
        if (existingOrder.length == 0) {
            isFound = false;
        }

        res.render('orderConfirmation', { isFound: isFound, existingOrder: existingOrder });
    } catch (err) {
        console.log(err);
    }
});

router.get('/lacak', async(req, res) => {
    const orderQueryId = req.body.orderId;
    let orderResult = {
        id: -998,
        name: "tidak ditemukan"
    };
    try {
        orderResult = await Order.findById(orderQueryId);
    } catch (err) {
        console.log(err);
    }
    res.render('lacak', { order: orderResult }); //passing parameter
})

router.get('/redeem', async(req, res) => {
    const orderQueryId = req.body.orderId;
    let orderResult = {
        id: -998,
        name: "tidak ditemukan"
    };
    try {
        orderResult = await Order.findById(orderQueryId);
    } catch (err) {
        console.log(err);
    }
    res.render('lacak', { order: orderResult }); //passing parameter
})

// bikin method put buat ngelakuin redeem
router.put('/redeem', async(req, res) => {
    //ngubah status
})

module.exports = router;