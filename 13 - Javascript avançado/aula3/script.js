/* 

    Arrow functions - ES6

    As 'arrow functions' nos permitem escrever uma sintaxe de função mais curta

*/

const soma = (a, b) => {
    return a + b
}
/*  
        RETORNO IMPLÍCITO

    const soma = (a, b) => a + b

    Caso a função só retorne alguma coisa, podemos usar a sintaxe acima, sem o uso das chaves
*/

const resultado = soma(1,2)
console.log(resultado)

/* 
    Quando temos somente 1 parâmetro, podemos remover os parenteses

    const teste = parametro1 => parametro1
*/

const botao = document.querySelector('#botao')

botao.onclick = function(){
    console.log(this) // Aqui o this se referencia ao próprio elemento que está no evento
}

/* 
    botao.onclick = () => {
        console.log(this) // Mas aqui o this está se referenciando ao proprio window, pois estamos utilizando a 'arrow function'
    }
*/