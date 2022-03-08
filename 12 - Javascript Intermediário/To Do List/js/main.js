
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
        this.$checkButtons = document.querySelectorAll('.check')
        this.$inputTask = document.querySelector('#inputTask')
        this.$list = document.querySelector('#list')
        this.$removeButtons = document.querySelectorAll('.remove')
    },

    // Função referenciar os eventos
    bindEvents: function() {
    
        // Por algum motivo, dentro do 'forEach' o 'this' não se referencia ao 'Main' mas ao próprio 'window'. Por esse motivo nós atribuimos o valor do 'this' à variável 'self' fora do 'forEach', para que o 'self' se referencie ao 'Main' e possamos usa-lo dentro do 'forEach'
        
        const self = this
        this.$checkButtons.forEach(function(button){
            button.onclick = self.Events.checkButton_click
        })

        // Colocamos o '.bind(this)' no final para que dentro da função o 'this' se referêncie ao 'Main'. Pois dentro de qualquer evento, o this se referência ao próprio elemento ligado ao evento.
        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

        this.$removeButtons.forEach(function(button){
            button.onclick = self.Events.removeButton_click
        })
    },

    // Definição de eventos
    Events: {
        checkButton_click: function(e){

                       // Mostra o elemento pai do elemento com a classe 'check'
            const li = e.target.parentElement

                          // Verifica se o elemento tem a classe 'done'
            const isDone = li.classList.contains('done')

        // É uma boa prática estruturar o if da seguinte maneira:

            if(!isDone) { // Verificar primeiro a negação

                return li.classList.add('done') // Adicionar o 'return' para que não sejam executados os dois comandos ao mesmo tempo
            }
            li.classList.remove('done')
        },

        inputTask_keypress: function(e){
            const key = e.key
            const value = e.target.value

            if(key === 'Enter') {
                this .$list.innerHTML += `
                
                    <li>
                        <div class="check"></div>
                        <label class="task">
                            ${value}
                        </label>
                        <button class="remove"></button>    
                    </li>   
                `
                e.target.value = ''

                // Aqui precisamos chamar as funções novamente para carregar as variáveis e os eventos pois ao adicionar a <li> acima, estamos modificando a árvore HTML e todos os elementos são carregados novamente, perdendo assim os eventos j arefeênciados.
                this.cacheSelectors()
                this.bindEvents()
            }
        },

        removeButton_click: function(e){
            const li = e.target.parentElement

            li.classList.add('removed')

            // Aqui estamos adicionando a função 'hidden' depois de 300ms pois há uma animação acontecendo no css, que dura exatamante 300ms
            setTimeout(function(){
                li.classList.add('hidden')
            },300)
        }
    }
}

//Iniciar a função 'init' dentro do objeto 'Main'
Main.init()