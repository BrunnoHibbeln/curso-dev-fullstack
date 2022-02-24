let botaoTeste = document.querySelector('#botaoTeste')

//Formas de utilizar eventos
botaoTeste.onclick = function() {
    console.log('Mensagem 1')
}

botaoTeste.onclick = function() {
    console.log('Mensagem 2')
}

//No exemplo acima temos dois eventos de 'onclick' pro mesmo elemento. Nesse caso evento funciona da mesma forma que atribuição à variáveis, sendo assim, a 'mensagem 2' irá sobrescrever a 'mensagem 1'

    // addEventListener

    //O primeiro parâmetro é o evento que queremos aplicar, o segundo é a função que será executada
    botaoTeste.addEventListener('click', function(){
        console.log('teste 1')
    })

    botaoTeste.addEventListener('click', function(){
        console.log('teste 2')
    })
   //Diferente do primeiro exemplo, agora ao invés de estarmos ATRIBUINDO novos eventos ao elemento, estamos ADICIONANDO novos eventos, por conta disso nenhum evento será sobreescrito.

//Ao invés de adicionar funcões anônimas, também podemos adicionar funções criadas anteriormente:

function clickBotao () {
    console.log('Teste de mensagem')
}

botaoTeste.addEventListener('click', clickBotao)
//Repare que não estamos chamando a função do modo tradicional com '()' no final. Pois caso coloquemos, a função será executada antes mesmo do evento de click acontecer. 

//Também temos a possibilidade de remover um evento, caso por exemplo, queremos que um evento seja chamado somente uma vez.
    
function clickBotao2 () {
    console.log('Teste de mensagem2')

    botaoTeste.removeEventListener('click', clickBotao2)
}

botaoTeste.addEventListener('click', clickBotao2)

//Outro exemplo de remoção de evento:

    let count = 0

    function contador(){
        count++

        console.log(`Testando contador ${count}`)

        if (count >= 5){
            botaoTeste.removeEventListener('click', contador)
        }
    }
    botaoTeste.addEventListener('click', contador)
    //Basicamente a função faz com que quando o evento é chamado 5 vezes, ele é removido