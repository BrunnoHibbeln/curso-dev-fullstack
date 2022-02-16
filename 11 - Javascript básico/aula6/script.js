/* 

String
Number
Boolean
Array
Object
Undefined
null

*/

//String
let nome = 'Brunno'

//String concatenada
let sobrenome = 'Hibbeln'

    //Forma antiga
    console.log(nome + ' ' + sobrenome)

    //Forma atual
    console.log(`${nome} ${sobrenome}`)

//Number - Int
let idade = 35
console.log(35 + 10)

//Number - Float
let porcentagem = 10.2
console.log(porcentagem + '%')

//Boolean (true or false)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = true
console.log(menorDeIdade)

//Array
let habilidades = ['Javascript', 'PHP', 'Python']

    //Para mostrar todos os itens que o array tem
    console.log(habilidades)

    //Para selecionar o item do array (Começando pelo 0)
    console.log(habilidades[0]) //Caso a posição não exista, retornará undefined

    //Para mostrar a quantidade de itens que o array tem
    console.log(habilidades.length)

//Object
let pessoa = {
    nome: 'Brunno', //String
    sobrenome: 'Hibbeln', //String
    idade: 21, //Number
    habilidades: ['C++', 'C#', 'Python'] //Array
}
    //Mostrar tudo o que há no objeto
    console.log(pessoa)

    //Selecionar o que será mostrado, instânciando o objeto
    console.log(pessoa.idade)

    //undefined
    let endereco
    console.log(endereco)

    //null
    let cidade = null
    console.log(cidade)

// Json (Javascript Object Notation)