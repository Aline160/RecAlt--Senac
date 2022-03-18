const express=require('express');
const route = express.Router();
const controller = require('../controller/recaltController');


route.get('/',controller.getAll);
route.get('/enviar',controller.enviarLugares);
route.get('/atualizar',controller.atualizarLugares);


route.post('/enviar',controller.postLugares);

route.put('/atualizar/:id',controller.putLugares);

route.delete('/deletar/:id',controller.deleteLugares);


module.exports= route



