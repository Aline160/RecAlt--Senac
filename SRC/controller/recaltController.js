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


const putLugares = (req, res)=>{
  const id = req.params.id;
  try{

    lugaresMongo.updateOne(
      { id },
      { $set: req.body },
      function (err) {
      res.status(201).send({ message: "Tarefa atualizada com sucesso!" });
  })
  } catch (err) {
    return res.status(424).send({ message: err });
  }
}


const atualizarLugares= (req,res)=>{
  res.status(200).sendFile('paginas/Put.html',{root:__dirname})
  };




  const deleteLugares = (req, res) => {
    const id = req.params.id;
    try{
      lugaresMongo.find({ id }, function(err, lugar){
        if(lugaresMongo.length > 0){
            lugaresMongo.deleteMany({ id }, function (err) {
                if (!err) {
                  res.status(200).send({ message: 'Tarefa removida com sucesso', status: "SUCCESS" })
                }
              })
        }else res.status(200).send({ message: 'Não há tarefa para ser removida', status: "EMPTY" })
    })
}catch (err) {
  console.log(err)
  return res.status(424).send({ message: "Erro ao deletar o registro de tarefa" })
}
};




module.exports = {
     getAll,
     postLugares,
     enviarLugares,
     putLugares,
     atualizarLugares,
     deleteLugares
}