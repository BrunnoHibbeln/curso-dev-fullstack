/* 

A função de um escopo é determinar a visibilidade de uma variável, dito isso, temos dois tipos de escopo:

Global
Local

As funções no Javascript criam seu próprio escopo, o que significa que nativamente as váriaveis de uma função não são acessíveis fora dela

*/

function teste(){

    // Escopo local
    const a = 123
    console.log(a)
}

//Escopo Global
const b = 123

teste()