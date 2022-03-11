/* 
    JSON - Javascript Object Notation

    Padrão para transitar informações de um sistema para outro
 */

// Objeto em Javascript
const objeto1 = {
    nome: 'Brunno',
    idade: 21
}

// Objeto em Json
const objeto2 = {
    'nome': 'Brunno',
    'idade': 21
}

// Converter código Js para Json

const objetoJson = JSON.stringify(objeto1)
console.log(objetoJson)

// Converter código Json para Js

const objetoJs = JSON.parse(objetoJson)
console.log(objetoJs)