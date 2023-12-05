const express = require('express')
const rotas = require('./rotas/index')
const cors = require('cors')

const app = express()
const {sequelize} = require('./models/index')


app.use(express.json())
app.use(cors())
app.use('/',rotas)

sequelize.sync().then(()=>{
    console.log('conectado poraa')
})
app.listen(2,()=>{
    console.log('onfire!')
})