//Tour Service routes

const express = require('express');
const router = express.Router();


const TourService = require('../models/TourService');

//get single tour service
router.get('/:id', async (req,res) => {
    try{
        const requestedId = req.params.id;
        const tourService = await TourService.findById(requestedId);
    }
    catch(err){
        console.log(err);
    }

    res.render('detailTourService',{tourService:tourService});
});


// get tour service search result
router.post('/search', async (req,res) => {
    const searchKey = req.body.searchKey;

    try{
        const searchResults = await TourService.find({name: {$regex: searchKey, $options:'i'}});
    }
    catch(err){
        console.log(err);
    }
    res.render('index',{tourServices:searchResults});
});


// get new tourService form page
router.get('/new', async (req,res) => {
    res.render('tourServiceForm');
});

//post new tourService to database
router.post('/new', async (req,res) => {
    const name = req.body.name;
    const imageURL = req.body.imageURL;
    const description = req.body.description;
    const location = req.body.location;
    const adultTicketPrice = req.body.adultTicketPrice;
    const childrenTicketPrice = req.body.childrenTicketPrice == "" ? 0 : parseInt(req.body.childrenTicketPrice);
    const unit = req.body.unit;
    const type = req.body.type; 

    const newTourService = {
        name,
        image,
        description,
        location,
        adultTicketPrice,
        childrenTicketPrice,
        unit,
        type
    };

    try {
        const result = await TourService.create(newTourService);
        const tourServices = await TourService.find();
    }
    catch(err){
        console.log(err);
    }

    res.render('index',{tourServices: tourServices});

})

module.exports = router;