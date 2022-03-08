const mongoose = require('mongoose');
const { type } = require('os');
 
const RecaltSchema = new mongoose.Schema({
id : { type : Number,required:true},
titulo:{ type : String ,required:true},
texto:{ type : Number,required:true},
},{
    versionkey: false
});

const recalt = mongoose.model('recalt', RecaltSchema);

module.exports = recalt;
