const express=require('express');
const app = express();

const livros = require('./routes/recaltRoutes')
//const connect=require('./database')

//connect();

app.use(function(req, res, netx) {
    res.header("Access-control-Allow-Origin", "*")
    res.header(
     "Access-control-Allow-headers",
     "origin, x-Requested-with, content-type, Accept"
      )
      netx()
})
 
app.get('*', (req,res) => {
    res.status(404).sendFile('./views/erro.html',{root:__dirname})
})
 
module.exports = app