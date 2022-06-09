const router = require('express').Router()

// É um padrão sempre definir variáveis de controllers e models com a primeira letra em maiúsculo
const CustomersController = require('../controllers/customers')

// Rotas
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Título teste'
    })
})

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Cadastro de clientes'
    })
})

// Cadastrar novo registro
router.post('/register/add', CustomersController.add)

module.exports = router