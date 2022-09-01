const router = require('express').Router()

const ProductController = require('../controllers/products')

// VERBOS HTTP 4 tipos:
   // GET - obter dados
   // POST - (client)enviar dados e (server)receber dados
   // PUT - atualizar dados
   // DELETE - remover dados

// Ao fazer o request, queremos que funcione da seguinte forma: se queremos os dados de um unico usuario, passamos o id como parametro, se nao passarmos o id o request ira retornar todos os dados. Sendo assim, devemos adicionar o "?" no final para que o "express" entenda que esse parametro e opcional.
router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.remove)

module.exports = router