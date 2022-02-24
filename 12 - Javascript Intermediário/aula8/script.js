
let contador = document.querySelector('#contador')
let count = 0

// O interval irá executar a função à cada tempo que for determinado. Nesse caso 1 segundo(1000ms).
let intervalo = setInterval(function(){ // Atribuimos o 'interval' à variável 'intervalo' para que possamos pausa-la caso necessário.
    count++

    contador.innerText = count
},1000)

let botaoPausar = document.querySelector('#botaoPausar')

botaoPausar.addEventListener('click', function(){

    //Comando para limpar o interval
    clearInterval(intervalo)
})