/* 
    Promise
*/

function showInScreen(data){
    console.log(data)
}
function showError(){
    console.log('Error')
}

const loadButton = document.querySelector('#loadButton')
loadButton.onclick = () =>
    loadPics()
        .then(showInScreen)
        .catch(showError)    

function loadPics(){
    return new Promise((resolve, reject) => {

        const xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function(){
    
            if(this.readyState == 4 && this.status == 200){
                const response = JSON.parse(this.responseText)
                
                resolve(response)
            }
            if(this.status === 404){
                reject()
            }
        }
        xhttp.open('GET','https://jsonplaceholder.typicode.com/photoss', true)
        xhttp.send()
    })
}
