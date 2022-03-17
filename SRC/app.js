const ejs = require('ejs');
const express=require('express');
const app = express();
const bodyParser=require("body-parser");
var path = require('path');

const lugares = require('./routes/recaltRoutes');
const connect=require('./database');
const lugaresMongo=('./model/recaltModel');

connect();


app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');



app.use(function(req, res, next) {
    res.header("Access-control-Allow-Origin", "*")
    res.header(
     "Access-control-Allow-headers",
     "origin, x-Requested-with, content-type, Accept"
      )
      next()
})
 
app.use('/lugares',lugares);
 
module.exports = app