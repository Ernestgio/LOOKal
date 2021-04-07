const mongoose = require('mongoose');

const TourServiceSchema = new mongoose.Schema({
    name: String,
    imageURL: String,
    description: String,
    location: String,
    adultTicketPrice: Number,
    childrenTicketPrice: Number,
    unit: String,
    type: String
});

module.exports = mongoose.model('TourService',TourServiceSchema);