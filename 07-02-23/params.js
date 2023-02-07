const express = require('express')
const app = express()
const PORT = 2800

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/:id', (req, res) => {
    res.send(`L'id indicato è ${req.params.id}`)
})

app.get('/users/:username', (req, res) => {
    res.send(`Lo username indicato è: ${req.params.username}`)
})



app.listen(PORT, () => {
    console.log(`Server attivo sulla porta ${PORT}`)
})