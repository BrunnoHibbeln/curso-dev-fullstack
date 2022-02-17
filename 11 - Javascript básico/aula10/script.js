
// Podemos fazer a conversão de string para number dessa maneira:
let inputnota1 = prompt('Digite a primeira nota')
let inputnota2 = prompt('Digite a segunda nota')

let nota1 = parseInt(inputnota1)
let nota2 = parseInt(inputnota2)

/* 

Também podemos fazer de uma forma mais simplificada:

let nota1 = parseInt(prompt('Digite a primeira nota'))
let nota2 = parseInt(prompt('Digite a segunda nota'))

Assim já atribuimos o valor convertido dentro das váriaveis

*/

let mediaMinima = 7
let media = ((nota1 + nota2) / 2)

if (media >= mediaMinima) {
    document.write(`Sua média foi ${media}, passou de ano!`)
} else if (media < mediaMinima) {
    document.write(`Ops, sua média foi ${media}, não passou de ano`)
}

document.write('<br>')

if (media >= mediaMinima && media === 10) {
    document.write('NOSSA! Você foi muito bem, continue assim')
} else if (media >= mediaMinima && media === 9) {
    document.write('Você mandou bem! Vamos tentar chegar a 10?')
} else if (media >= 0 && media <= 3) {
    document.write('Puts, nem tentou!')
}
