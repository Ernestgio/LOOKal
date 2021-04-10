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
    res.render('lacak');
});

router.get('/track', (req, res) => {
    res.render('track');
});
module.exports = router;