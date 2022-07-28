import { Sequelize, Model, DataTypes } from 'sequelize'

const sequelize = new Sequelize('')

const Patrimonio = sequelize.define('Patrimonio', {
    patrimonio: DataTypes.STRING,
    numSerie: DataTypes.STRING,
    tipo: DataTypes.STRING, //ENUM
    marca: DataTypes.STRING, //ENUM
    descricao: DataTypes.STRING,
    observacao: DataTypes.STRING,
    situacao: DataTypes.STRING //ENUM
})

export default Patrimonio
