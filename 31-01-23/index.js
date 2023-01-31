const http = require('http')
const os = require('os')
const fs = require('fs')

const paginaProdotti = fs.readFileSync('pagina_prodotti.html');
const paginaClienti = fs.readFileSync('pagina_cliente.html');
let utente = os.userInfo();
let piattaforma  = os.platform();
let data = new Date();


let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
</body>
</html>`;
const server = http.createServer((req, res) => {
    if(req.url === '/')
        res.end(messaggio)

        else if(req.url === '/pagina_prodotti')
        res.end(paginaProdotti)

        else if(req.url === '/pagina_cliente')
        res.end(paginaClienti)

        else{
            res.writeHead(404)
            res.end('page not found')
        }
})
server.listen(3001)
console.log(messaggio)
