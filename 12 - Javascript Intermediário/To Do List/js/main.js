
// Objeto principal da aplicação, que irá controlar toda a aplicação
const Main = {

    // Lista de tarefas para salvar no local storage
    tasks: [],
    
    // Função para iniciar a aplicação
    init: function() {

        // O 'this' nesse contexto está se referênciando ao 'Main', ou seja, o pai dele

        // Selecionar as viariáveis
        this.cacheSelectors()
        
        // Adicionar os eventos
        this.bindEvents()

        // Carregar itens salvos
        this.getStoraged()

        // Montar itens salvos
        this.buildTasks()
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
            button.onclick = self.Events.checkButton_click.bind(self)
        })

        // Colocamos o '.bind(this)' no final para que dentro da função o 'this' se referêncie ao 'Main'. Pois dentro de qualquer evento, o this se referência ao próprio elemento ligado ao evento.
        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

        this.$removeButtons.forEach(function(button){
            button.onclick = self.Events.removeButton_click.bind(self)
        })
    },

    // Armazenar tarefas no local Storage
    getStoraged: function(){
        const tasks = localStorage.getItem('tasks')

        if (tasks){
            // O primeiro 'tasks' se refere ao array criado no inicio da aplicação, já o segundo se refere à vaiável criada acima contendo os valores do localStorage
            this.tasks = JSON.parse(tasks)
        } else {
            localStorage.setItem('tasks', JSON.stringify([]))
        }

    },

    // Retornar a estrutura HTML de cada novo item
    getTaskHtml: function(task, isDone){
        return `    
            <li class="${isDone ? 'done' : ''}" data-task="${task}">
                <div class="check"></div>
                <label class="task">
                    ${task}
                </label>
                <button class="remove"></button>    
            </li>   
        `
    },

    insertHTML: function(element, htmlString) {
        element.innerHTML += htmlString
    
        this.cacheSelectors()
        this.bindEvents()
    },

    // Construir as tarefas salvas no local storage
    buildTasks: function(){

        let html = ''

        this.tasks.forEach(item => {
            html += this.getTaskHtml(item.task, item.done)
        })
        
        this.insertHTML(this.$list, html)
    },

    // Definição de eventos
    Events: {
        checkButton_click: function(e){

                       // Mostra o elemento pai do elemento com a classe 'check'
            const li = e.target.parentElement
            const value = li.dataset['task']

                          // Verifica se o elemento tem a classe 'done'
            const isDone = li.classList.contains('done')

            const newTasksState = this.tasks.map(item => {
                if (item.task === value) {
                  item.done = !isDone
                }
        
                return item
              })
        
            localStorage.setItem('tasks', JSON.stringify(newTasksState))

            // É uma boa prática estruturar o if da seguinte maneira:
            if(!isDone) { // Verificar primeiro a negação

                return li.classList.add('done') // Adicionar o 'return' para que não sejam executados os dois comandos ao mesmo tempo
            }
            li.classList.remove('done')
        },

        inputTask_keypress: function(e){
            const key = e.key
            const value = e.target.value
            const isDone = false

            if(key === 'Enter') {

                const taskHtml = this.getTaskHtml(value, isDone)

                this.insertHTML(this.$list, taskHtml)

                e.target.value = ''

                // Carregar os itens salvos no local storage e já converte-los para objetos
                const savedTasks = localStorage.getItem('tasks')
                const savedTasksObj = JSON.parse(savedTasks)

                const obj = [
                    { task: value, done: isDone },
                    ...savedTasksObj,
                ]

                const jsonTasks = JSON.stringify(obj)
                this.tasks = obj
                localStorage.setItem('tasks', jsonTasks)
            }
        },

        removeButton_click: function(e){
            const li = e.target.parentElement

            // Aqui pegamos o 'value' do item através do atributo que passamos pelo elemento referenciado pela função, no caso o '<button>', com o parâmetro 'dataset['task']'
            const value = li.dataset['task']

            const newTasksState = this.tasks.filter(item => item.task !== value)

            localStorage.setItem('tasks', JSON.stringify(newTasksState))
            this.tasks = newTasksState

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