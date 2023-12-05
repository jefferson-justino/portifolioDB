const Sequelize = require('sequelize')
// const databaseConfig = require('./database')
// const sequelize = new Sequelize(databaseConfig)

const sequelize = new Sequelize(process.env.DATABASE_URL)
module.exports =sequelize 