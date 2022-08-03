import { Model, DataTypes } from 'sequelize'
import { SituacaoPatrimonio } from '../entities/SituacaoPatrimonio'
import { TipoPatrimonio } from '../entities/TipoPatrimonio'
import sequelize from './Connection'

export default class PatrimonioModel extends Model {
}

PatrimonioModel.init({
    patrimonio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numSerie: DataTypes.STRING,
    tipo: {
        type: DataTypes.STRING,
        values: Object.keys(TipoPatrimonio),
        allowNull: false
    },
    marca: DataTypes.STRING,
    descricao: DataTypes.STRING,
    observacao: DataTypes.STRING,
    situacao: {
        type: DataTypes.STRING,
        values: Object.keys(SituacaoPatrimonio),
        defaultValue: SituacaoPatrimonio.Ativo
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pai: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: PatrimonioModel,
            key: 'id'
        }
    },
}, {
    sequelize,
    tableName: 'Patrimonio',
    createdAt: 'dataCriacao',
    updatedAt: false
})
