/* 
    Callbacks
*/

function showInScreen(data){
    console.log('Show in screen', data)
}

const loadButton = document.querySelector('#loadButton')
loadButton.onclick = () => loadPics(showInScreen)

function loadPics(){

    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(callback){

        if(this.readyState == 4 && this.status == 200){
            const response = JSON.parse(this.responseText)

            if(callback){
                showInScreen(response)
            }
        }
    }
    xhttp.open('GET','https://jsonplaceholder.typicode.com/photos', true)
    xhttp.send()
}
