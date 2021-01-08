const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
//var express = require("express")
//var app = express();

//IMPORTS routes
app.use(cors());
const postsRoute = require('./routes/students');

//parse the resp into json
app.use(bodyParser.json());


//get/students
//middle layer to use routes
app.use('/students',postsRoute);

//get/home
app.get("/",function(req,resp,next){
    resp.send("<h1> home page </h1>")
})


//HOw to we start listening to the server
app.listen(3000,function(){
    console.log("server is listen on http://localhost:3000")
})

//Connect to DB
/* to avoid this hard coding we install dotenv
mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false',
{ useNewUrlParser: true ,useUnifiedTopology: true },
()=>console.log("Connected to DB")
);*/
//conection string
//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false

mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true ,useUnifiedTopology: true },
()=>console.log("Connected to DB")
);