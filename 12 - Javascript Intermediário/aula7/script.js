// Botao
let botaoCadastrar = document.querySelector('#botaoCadastrar')

// Div que irá mostrar a mensagem
let toast = document.querySelector('.toast')

//Evento de click no botão
botaoCadastrar.addEventListener('click', function(){
    // Texto digitado pelo usuário
    let text = document.querySelector('#text').value

    // Insere o texto que será mostrado
    toast.innerText = `A tarefa ${text} foi cadastrada com sucesso!`

    // Atribui a classe 'visible' à '<div>' para ela aparecer
    toast.classList.add('visible')

    // Função que será executada somente depois do tempo determinado. Nesse caso 5 segundos(5000ms).
    setTimeout(function(){

        // Remove a classe 'visible' à '<div>' para ela desaparecer
        toast.classList.remove('visible')
    }, 5000) 
})