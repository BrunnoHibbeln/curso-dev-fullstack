/* 
    
    Desestructuring assigment

*/

// Exemplo de objeto

    const obj = {
        nome: 'Fulano',
        idade: 12
    }

// Como normalmente acessamos dados de um objeto

    // const nome = obj.nome
    // const idade = obj.idade

// Utilizando Desestructuring assigment

    // Dessa forma estamos criando duas váriaveis com exatamente o mesmo nome da propriedade dentro do objeto que queremos atribuir o valor
    const {nome, idade} = obj
    console.log(nome, idade)

function showInScreen(data){
    console.log(data)
}
function showError(){
    console.log('Error')
}
function transformInJson(response){
    return response.json()
}
const loadButton = document.querySelector('#loadButton')

loadButton.onclick = clickingInButton

async function clickingInButton() {

    // Dessa forma o programa irá parar na linha abaixo e esperar a execução ao invés de continuar
    const data = await fetch('https://jsonplaceholder.typicode.com/photos/users') // ao colocar o 'await' devemos sempre ter certeza que ele está na frente da função que TEM que ser um promise.
        .then(transformInJson)
        .catch(showError)

        const { name, email, phone } = data
        console.log(name, email, phone)
}
