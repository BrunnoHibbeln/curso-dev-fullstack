/* 
    Async/Await

    transformar uma chamada assíncrona para síncrona
*/

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
    const data = await fetch('https://jsonplaceholder.typicode.com/photos') // ao colocar o 'await' devemos sempre ter certeza que ele está na frente da função que TEM que ser um promise.
        .then(transformInJson)
        .catch(showError)

    console.log(data)
}
