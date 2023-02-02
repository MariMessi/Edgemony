const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        let html = fs.readFileSync('index.html');
        res.end(html)
    }
    else if(req.url === '/homepage')
    res.end(index.html)

    else if(req.url === '/chi-sono')
    res.end(chi-sono.html)

    else if(req.url === '/api/book'){
        res.writeHead(200, {'Content-Type' : 'application/json'})
        const book = JSON.stringify({
            title: "una vita come tante",
            author: "Hanya Yanagihara"
        });
        res.end(book)
    }

    else {
        res.writeHead(404);
        res.end('page not found');
    }
})

server.listen(5050);
console.log('Server attivo')