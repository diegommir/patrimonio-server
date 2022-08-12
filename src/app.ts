import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import patrimonioRouter from './routes/PatrimonioRouter'
import localRouter from './routes/LocalRouter'

const app = express()
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

router.use('/patrimonio', patrimonioRouter)
router.use('/local', localRouter)

app.use('/api/v1', router)

//Default 404
app.use(function (req, res) {
    res.sendStatus(404)
})

export default app
