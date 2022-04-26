function sum(n1,n2){
    return n1 + n2
}

function multiplication(n1,n2){
    return n1 * n2
}

// Como estamos exportando mais de uma função, devemos exportar um objeto com as funções
module.exports = {
    sum,
    multiplication
}