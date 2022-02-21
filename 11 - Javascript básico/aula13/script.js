let clientes = [
    {
        nome: 'Brunno',
        idade: 21,
        linguagens: ['Javascript', 'Python']
    },
    {
        nome: 'Thiago',
        idade: 25,
        linguagens: ['C#', 'C++', 'C']
    },
    {
        nome: 'Fulano',
        idade: 30,
        linguagens: ['Java', 'Perl', 'Typescript']
    }
]
/* 

Esse for irá percorrer todo o array e vai armazenar no objeto cliente

for(let i = 0; i < clientes.length; i++) {
    console.log(clientes[i].nome)
}
*/

let htmlClientes = ''

// O 'of' faz com que ele se comporte exatamente como no for anterior, mas de modo mais simplificado
for(let cliente of clientes) {

    let listaLinguagens = ''

    for(let linguagem of cliente.linguagens) {
        listaLinguagens += `<li>${linguagem}</li>`
    }

    htmlClientes += `
    <li>
        <b>Nome:</b> ${cliente.nome} <br>
        <b>Idade:</b> ${cliente.idade} <br>
        <b>Linguagens:</b><br>
        <ul>
            ${listaLinguagens}
        </ul>
    </li>`
}

document.querySelector('#listaClientes').innerHTML = htmlClientes

