const res = require("express/lib/responde");
const fs = require("fs");


const livros=require('../model/recaltModel')


module.exports = {

}
const res = require("express/lib/response");
const fs = require("fs");

const livros= require('../model/recaltController.js');
const recalt = require("../model/recaltModel");

const getAll=(req,res)=>{
 recaltMongo.find({},function(err,livro){
     if(err) {
         res.status(500).send({ message: err.message })
     }
     res.status(200).render('index',{
         livrosList:livro
     })
    })
};


module.exports = {
     getAll,
}