const express=require('express');
const route = express.Router();
const controller = require('../controller/recaltController');


route.get('/',controller.getAll);
route.get('/enviar',controller.enviarLugares);

route.post('/enviar',controller.postLugares);


module.exports= route



