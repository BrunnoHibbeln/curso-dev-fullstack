const clientes = [
    { name: 'Thiago', lastname: 'Medeiros'},
    { name: 'Raphael', lastname: 'Silva'},
    { name: 'Matheus', lastname: 'Araujo'}
]

let clientesFinal = []

clientes.forEach(function(cliente){
    clientesFinal.push(cliente.name + ' ' + cliente.lastname)
})

console.log(clientesFinal)

// O map serve para percorrer e criar arrays
const clientesFinalMap = clientes.map((cliente) => {
    return cliente.name + ' ' + cliente.lastname
})

/*
    Já que usamos uma arrow function, também podemos usar o retorno implícito

    const clientesFinalMap = clientes.map(cliente => return cliente.name + ' ' + cliente.lastname)
*/

console.log(clientesFinalMap)