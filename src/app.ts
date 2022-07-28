import express from 'express'

const app = express()

app.get('/', async (req, res, next) => {
    res.json({
        'message': 'ok'
    })
})

//Default 404
app.use(function (req, res) {
    res.status(404)
})

export default app