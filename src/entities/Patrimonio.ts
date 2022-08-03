import { SituacaoPatrimonio } from "./SituacaoPatrimonio"
import { TipoPatrimonio } from "./TipoPatrimonio"

export default interface Patrimonio {
    id?: number
    patrimonio?: string
    numSerie?: string
    tipo?: TipoPatrimonio
    marca?: string
    descricao?: string
    observacao?: string
    situacao?: SituacaoPatrimonio
    usuario?: string
    dataCriacao?: Date
    pai?: Patrimonio | null
}
