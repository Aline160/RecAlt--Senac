const res = require("express/lib/response");
const fs = require("fs");
var path = require('path');


const lugaresMongo=require('../model/recaltModel')



const getAll=(req,res)=>{
 lugaresMongo.find({},function(err,lugar){
     if(err) {
         res.status(500).send({ message: err.message })
     }
     res.status(200).render('index',{
        lugareslist:lugar
     })
    })
};


const postLugares= (req,res)=>{
    let newlugaresMongo = new lugaresMongo({
      id:req.body.id,
      titulo:req.body.titulo,
      texto:req.body.texto
    });
    res.status(200).send(newlugaresMongo.save());
    res.redirect('/lugares/enviar')

    
  };

const enviarLugares= (req,res)=>{
    res.status(200).sendFile('paginas/Post.html',{root:__dirname})
    };


module.exports = {
     getAll,
     postLugares,
     enviarLugares
}