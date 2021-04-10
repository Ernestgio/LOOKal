const express = require('express');
const router = express.Router();

const TourService = require('../models/TourService');

router.get('/', async(req, res) => {
    try {
        const tourServices = await TourService.find();
        res.render('index', { tourServices: tourServices });
    } catch (err) {
        console.log(err);
    }
});

router.get('/lacak', (req, res) => {
    const orderbarubuka = { _id: { $oid: -999 }, name: "kosong" }
    res.render('lacak', { order: orderbarubuka });
});

router.get('/redeem', (req, res) => {
    const orderbarubuka = { _id: { $oid: -999 }, name: "kosong" }
    res.render('redeem', { order: orderbarubuka });
});

router.get('/sekitarkita', (req, res) => {
    res.render('sekitarkita');
});

router.get('/layanananda', (req, res) => {
    res.render('layanananda');
});

module.exports = router;