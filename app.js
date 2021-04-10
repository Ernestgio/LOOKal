// Main Application Controller

require('dotenv').config();

//importing dependencies
const path = require('path');
const express = require('express');
const connectDB = require('./config/db');

//routes
const indexRoutes = require('./routes/index');
const orderRoutes = require('./routes/Order');
const serviceRoutes = require('./routes/TourService');

//Init express instance
const app = express();

//Connecting views using ejs & html template
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + "/public"));


//const seedDB = require('./seed');
//connect to Mongo Database
try{
    connectDB();
    //seedDB();
}
catch(err){
    console.log('error seeding');
}

app.use('/',indexRoutes);
app.use('/orders',orderRoutes);
app.use('/services', serviceRoutes);

//App listening on port 3000
app.listen(
    process.env.PORT,
    console.log(`Server running on port ${process.env.PORT}`)
);

