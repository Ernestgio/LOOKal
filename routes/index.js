const express = require('express');
const router = express.Router();

const TourService = require('../models/TourService');

router.get('/', async(req, res) => {
    try {
        const tourServices = await TourService.find();
        res.render('home',{tourServices:tourServices});
    }
    catch(err){
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

router.get('/layanananda', async(req, res) => {
    try {
        const tourServices = await TourService.find();
        res.render('layanananda', { tourServices: tourServices });
    } catch (err) {
        console.log(err);
        console.log("ada crash kawanku");
    };
});

//tes
// router.get('/postOrder', async (req,res) => {
//     try{
//         const tourService = await TourService.findOne();
//         res.render("formulirOrder",{tourService:tourService})
//         console.log(tourService._id)
//     }
//     catch(err){
//         console.log(err)
//     }
// })


module.exports = router;