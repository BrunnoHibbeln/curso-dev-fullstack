/* 
    AJAX - criada em 2005
    (Asynchronous JavaScript And XML)

    É uma técnica para fazer requisições em servidores
 */

const xhttp = new XMLHttpRequest()

// GET(Pedir de dados)
// POST(Envio de dados)

xhttp.onreadystatechange = function(){

    // (this.readyState == 4) quando terminar a requisição
    // (this.status == 200) quando a requisição for feita com sucesso
    if(this.readyState == 4 && this.status == 200){
        // Resposta da requisição já convertida
        const response = JSON.parse(this.responseText)

        // Mostrar o array
        console.log(response)
    }
}

// Como fazer uma requisição
xhttp.open('GET','https://jsonplaceholder.typicode.com/photos', true) // o último parâmetro é se nós queremos que o método seja síncrona(true) ou assíncrona(false)
xhttp.send()
