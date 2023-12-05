const express = require('express')
const contatoRota = require('./contato')
const rota = express.Router()


rota.get('/',(req,res)=>{
    res.send('Estamos online')
})

rota.use('/contato',contatoRota)

module.exports= rota