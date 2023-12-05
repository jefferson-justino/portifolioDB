const {DataTypes} = require('sequelize')

const contato = (sequelize,DataTypes)=>{
    const Contato = sequelize.define('Contato',{
        pessoa:{
            type: DataTypes.INTEGER,
        },
        nome:{
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
        },
        mensagem:{
            type: DataTypes.TEXT,
        }
    },{
        tableName: 'contato'
    })
    return Contato
}

module.exports = contato