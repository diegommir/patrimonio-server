export default interface Local {
    id: number
    nome: string
    pai: Local | null
    usuario: string
    dataAlteracao: Date
}
