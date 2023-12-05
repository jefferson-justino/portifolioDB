const Sequelize = require('sequelize')
require('dotenv').config();
// const databaseConfig = require('./database')
// const sequelize = new Sequelize(databaseConfig)
const sequelize = new Sequelize(process.env.DATABASE_URL,{ 
    dialectOptions: {
        ssl: {
          require: true, // indica que o SSL é necessário
          rejectUnauthorized: false // permite a conexão mesmo se não for possível verificar o certificado SSL
        }
      } 
}) 

module.exports =sequelize  