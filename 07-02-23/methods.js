const express = require('express')
const {users} = require('./users')
const app = express()
const PORT = 2800

app.use(express.static('./public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/api/users', (req, res) => {
    res.status(200).json({success:true, users:users})

})

app.post('/api/users', (req,res) => {
    const {id, username} = req.body

    if(!id || !username){
        return res
        .status(400)
        .json({success:false, msg: 'Dati non trovati'})
    }
    return res
    .status(200)
    .json({success: true, user: {id:id, username:username}})
})

app.listen(PORT, () =>{
    console.log(`Server in ascolto sulla porta ${PORT}`)
})