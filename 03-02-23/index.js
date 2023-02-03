const express = require('express')

const app = express()
const PORT = 6090

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/canto', (req, res) => {
    res.sendFile(__dirname + '/public/canto.html')
})

app.get('/diaframma', (req, res) => {
    res.sendFile(__dirname + '/public/diaframma.html')
})

app.get('*', (req, res) => {
    res.send('404| Page Not Found')
    console.log(res)
})

app.listen(PORT, () => {
    console.log(`Server attivo su ${PORT}`)
})