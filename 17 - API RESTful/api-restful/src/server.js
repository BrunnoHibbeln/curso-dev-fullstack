const express = require('express')
//const path = require('path')

//const db = require('./database')
const routes = require('./routes/routes')

const app = express()

// Chamar a função que conecta no banco
//db.connect()

// Habilita o server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))

// Definindo as rotas
app.use('/api', routes)

// Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))