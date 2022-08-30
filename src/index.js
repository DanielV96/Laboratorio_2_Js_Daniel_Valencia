import './styles.css'
import { Todo, Todolist } from './classes/index.js'
import { crearTodoHtml } from './js/componentes'

export const todoList = new Todolist()

// const tarea = new Todo('Aprender JavaScript')
// todoList.nuevoTodo(tarea)
// tarea.completado = false

// crearTodoHtml(tarea)

todoList.todos.forEach((todo) => crearTodoHtml(todo))
