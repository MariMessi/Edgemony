require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


const subRouter = require('./controllers/routesLibri')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlPArser:true})

const db = mongoose.connection

db.on('error', (error) => console.error(error))

db.once('open', () => console.log('Connesso al database'))

app.use(express.json())


app.use('/api/v1/books', subRouter)

app.listen(3000, () => console.log('Server attivo'))

