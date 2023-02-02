const http = require('http')
const libri = require('./libri')

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'application/json'})
    res.end(JSON.stringify(libri))
})

const callback = () => {
    const address = server.address().address;
    const port = server.address().port;
    console.log(`Server in ascolto`)
}

server.listen(5050, `localhost`, callback)
console.log(libri)

