import express from 'express'
import bodyParser from 'body-parser'
import patrimonioRouter from './routes/PatrimonioRouter'
import localRouter from './routes/LocalRouter'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/patrimonio', patrimonioRouter)
app.use('/local', localRouter)

//Default 404
app.use(function (req, res) {
    res.sendStatus(404)
})

export default app