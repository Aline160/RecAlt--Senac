const mongoose = require("mongoose")


function connect(){
mongoose.connect(
    DB_URL,{
    useNewUrlParser: true
    })
const connection = mongoose.connection
connection.on('error', () => console.error('Erro ao conectar no mongo'))

connection.once('open', () => console.log('conectamos no mongo!'))

}

module.exports = connect
