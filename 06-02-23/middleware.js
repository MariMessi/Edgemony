const express = require('express')
const logger = require ('./logger')
const authorize = require ('./auth')
const app = express()



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get ('/api/books', [logger, authorize], (req, res) => {
    res.send('pagina libri')
    console.log(req.user)
})

app.listen(5050, () => {
    console.log(`Server attivo`)
})

