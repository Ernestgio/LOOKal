const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    consumerId: String,
    consumerName: String,
    ticketAmt: Number,
    purchaseDate: Date,
    serviceId: String,
    phoneNumber: String,
    totalPrice: Number,
    paymentMethod: String
});

module.exports = mongoose.model('Order', OrderSchema);