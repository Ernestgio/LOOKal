const express = require('express');
const router = express.Router();

const TourService = require('../models/TourService');

router.get('/', async (req,res) => {
    try{
        const tourServices = await TourService.find();
        res.render('index',{tourServices:tourServices});
    }
    catch(err){
        console.log(err);
    }
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