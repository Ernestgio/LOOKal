const express = require('express');
const router = express.Router();

const TourService = require('../models/TourService');

router.get('/', async (req,res) => {
    try{
        const tourServices = await TourService.find();
        res.render('home',{tourServices:tourServices});
    }
    catch(err){
        console.log(err);
    }
});

module.exports = router;