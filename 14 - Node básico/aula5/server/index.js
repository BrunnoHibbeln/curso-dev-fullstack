const http = require('http')
const fs = require('fs')

// Método para criar um servidor
const server = http.createServer(function(request, response){

    // request == Mostrar o que está vindo da requisição
    // response == Responder essa requisição

    if(request.url == '/') {

        fs.readFile('../client/index.html', function(error, content){
            response.end(content)
        })
    }

    if(request.url == '/test'){
        response.end('Test')
    }
})

// Definir a porta em que o server será criado
server.listen(8080)

// Somente uma mensagem de aviso que será exibida no terminal
console.log('Running server on port 8080')