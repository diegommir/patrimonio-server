import { DataTypes, Model } from "sequelize"
import sequelize from "./Connection"

export default class LocalModel extends Model {
}

LocalModel.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pai: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: LocalModel,
            key: 'id'
        }
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
