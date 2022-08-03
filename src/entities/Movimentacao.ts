import Local from "./Local"
import Patrimonio from "./Patrimonio"

export default interface Movimentacao {
    id: number
    patrimonio: Patrimonio
    local: Local
    usuario: string
    dataMovimentacao: Date
}
