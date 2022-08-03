import express from 'express'
import LocalController from '../controllers/LocalController'
import Local from '../entities/Local'

const router = express.Router()
const localController = new LocalController()

router.get('/', async (req, res) => {
    const locais: Local[]  = await localController.listar(null)
    res.json({
        locais
    })
})

router.get('/pai/:idPai', async (req, res, next) => {
    const idPai: number = parseInt(req.params.idPai)
    if (!idPai) {
        return next(new Error('Id do pai é inválido.'))
    }

    const pai: Local = {
        id: idPai
    }
    const locais: Local[]  = await localController.listar(pai)
    res.json({
        locais
    })
})

router.get('/:id', async (req, res, next) => {
    const id: number = parseInt(req.params.id)
    if (!id) {
        return next(new Error('Id é inválido.'))
    }

    const local: Local = await localController.consultar({ id })

    if (!local) {
        return res.sendStatus(404)
    }
    res.json(local)
})

router.post('/', async (req, res) => {
    let local: Local = <Local>req.body

    local = await localController.salvar(local)

    res.status(201)
    res.json(local)
})

export default router
