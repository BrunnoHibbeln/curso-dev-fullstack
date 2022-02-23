
//Seletor por id
document.querySelector('#titulo').innerHTML = '<i>Exemplo</i>';

//Seletor por tag
document.querySelector('a').innerText = '<i>Teste de ancora</i>'
    //Dessa forma o querySelector irá alterar somente a primeira ocorrência. Nesse caso, somente o primeiro <a>

//Selectionado mais de um item POR TAG
let ancoras = document.querySelectorAll('a')

//Permite executar uma função para cara elemento de um array
ancoras.forEach(function(elemento){ //Só é possível usar o 'forEach' com arrays
    elemento.innerHTML = 'teste'
})

//Selecionando mais de um item POR CLASSE
let boxes = document.querySelectorAll('.box')


boxes.forEach(function(box, index){

    box.innerHTML = "box " + (index + 1)
})