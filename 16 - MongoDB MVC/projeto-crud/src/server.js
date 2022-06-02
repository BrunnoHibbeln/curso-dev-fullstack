const express = require('express')
const path = require('path')
const db = require('./database')

const app = express()

// Chamar a função que conecta no banco
db.connect()

// Definindo o template engine
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))

// Definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// Habilita o server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))

// Rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Título teste'
    })
})

// 404 Error (not found)
app.use((req, res) => {
    res.send(alert('Página não encontrada'))
})

// Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))