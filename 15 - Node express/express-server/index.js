
// 'const express' se torna uma função que retorna uma aplicação em 'express'
const express = require('express')
const path = require('path')
const fs = require('fs')

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

// Para receber dados de um formulário pelo método POST, devemos configurar o servidor para receber esses dados através de um middleware
app.use(express.urlencoded({ extented: true })) // Esse middleware nos permite receber dados (de formulários) via POST

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
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in esse unde! Facilis perspiciatis dicta quia veritatis dolorem recusandae commodi! Ut quam id quod et labore deleniti sunt perspiciatis nam.',
                stars: 3

            },
            {
                title: 'Criando um servidor com node.js',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in esse unde! Facilis perspiciatis dicta quia veritatis dolorem recusandae commodi! Ut quam id quod et labore deleniti sunt perspiciatis nam.',
                stars: 1
            },
            {
                title: 'Javascriopt é a linguagem de programação mais usada no mundo',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in esse unde! Facilis perspiciatis dicta quia veritatis dolorem recusandae commodi! Ut quam id quod et labore deleniti sunt perspiciatis nam.',
                stars: 2
            }
        ]
    })
})

app.get('/cadastro-posts', (req, res) => {
    const { cadastro } = req.query

    res.render('cadastro-posts', {
        title: 'Cadastrar post',
        cadastrado: cadastro,
    })
})

app.post('/salvar-post', (req, res) => {
    
    // Como configuramos um middleware, para receber os dados do formulário via POST, agora podemos acessar esses dados que são armazenados no 'req' dentro de um objeto chamado 'body'
    
    const { titulo, texto } = req.body

    /* Criando um diretório para salvar os dados dentro do arquivo "posts.json" */

    // Como o método 'readFile' é assíncrono e não vamos precisar utilizar um callback, devemos torna-lo síncrono, para que somente retorne o conteúdo do arquivo. Assim, colocamos o conteúdo dentro da variável 'data'
    const data = fs.readFileSync('./store/posts.json')

    // Colocamos o valor de 'data' dentro de 'post' convertendo o valor de "string" para "json"
    const posts = JSON.parse(data)

    posts.push({
        titulo,
        texto,
    })
        
    // Convertendo posts novamente em "string"
    const postsString = JSON.stringify(posts)

    // O primeiro parâmetro é o caminho do arquivo e o segundo é o conteúdo que queremos inserir nesse mesmo arquivo
    fs.writeFileSync('./store/posts.json', postsString)

    // Quando o formulário for enviado, a página irá para a rota depois será redirecionada novamente para a mesma página. Mas vamos passar um parâmetro pelo url para podermos verificar e exibir uma mensagem de confirmação para o usuário. Passamos o parâmetro após o "?". 
    res.redirect('/cadastro-posts?cadastro=1')
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