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
router.get('/list', CustomersController.listUsers)

module.exports = router