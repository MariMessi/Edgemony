const express = require('express')
const hbs = require('hbs') //templete


const app = express()
const PORT = 4000


app.set('view engine', 'hbs') //le views sono le interfacce che andiamo a creare
hbs.registerPartials(__dirname + '/views/partials');//facciamo una registrazione
app.use(express.static('./public'))

const myPreferencies = {
    pet: "cane",
    color: "verde",
    season: "autunno",
}

app.get('/', (req, res) => {
    res.render('home', {
        nome: "Marilena",
        titolo: "Corso di Node.js",
        pet: "gatto",
        preferencies: myPreferencies,

    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        titolo : "Corso di Node.js",
    })
})

app.get('/mi_presento', (req, res) => {
    res.render('mi_presento', {
        nome : "Marilena",
        titolo: "Presentazioni"
    })
})


app.get('/login', (req, res) => {
    res.render('Effettua il login', {
        titolo: "Login",
    })
})







app.listen(PORT, () => {
    console.log(`Server attivo sulla porta ${PORT}`)
})