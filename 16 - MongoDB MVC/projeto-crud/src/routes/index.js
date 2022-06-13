const router = require('express').Router()

// É um padrão sempre definir variáveis de controllers e models com a primeira letra em maiúsculo
const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

// Rotas
router.get('/', IndexController.index)

router.get('/register', CustomersController.index)

// Cadastrar novo registro
router.post('/register/add', CustomersController.add)

// Listar
router.get('/list', CustomersController.list)

// Editar
router.get('/edit', CustomersController.formEdit) // Recebe os dados para serem editados

// Como vamos enviar os dados passando um 'id' pelo '/', devemos informar o envio desse parâmetro '/edit/:id'
router.post('/edit/:id', CustomersController.edit) // Altera os dados no banco

module.exports = router