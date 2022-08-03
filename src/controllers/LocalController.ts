import Local from "../entities/Local";
import LocalModel from "../models/LocalModel";
import Controller from "./Controller";

export default class LocalController extends Controller {
    constructor() {
        super()
        LocalModel.sync()
    }

    async listar(pai: Local | null): Promise<Local[]> {
        const locais: Local[] = <Local[]>await LocalModel.findAll({
            where: {
                paiId: pai ? pai.id : null
            },
            include: 'pai'
        })

        return locais
    }

    async consultar(local: Local): Promise<Local> {
        return <Local>await LocalModel.findByPk(local.id)
    }

    async salvar(local: Local): Promise<Local> {
        local.usuario = this.usuarioLogado

        if (local.pai) {
            local.paiId = local.pai.id
        }

        if (local.id) {
            return this.alterar(local)
        } else {
            return this.incluir(local)
        }
    }

    private async alterar(local: Local): Promise<Local> {
        if (!local.id) {
            throw new Error('Não é possível alterar um Local sem id.')
        }

        const localOld = await LocalModel.findByPk(local.id)
        if (!localOld) {
            throw new Error('Não é possível alterar este Local. Local inexistente.')
        }

        localOld.set(local)

        local = <Local>await localOld.save()
        console.log(local)

        return local
    }

    private async incluir(local: Local): Promise<Local> {
        return <Local>LocalModel.create(<any>local)
    }
}