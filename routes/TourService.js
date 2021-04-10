//Tour Service routes

const express = require('express');
const Order = require('../models/Order');
const router = express.Router();


const TourService = require('../models/TourService');

//get single tour service
router.get('/:id', async (req,res) => {
    try{
        let requestedId = req.params.id;
        let tourService = await TourService.findById(requestedId);
    }
    catch(err){
        console.log(err);
    }
    // render detailTourService.html dan passing data single tourService
    res.render('detailTourService',{tourService:tourService});
});


// get tour service search result
router.post('/search', async (req,res) => {
    let searchKey = req.body.searchKey;

    try{
        const searchResults = await TourService.find({name: {$regex: searchKey, $options:'i'}});
    }
    catch(err){
        console.log(err);
    }
    //render index.html and pass tourServicesdata
    res.render('index',{tourServices:searchResults});
});


// get new tourService form page
router.get('/new', async (req,res) => {
    //render tourServiceForm.html
    res.render('tourServiceForm');
});


//post new tourService to database
router.post('/new', async (req,res) => {
    const name = req.body.name;
    const imageURL = req.body.imageURL;
    const description = req.body.description;
    const location = req.body.location;
    const ticketPrice = parseInt(req.body.ticketPrice);
    const unit = req.body.unit;
    const type = req.body.type; 

    const newTourService = {
        name,
        image,
        description,
        location,
        ticketPrice,
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

    //setelah add new tour service,
    res.render('index',{tourServices: tourServices});

});


// Get order form page
router.get('/:id/order', async(req,res) => {
    let requestedId = req.params.id;

    try{
        let tourService = await TourService.findById(requestedId);
    }
    catch(err){
        console.log(err);
    }
    //render formulirOrder.html
    res.render('formulirOrder',{tourService:tourService});
});

router.post('/:id/order', async (req,res) => {
    let requestedId = req.params.id;
    try{
        let tourService = await TourService.findById(requestedId);
    
    
        const consumerName = req.body.nama;
        const phoneNumber = req.body.nomorHP;
        const paymentMethod = req.body.metodePembayaran;
        const ticketAmt = req.body.jumlahTiket;
        const consumerId = req.body.nomorKTP; 
        const purchaseDate = Date.now();
        const totalPrice = tourService.ticketPrice * ticketAmt;
        const serviceId = tourService._id;

        const newOrder = {
            consumerId,
            consumerName,
            ticketAmt,
            purchaseDate,
            serviceId,
            phoneNumber,
            totalPrice,
            paymentMethod
        };
        let newlyCreatedOrder = await Order.create(newOrder);
    }
    catch(err){
        console.log(err);
    }

    res.render('konfirmasiOrder',{newOrder:newlyCreatedOrder});    
});

module.exports = router;