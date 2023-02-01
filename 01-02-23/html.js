const http = require('http')
const fs = require('fs')


let server = http.createServer((req, res) => {
    if(req.url ==='/articoli')
    res.end('Pagina Articoli')

    else if(req.url === '/commenti')
    res.end('Pagina Commenti')

    else if(req.url === '/utenti')
    res.end('Pagina Utenti')

    else {
        res.writeHead(404)
        res.end('page not found')
    }
})

server.listen(3001)