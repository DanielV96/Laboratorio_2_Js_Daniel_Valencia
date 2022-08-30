import { Todo } from './todo.class'

export class Todolist {
  constructor() {
    // this.todos = []
    this.cargarLocalStorage()
  }

  nuevoTodo(todo) {
    this.todos.push(todo)
    this.guardarLocalStorage()
  }
  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== parseInt(id))
    this.guardarLocalStorage()
  }

  marcarCompletado(id) {
    for (const todo of this.todos) {
      if (todo.id === parseInt(id)) {
        todo.completado = !todo.completado
        this.guardarLocalStorage()
        break
      }
    }
  }

  eliminarComplementados() {
    this.todos = this.todos.filter((todo) => !todo.completado)
    this.guardarLocalStorage()
  }

  guardarLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todos))
  }

  cargarLocalStorage() {
    // if (localStorage.getItem('todo')) {
    //   this.todo = JSON.parse(localStorage.getItem('todo'))
    // } else {
    //   this.todos=[]
    // }

    this.todos = localStorage.getItem('todo')
      ? JSON.parse(localStorage.getItem('todo'))
      : []

    this.todos = this.todos.map((Object) => Todo.fromJson(Object))
  }
}
