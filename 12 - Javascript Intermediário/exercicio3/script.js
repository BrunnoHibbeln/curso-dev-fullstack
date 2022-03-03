const cidades = {

    sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],

    rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
}
let form = document.querySelector('#form')
let estado = document.querySelector('#estado')
let divEstado = document.querySelector('.invisible')
let toast = document.querySelector('.toast')

let htmlCidades = '' 

estado.onchange = function(){

    if(estado.value === 'São paulo'){

        divEstado.classList.remove('invisible')
        htmlCidades = '<option value"">-- Selecione --</option>'

        for(let cidade of cidades.sp) {
            htmlCidades += `
                <option value"${cidade}">${cidade}</option>
            `
        }
        document.querySelector('#cidade').innerHTML = htmlCidades

    } else if(estado.value === 'Rio de Janeiro'){

        divEstado.classList.remove('invisible')
        htmlCidades = '<option value"">-- Selecione --</option>' 

        for(let cidade of cidades.rj) {
            htmlCidades += `
                <option value"${cidade}">${cidade}</option>
            `
        }
        document.querySelector('#cidade').innerHTML = htmlCidades
    } else{
        divEstado.classList.add('invisible')
    }
}

form.onsubmit = function(evento){
    evento.preventDefault()

    let temErro = false

    let inputEstado = document.forms['form']['estado']
    let inputCidade = document.forms['form']['cidade']
    
    function mensagemErro(campo){
        campo.classList.add('inputError')
        let span = campo.nextSibling.nextSibling
        span.innerText = `Selecione algum campo!`
        temErro = true
    }
    function tirarMensagemErro(campo){
        campo.classList.remove('inputError')
        let span = campo.nextSibling.nextSibling
        span.innerText = ''
    }

    if (!inputCidade.value || inputCidade.value === '-- Selecione --') {
        mensagemErro(inputCidade)
    } else {
        tirarMensagemErro(inputCidade)
    }

    if (!temErro) {
        form.submit()

        toast.innerText = `Registro incluído com sucesso!!`
        toast.classList.add('visible')

        setTimeout(function(){
            toast.classList.remove('visible')
        },5000) 
    }
}