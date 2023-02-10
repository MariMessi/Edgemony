const express = require('express')
const router = require('./router')
const hbs = require('hbs')

const app = express()
const PORT = 2000

app.set('view engine', 'hbs')
hbs.registerPartial(__dirname + 'index')
app.use(express.static('./views'))



app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (res, req) =>{
    res.render('about')
})

app.get('/contatti', (req, res) => {
    res.render('contatti')
})

app.get('/formazione', (req, res) => {
    res.render('formazione')
})
app.get('/web_design', (req, res) => {
    res.render('web-design.hbs')
})

app.get('*', (req, res) => {
    res.send ('404 | pagina non trovata')
})



app.listen(PORT, () => {
    console.log(`Server attivo sulla porta ${PORT}`)
})