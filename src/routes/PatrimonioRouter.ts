import express from 'express'
import PatrimonioController from '../controllers/PatrimonioController'
import Patrimonio from '../entities/Patrimonio'
import { TipoPatrimonio } from '../entities/TipoPatrimonio'

const router = express.Router()
const patrimonioController = new PatrimonioController()

router.get('/', async(req, res, next) => {
    const patrimonios: Patrimonio[] = await patrimonioController.listar()

    res.json({
        patrimonios
    })
})

router.get('/:id', async(req, res, next) => {
    const id: number = parseInt(req.params.id)
    if (!id) {
        return next(new Error('Id é inválido.'))
    }

    const patrimonio: Patrimonio = await patrimonioController.consultar({id})

    if (!patrimonio) {
        return res.sendStatus(404)
    }

    res.json(patrimonio)
})

router.get('/salvar', async (req, res, next) => {
    console.log('Values:', Object.keys(TipoPatrimonio))
    const patrimonio: Patrimonio = {
        patrimonio: '564123',
        tipo: TipoPatrimonio.Monitor,
        numSerie: 'SN654987',
    }

    patrimonioController.salvar(patrimonio)

    res.json({
        'message': 'ok'
    })
})

export default router
