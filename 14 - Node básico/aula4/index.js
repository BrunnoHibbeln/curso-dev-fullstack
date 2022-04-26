
// Importando um módulo nativo do node 'file system (fs)'
const fileSystem = require('fs')

// Método do file system para mostrar um arquivo no console, em que o primeiro parâmetro é o próprio diretório do arquivo e o outro é um callback
fileSystem.readFile('./clients.json', function(error, content){

    if(error){
        console.log('Oops, something wrong!')
    } else {
        console.log(JSON.parse(content))
    }
})