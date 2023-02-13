const express = require('express')
const hbs = require('hbs')
const articoli = require('./articoli')
const session = require('cookie-session')
const bodyParser = require('body-parser')


const app = express()
const PORT = 4000

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({secret: "my session"}))
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('./public'))


app.get('/' , (req, res) =>{
    res.render('home')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.post('/signup'), (req, res) => {
    console.log(`${req.body.name} / ${req.body.password}`)

}

if(!req.body.name || !req.body.password) {
    res.status(400)
    res.render('/signup', {message:'aggiungere tutti i dati richiesti'})   
}

else{
    let name = 'Marilena'
    let password ='9928'
    let userAuth = {name:name, password:password}

    if (name === req.body.name && password == req.body.password) {
        req.session.user = userAuth
        res.redirect('/private')
    }else{
        res.redirect('/warning')
    }
}

app.get('/logout', (req, res) => {
    console.log('hai fatto logout')
    req.session= null

res.redirect('/signup')})




app.listen(PORT, () =>{
    console.log(`Server attivo su ${PORT}`)
})