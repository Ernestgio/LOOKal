const express = require('express');
const router = express.Router();
// const {ensureAuth, ensureGuest} = require('../middleware/auth')

const TourService = require('../models/TourService');

router.get('/locations', async (req,res) => {
    try{
        const tourServices = await TourService.find();
        res.render('index',{
            tourServices:tourServices
        });
    }
    catch(err){
        console.log(err);
    }
});

router.get('/', (req,res) => {
    try{
        res.render('beranda');
    }
    catch(err){
        console.log(err);
    }
});

router.get('/lacakTiket', (req,res) => {
    try{
        res.render('lacakTiket');
    }
    catch(err){
        console.log(err);
    }
});

router.get('/sekitarKita', (req,res) => {
    try{
        res.render('sekitarKita');
    }
    catch(err){
        console.log(err);
    }
});

router.get('/profil', (req,res) => {
    try{
        res.render('profil');
    }
    catch(err){
        console.log(err);
    }
});

module.exports = router;