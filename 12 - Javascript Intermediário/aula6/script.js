let quadrado = document.querySelector('.quadrado')

function minhaFuncao(evento) {
    console.log(evento)
}
    //Tipos de eventos

//quadrado.onclick = minhaFuncao

//quadrado.onmousemove = minhaFuncao

//quadrado.onmouseenter = minhaFuncao

//quadrado.onmouseout = minhaFuncao

//window.addEventListener('resize', minhaFuncao)

window.addEventKistener('keypress', minhaFuncao)