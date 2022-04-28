
// 'const express' se torna uma função que retorna uma aplicação em 'express'
const express = require('express')

// Guardamos a aplicação dentro da constânte 'app'
const app = express()

// O processo que estiver executando a aplicação que irá determinar em qual porta o servidor será hospedado
const port = process.env.PORT || 8080 // Colocamos o '|| 8080' para caso o valor da porta não for informado, será em um valor padrão, no caso '8080'

// Colocamos a porta onde o servidor será hospedado e logo sem seguida um callback
app.listen(port, () => console.log(`Server is listening on port 8080`))