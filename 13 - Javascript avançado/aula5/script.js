const clientes = [
    { name: 'Thiago', lastname: 'Medeiros', age: 34},
    { name: 'Raphael', lastname: 'Silva', age: 30},
    { name: 'Matheus', lastname: 'Araujo', age: 12}
]

// O filter irá passar por todo o array e irá implementar ou não com base em valores boleanos
const clientesMaiores = clientes.filter(cliente => {

/* Podemos usar um if ternário:

    return cliente.age >= 18 ? true : false 

    Ou simplesmente:

    return cliente.age >= 18
*/
})

/* 
    Para simplificar ainda mais, podemos usar a função com retorno implícito:

    const clientesMaiores = clientes.filter(cliente => cliente.age >= 18)
*/

console.log(clientesMaiores )