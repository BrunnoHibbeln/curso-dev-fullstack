let menuMobile = document.querySelector('.menuMobile')
let menuBotao = document.querySelector('.menuBotao')

function abrirOuFecharMenu() {

    //Adicionar uma classe ao elemento 'classList.add'. Podemos também remover uma classe substituindo o 'add' por 'remove'
    
    if (menuMobile.className === 'menuMobile aberto') {
        menuMobile.classList.remove('aberto')

        menuBotao.innerText = 'Abrir menu'
    } else {
        menuMobile.classList.add('aberto')

        menuBotao.innerText = 'Fechar menu'
    }
}