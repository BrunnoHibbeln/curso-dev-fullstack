nome = window.prompt('Digite seu nome')

idade = window.prompt('Digite sua idade')

if (idade > 17 && nome === 'Thomas Anderson') {
    alert(`Olá ${nome}, você é MAIOR de idade.
    Você é um personagem do filme Matrix!`)
} else if (idade < 18 && nome === 'Thomas Anderson') {
    alert(`Olá ${nome}, você é MENOR de idade.
    Você é um personagem do filme Matrix!`)
} else if (idade > 17) {
    alert(`Olá ${nome}, você é MAIOR de idade`)
} else {
    alert(`Olá ${nome}, você é MENOR de idade`)
}