
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
    res.render('index') // Aqui também podemos somente deixar o nome do arquivo, sem o diretório
})

app.get('/posts', (req, res) => {
    res.render('posts')
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