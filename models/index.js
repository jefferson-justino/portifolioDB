const Sequelize = require('sequelize')
const sequelize = require('../banco/sequelize')

const Contato = require('./contato')

const contato = Contato(sequelize, Sequelize.DataTypes)

const db = {
    sequelize,contato
}
module.exports = db
