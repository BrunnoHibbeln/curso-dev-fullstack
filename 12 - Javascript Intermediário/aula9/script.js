let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento){
    evento.preventDefault()

    let temErro = false
    let inputNome = document.forms['formCadastro']['nome']
    let inputEmail = document.forms['formCadastro']['email']
    let inputCidade = document.forms['formCadastro']['cidade']

    function mensagemErro(campo, nomeCampo){
        campo.classList.add('inputError')
        let span = campo.nextSibling.nextSibling
        span.innerText = `Digite o ${nomeCampo} corretamente!`
        temErro = true
    }
    function tirarMensagemErro(campo){
        campo.classList.remove('inputError')
        let span = campo.nextSibling.nextSibling
        span.innerText = ''
    }

    if (!inputNome.value) {
        mensagemErro(inputNome, 'nome')
    } else {
        tirarMensagemErro(inputNome)
    }

    if (!inputEmail.value) {
        mensagemErro(inputEmail, 'email')
    } else {
        tirarMensagemErro(inputEmail)
    }

    if (!inputCidade.value) {
        mensagemErro(inputCidade, 'estado')
    } else {
        tirarMensagemErro(inputCidade)
    }

    if (!temErro) {
        formulario.submit()
    }

}