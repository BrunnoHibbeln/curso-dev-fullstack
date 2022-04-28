
// 'const express' se torna uma função que retorna uma aplicação em 'express'
const express = require('express')

// Guardamos a aplicação dentro da constânte 'app'
const app = express()

// Rota padrão
app.get('/', (req, res) => {
    res.send('Hello world')
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