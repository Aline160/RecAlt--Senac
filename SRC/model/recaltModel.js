const mongoose = require('mongoose');

 
const LugaresSchema = new mongoose.Schema({
id : { type : Number,required:true},
titulo:{ type : String ,required:true},
texto:{ type : String,required:true},
},{
    versionkey: false
});

const lugaresMongo = mongoose.model('lugares', LugaresSchema);

module.exports = lugaresMongo;
