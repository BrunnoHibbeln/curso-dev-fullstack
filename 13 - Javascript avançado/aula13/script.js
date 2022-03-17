/* 
    Fetch
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

const configs = { 
    method: 'GET',
    headers: {}
}

const loadButton = document.querySelector('#loadButton')
loadButton.onclick = () =>
    fetch('https://jsonplaceholder.typicode.com/photos', configs)
        .then(transformInJson)
        .then(showInScreen)
        .catch(showError)
