function entrar() {
    nome = window.prompt('Digite seu nome')
    idade = window.prompt('Digite sua idade')


    if (idade > 17 && nome === 'Thomas Anderson') {

        document.querySelector('#h1').innerHTML = 
        `Olá ${nome}, você é MAIOR de idade.`
        document.querySelector('#h2').innerHTML =
        `Você é um personagem do filme Matrix!`

    } else if (idade < 18 && nome === 'Thomas Anderson') {

        document.querySelector('#h1').innerHTML = 
        `Olá ${nome}, você é MENOR de idade.`
        document.querySelector('#h2').innerHTML =
        `Você é um personagem do filme Matrix!`

    } else if (idade > 17) {

        document.querySelector('#h1').innerHTML = 
        `Olá ${nome}, você é MAIOR de idade.`
    } else {
        document.querySelector('#h1').innerHTML = 
        `Olá ${nome}, você é MENOR de idade.`
    }
}