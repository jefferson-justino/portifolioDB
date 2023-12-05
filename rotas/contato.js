const express = require('express')
const rota = express.Router()

const{contato} = require('../models/index')

rota.get('/:pessoa', async(req,res)=>{
    const contatos = await contato.findAll({
        where:{
            pessoa: req.params.pessoa
        }
    })
    res.json(contatos)
})

rota.post('/',async(req,res)=>{
    const{pessoa,nome,email,mensagem} =req.body
    await contato.create({pessoa,nome,email,mensagem})
    res.send('Você entrou em contato!')
})
module.exports =rota