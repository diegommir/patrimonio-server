import { DataTypes, Model } from "sequelize"
import sequelize from "./Connection"

export default class LocalModel extends Model {
}

LocalModel.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'Local',
    createdAt: false,
    updatedAt: 'dataAlteracao'
})

LocalModel.belongsTo(LocalModel, {
    as: 'pai'
})
