const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
   consumerId: String,
   consumerName: String,
   childrenTicketAmt: Number,
   adultTicketAmt: Number,
   purchaseDate: Date,
   serviceId: String 
});

module.exports = mongoose.model('Order',OrderSchema);