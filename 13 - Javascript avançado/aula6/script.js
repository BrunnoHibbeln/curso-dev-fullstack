const clientes = [
    { name: 'Thiago', score: 34},
    { name: 'Jaqueline', score: 20},
    { name: 'Sarah', score: 11},
    { name: 'Joao', score: 3},
    { name: 'Alex', score: 80}
]
/* A ideia é termos um objeto com dois arrays 'pass' e 'fail' que serão alimentados com base na variável 'score'

    const avaliacao = {
       pass: [],
       fail: []
    }

    avaliacao.pass = clientes.filter(cliente => cliente.score >= 30)
    avaliacao.fail = clientes.filter(cliente => cliente.score <= 30)

    console.log(avaliacao)

    Dessa forma temos que fazer dois 'filter' um para cada objeto. Mas utilizando o 'reduce' podemos fazer fazer de uma vez só.
*/

// acc = accumulator
// curr = current

// 'curr' será o próprio array clientes e 'acc' será onde o valor será ou não inserido, nesse caso num objeto

const clientesFinal = clientes.reduce((acc, curr) => { // Primeiro parâmetro
    if(curr.score >= 30){

        // Inserindo o valor de 'curr' na propriedade 'pass' do objeto
        acc.pass.push(curr)

    } else {
        // Inserindo o valor de 'curr' na propriedade 'fail' do objeto
        acc.fail.push(curr)
    }

    return acc // Aqui queremos sempre que insira o valor no acumulador com os valores atualizados
},
// Segundo parâmetro
{
    pass: [],
    fail: []
})

console.log(clientesFinal)

const numeros = [1, 2, 3, 4]

const numerosFinal = numeros.reduce((acc, curr) => {

    curr < 4 ? acc += `${curr + 1} - `: acc += `${curr + 1}`
    
    return acc
},'')

console.log(numerosFinal)