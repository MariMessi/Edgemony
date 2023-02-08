const express = require('express')
const { title } = require('process')
const {articles} = require('./articoli')

const app = express()
const PORT = 6000

app.use(express.static('./public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/api/articles', (req, res) => {
    res.status(200).json({success:true, data:articles})
})

app.post('api/articles', (req, res) => {
    const {id, title} = req.body
    if(!id|| !title){
        return res.status(400)
        .json({success:false, msg: 'manca un dato necessario'})
    }
    return res
    .status(200)
    .json({success:true, article: {id:id, title:title}})
})


app.post('/api/article/new', (req, res) => {
    const {id, title} = req.body
     if(!id|| !title){
            return res
            .status(400)
            .json({success:false, msg: 'non trovo un dato'})
        }
            return res
            .status(201)
            .json({success:true, data: [...articles, {id:id, title:title}] })
    
    })


app.put('api/articles/:id', (req, res) => {
    const {id} = req.params
    const {title} =req.body

    const article = articles.find((article) => article.id === Number(id))

    if(!article) {
        return res.status(400)
        .json({success:false, msg: `non c'è nessuno con id: ${id}`})
    }
    const newArticle = articles.map((article) => {
        if(article.id === Number(id)){
            article.title = title
        }
        return article
    })
    res.status(200).json({success:true, data: newArticle})
})




app.listen(PORT, () => {
    console.log(`Server attivo sulla porta ${PORT}`)
})