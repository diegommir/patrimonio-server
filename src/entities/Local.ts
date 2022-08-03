export default interface Local {
    id?: number
    nome?: string
    paiId?: number
    pai?: Local
    usuario?: string
    dataAlteracao?: Date
}
