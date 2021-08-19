const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const http = require('http')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', async (req, res) => {
    res.send('Hiii')
})

const server = http.createServer(app);

server.listen(3000)
console.log("Servidor rodando na porta " + port)