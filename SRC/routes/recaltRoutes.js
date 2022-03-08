const express=require('express');
const route = express.Router();
const controller = require('../model/recaltModel');


module.exports= route



const mongoose = require('mongoose');
const { type } = require('os');
 
const livroSchema = new mongoose.Schema({
id : { type : Number,required:true},
titulo:{ type : String ,required:true},
texto:{ type : Number,required:true},
},{
    versionkey: false
});

const livros = mongoose.model('livros', livroSchema);

module.exports = livros;
