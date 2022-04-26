const { sum, multiplication } = require('./calculation.js') 
// Com 'require' estamos importando o arquivo 'calculation.js' para a variável 'sum'. Mas para que funcione, precisamos também transformar o arquivo referenciado em um módulo, colocando na última linha do arquivo 'module.exports = sum' com o mesmo nome da variável

const result = multiplication(10, 20)

// const result = sum(10, 20)

console.log(result)

// No caso estamos importando um módulo que nós desenvolvemos, mas também podemos importar módulos que nós instalarmos no nosso projeto