const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

// Chamar a função que conecta no banco
db.connect()

// Habilita o CORS

   /*
   Para permitir qualquer endereco:
      app.use(cors())

   Para permitir somente um endereco:
      app.use(cors({
         origin: 'http://127.0.0.1:5500'
      }))
   */
   
   // Para permitir mais de um endereco:
   const allowedOrigins = [
      'http://www.app.com.br',
      'http://127.0.0.1:5501'
   ]

   app.use(cors({
      origin: function(origin, callback) {
         let allowed = true

         // Mobile app
         if (!origin) allowed = true // Como apps mobile estao rodando em celulares e nao em servidores, vira sem um 'origin'

         // Verificar se o 'origin' nao esta dentro do 'allowedOrigins' que sao os 'origins' que nos permitimos
         if (!allowedOrigins.includes(origin)) allowed = false

         // No primeiro parametro podemos passar uma mensagem, mas colocamos 'null' para que seje exibido a mensagem padrao
         callback(null, allowed)
      }
   }))
   

// Habilita server para receber dados (json)
app.use(express.json())

// Definindo as rotas
app.use('/api', routes)

// Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))