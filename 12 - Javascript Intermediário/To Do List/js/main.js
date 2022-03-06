
// Objeto principal da aplicação, que irá controlar toda a aplicação
const Main = {
    
    // Função para iniciar a aplicação
    init: function() {

        // O 'this' nesse contexto está se referênciando ao 'Main', ou seja, o pai dele

        // Selecionar as viariáveis
        this.cacheSelectors()
        
        // Adicionar os eventos
        this.bindEvents()
    },
    
    // Função para selecionar os elementos no HTML e armazena-los em uma variável
    cacheSelectors: function() {

        // Aqui também usamos o 'this' na criação de variáveis para que possamos usa-las em outras funções do 'Main'
        this.checkButtons = document.querySelectorAll('.check')
    },

    // Função referenciar os eventos
    bindEvents: function() {
    
        // Por algum motivo, dentro do 'forEach' o 'this' não se referencia ao 'Main' mas ao próprio 'window'. Por esse motivo nós atribuimos o valor do 'this' à variável 'self' fora do 'forEach', para que o 'self' se referencie ao 'Main' e possamos usa-lo dentro do 'forEach'
        
        const self = this
        this.checkButtons.forEach(function(button){
            button.onclick = self.Events.checkButton_click
        })
    },

    // Definição de eventos
    Events: {
        checkButton_click: function(){alert('ok')}
    }
}

//Iniciar a função 'init' dentro do objeto 'Main'
Main.init()