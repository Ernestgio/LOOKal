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
    const orderbarubuka = { id: -999, name: "kosong" }
    res.render('lacak', { order: orderbarubuka });
});

module.exports = router;