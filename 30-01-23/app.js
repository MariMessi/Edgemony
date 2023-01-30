const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/pagina-iniziale')
     res.end('Pagina iniziale')
    else if(req.url === '/studenti')
     res.end('studenti') 
    else if(req.url === '/corsi')
     res.end('corsi')
    else{
        res.writeHead(404)
        res.end('pagina non trovata')
    }
})

server.listen(3000)

// Percorsi barra di ricerca 
//localhost:3000/pagina-iniziale
//localhost:3000/studenti
//localhost:3000/corsi