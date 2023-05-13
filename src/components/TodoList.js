import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos, updateTodo, deleteTodo}) {

  return (
    <div>
      <h3>My Todos</h3>
      <ul>
        {todos.map((todo)=> (
          <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        ))}
      </ul>
    </div>
  )
}

export default TodoList