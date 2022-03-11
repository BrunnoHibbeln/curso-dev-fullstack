/* 

LOCAL STORAGE

*/

// Guardar um dado no navegador
localStorage.setItem('tarefa', 'Estudar Javascript')

// Obter dados guardados no navegador
const valor = localStorage.getItem('tarefa')
console.log(valor)

// Criamos um array de objetos
const tarefas = [
    { tarefa: 'estudar js'},
    { tarefa: 'estudar node.js'},
    { tarefa: 'estudar react.js'}
]

// Convertemos o array para Json
const tarefasJson = JSON.stringify(tarefas)

// Incluímos o array convertido no localStorage
localStorage.setItem('tarefas', tarefasJson)

// Atribuimos em uma variável o array de tarefas contido no localStorage, e já convertemos ele novamente para um array de objetos
const listaTarefas = JSON.parse(localStorage.getItem('tarefas'))

console.log(listaTarefas)