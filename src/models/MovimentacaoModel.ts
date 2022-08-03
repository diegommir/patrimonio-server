import { DataTypes, Model } from "sequelize"
import sequelize from "./Connection"
import LocalModel from "./LocalModel"
import PatrimonioModel from "./PatrimonioModel"

export default class MovimentacaoModel extends Model {
}

MovimentacaoModel.init({
    patrimonio: {
        type: DataTypes.INTEGER,
        references: {
            model: PatrimonioModel,
            key: 'id'
        }
    },
    local: {
        type: DataTypes.INTEGER,
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
    tableName: 'Movimentacao',
    createdAt: 'dataMovimentacao',
    updatedAt: false
})
