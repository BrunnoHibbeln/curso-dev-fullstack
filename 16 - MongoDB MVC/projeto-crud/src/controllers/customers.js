const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de clientes'

// Renderizar a página
function index(req, res) {
    res.render('register', {
        title: defaultTitle
    })
}

// Controller - manipula os dados
async function add(req, res) {
    const {
        name,
        age,
        email,
        password
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto
    })

    register.save()
    
    res.render('register', {
        title: defaultTitle,
        message: 'Cadastro realizado com sucesso!!'
    })
}

async function list(req, res) {

    const users = await CustomersModel.find()

    res.render('list', {
        title: 'Listagem de clientes',
        users,
    })
}

async function formEdit(req, res) {
    const { id } = req.query

    const user = await CustomersModel.findById(id)

    res.render('edit', {
        title: 'Editar usuário',
        user
    })
}

async function edit(req, res) {
    const {
        name,
        age,
        email
    } = req.body

    // Nesse caso o 'id' não virá no 'body' ou 'query' e sim no 'params'
    const { id } = req.params

    const user = await CustomersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email

    user.save()

    res.render('edit', {
        title: 'Editar usuário',
        user,
        message: 'Usuário alterado com sucesso!!'
    })
}

async function remove(req, res) {
    const { id } = req.params
    const remove = await CustomersModel.deleteOne({_id: id})

    /* Esse método retorna um objeto com parâmetro 'ok' que terá o valor '0' caso dê erro, ou valor '1' caso a operação seja feita */

    if (remove.ok) {
        res.redirect('/list')
    }
}

module.exports = {
    index,
    add,
    list,
    formEdit,
    edit,
    remove
}