import Patrimonio from "../entities/Patrimonio"
import PatrimonioModel from "../models/PatrimonioModel"
import Controller from "./Controller"

export default class PatrimonioController extends Controller {
    constructor() {
        super()
    }

    async consultar(patrimonio: Patrimonio): Promise<Patrimonio> {
        const patrimonioModels = await PatrimonioModel.findAll()
        return <Patrimonio>(<unknown>patrimonioModels[0])
    }

    async listar(): Promise<Patrimonio[]> {
        return <Patrimonio[]>await PatrimonioModel.findAll()
    }

    async salvar(patrimonio: Patrimonio) {
        await PatrimonioModel.sync()
        console.log('Patrimonio:', patrimonio)

        if (patrimonio.id) {
            return this.atualizar(patrimonio)
        } else {
            return this.criar(patrimonio)
        }
    }

    private async criar(patrimonio: Patrimonio) {
        patrimonio.usuario = this.usuarioLogado
        const patrimonioModel = PatrimonioModel.build(<any>patrimonio)
        await patrimonioModel.save()
    }

    /**
     * Sempre que o patrimônio sofrer uma atualização, um novo registro 
     * que faz referência ao registro anterior é criado (campo 'pai') e 
     * o status do registro anterior é alterado para 'alterado'.
     * 
     * @param patrimonio 
     */
    private atualizar(patrimonio: Patrimonio) {
        patrimonio.usuario = this.usuarioLogado
    }
}
