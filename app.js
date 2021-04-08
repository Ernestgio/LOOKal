// Main Application Controller

require('dotenv').config();

//importing dependencies
const path = require('path');
const express = require('express');
const connectDB = require('./config/db');

//tambahan palkon
const exphbs = require('express-handlebars') //views + frontend
// const passport = require('passport') //autentikasi google+
// const session = require('express-session') //menyimpan session agar user tidak ke logout terus
// const MongoStore = require('connect-mongo')(session) //untuk session

//routes
const indexRoutes = require('./routes/index');
const OrderRoutes = require('./routes/Order');

//Init express instance
const app = express();

// //Connecting views using ejs & html template
//body parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// app.use(express.static(__dirname + "/public"));
app.engine(
    '.hbs', 
    exphbs({ 
    defaultLayout: 'main',
    extname: '.hbs' 
    })
  )
app.set('view engine','.hbs')


app.use(express.static(path.join(__dirname, 'public')))

const seedDB = require('./seed');


//connect to Mongo Database
try{
    connectDB();
    //seedDB();
}
catch(err){
    console.log('error seeding');
}

app.use('/',indexRoutes);
app.use('/Orders',OrderRoutes);

//App listening on port 3000
app.listen(
    process.env.PORT,
    console.log(`Server running on port ${process.env.PORT}`)
);

