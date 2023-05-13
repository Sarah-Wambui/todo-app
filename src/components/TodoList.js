import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos, updateTodo, deleteTodo}) {

  return (
    <div>
      <h2>My Todos:</h2>
      <ul className="todos">
        {todos.map((todo)=> (
          <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        ))}
      </ul>
    </div>
  )
}

export default TodoList