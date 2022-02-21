
//Aqui uma função bem simples de soma, passando como parâmetro dois numeros
function soma(num1, num2) {

    //Como o nome diz, o "return" serve exclusivamente para retornar alguma coisa depois que a função é chamada
    return num1 + num2
}

//Aqui estamos chamando a função passando (10, 5) como parâmetros e atribuindo o a variável "resultado"
let resultado = soma(10, 5)
console.log(resultado)

function milhasEmKm(milhas) {
    return milhas * 1.6
}

console.log(milhasEmKm(200))