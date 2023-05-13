import React from 'react'

function TodoItem({todo ,updateTodo, deleteTodo}) {
const { id, description, completed} = todo


function handleComplete(completed){
  console.log(completed)
  fetch(`http://localhost:3000/todos/${id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ completed})
  })
  .then(resp => resp.json())
  .then(data => updateTodo(data.id, data.completed))
}

function handleDelete(){
  fetch(`http://localhost:3000/todos/${id}`,{
    method: "DELETE",
  })
  deleteTodo(id)
}


  return (
    <li>
      <strong>{description}</strong>
      <label className="item">
        Completed?
        <input type="checkbox" checked={completed} className="check" onChange={e => handleComplete(e.target.checked)}/>
        </label>
        <button className="btn" onClick={handleDelete} >Delete</button>
    </li>
  )
}

export default TodoItem