const express = require('express')
const {books} = require ('./data')
const app = express()
const PORT = 5050

app.get('/json', (req, res) => {
    res.json(books)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('api/books', (req, res) => {
    const newBook = books.map((book) => {
        const {id, author, title} = book
        return {id, author, title}
    })
    res.json(newBook)
})

app.get('api/books/:bookId', (req, res) => {
    console.log(req.params)
    const{bookId} = req.params

    const singleBook = books.find(
        (book) => book.id === Number(bookId)
    )
    if(!singleBook) {
        return res.status(404).send('Non abbiamo trovato il tuo libro')
    }
    return res.json(singleBook)
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const {search, limit} = req.query
    let filterBook = [...books]
 
    if(search) {
     filterBook = filterBook.filter((book) => {
         return book.title.startsWith(search)
 
     })

   }
   res.status(200).json(filterBook)
 
 
 })

 app.listen(PORT, () => {
    console.log(`Server attivo su ${PORT}`)
 })