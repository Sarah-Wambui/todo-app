import React,{useState} from 'react'

function NewTodo({addTodo}) {
const [formData, setFormData] = useState({
  description: "",
  completed: false
})

function handleChange(e){
 setFormData({
  ...formData,
  [e.target.name] : e.target.value
 })
}
function handleSubmit(event){
  event.preventDefault()
fetch("http://localhost:3000/todos",{
  method: "POST",
  headers: {
    "Content-Type" : "application/json"
  },
  body: JSON.stringify(formData)
})
.then(resp => resp.json())
.then(newTodo => addTodo(newTodo))
}
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="new" onChange={handleChange} name="description" value={formData.description} placeholder="Add a New Todo..." required/>
      <button type="submit" className="button">Add Todo</button>
    </form>
  )
}

export default NewTodo