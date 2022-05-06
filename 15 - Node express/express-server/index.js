
// 'const express' se torna uma função que retorna uma aplicação em 'express'
const express = require('express')
const path = require('path')

// Guardamos a aplicação dentro da constânte 'app'
const app = express()

// O 'MVC (Model View Controller)' basicamente, (Model) é tudo o que vai lidar com o banco de dados, (View) tudo o que lida com a camada de visualização, (Controle) gerenciar e manipular todos os dados.

// Definindo o template engine
app.set('view engine', 'ejs') // Logo após isso, devemos alterar a extensão dos arquivos do diretório 'views' deixando 'index.ejs' para que o template funcione. E como estamos usando um template engine, não precisamos mais fazer a definição dos arquivos estáticos a seguir, pois o próprio template já resolve isso.
                    /* 
                    Definir arquivos estáticos

                        'path.join' usamos para trazer o nome do diretório e concatenar outro valor
                        app.use(express.static(path.join(__dirname, 'views'))) Middleware

                    Definir arquivos públicos

                    */

const publicFolder = path.join(__dirname, 'public')
const expressPublic = express.static(publicFolder)
app.use(expressPublic) 
// Também podemos fazer dessa forma: app.use(express.static(path.join(__dirname, 'public')))


// Rotas
app.get('/', (req, res) => {

    // Para passar valores para a view através das rotas, devemos passar um segundo parâmetro, que deve ser um objeto.
    res.render('index', {
        title: 'Home'
    }) // O primeiro parâmetro é o arquivo index, que devemos deixar sem especificar o diretório ou extensão
})

app.get('/posts', (req, res) => {
    res.render('posts', {
        title: 'Posts',
        posts: [
            {
                title: 'Novidade no mundo de tecnologia',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in esse unde! Facilis perspiciatis dicta quia veritatis dolorem recusandae commodi! Ut quam id quod et labore deleniti sunt perspiciatis nam.'
            },
            {
                title: 'Criando um servidor com node.js',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in esse unde! Facilis perspiciatis dicta quia veritatis dolorem recusandae commodi! Ut quam id quod et labore deleniti sunt perspiciatis nam.'
            },
            {
                title: 'Javascriopt é a linguagem de programação mais usada no mundo',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in esse unde! Facilis perspiciatis dicta quia veritatis dolorem recusandae commodi! Ut quam id quod et labore deleniti sunt perspiciatis nam.'
            }
        ]
    })
})

// Quando o usuário digitar uma rota que não existe, será exibido essa mensagem
app.use((req, res) => { // 404 error (not found)
    res.send('Página não encontrada')
})


// O código acima é chamado de 'middleware' que pode ser executado entre uma requisição e uma execução de rota

// O processo que estiver executando a aplicação que irá determinar em qual porta o servidor será hospedado
const port = process.env.PORT || 8080 // Colocamos o '|| 8080' para caso o valor da porta não for informado, será em um valor padrão, no caso '8080'

// Colocamos a porta onde o servidor será hospedado e logo sem seguida um callback
app.listen(port, () => console.log(`Server is listening on port 8080`))