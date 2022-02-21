
//Em uma "function" devemos chama-la para que os comandos sejam rodados
function escrever() {
    console.log('Hello world!')
}

//Para chamar uma "function":
escrever()

//Podemos também utilizar uma "function" passando um valor quando for chama-la, para que ela faça alguma coisa com esse valor.
function escrever2(mensagem) {
    console.log(mensagem)
}

escrever2('Olá mundo!')

escrever2('Testando novamente')

// Um exemplo básico de uso da "function" usando "<button>"

function escreverButton(mensagem) {
    console.log(mensagem)
}

// Outro exemplo

function escreverNoConsole(nome, mensagem) {
    console.log(`Olá ${nome}, ${mensagem}`)
}

escreverNoConsole('Brunno','seja mundo bem-vindo(a)')
