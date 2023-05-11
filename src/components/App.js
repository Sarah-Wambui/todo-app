import './App.css';
import React,{useState, useEffect} from "react"

function App() {
const [todos, setTodos] = useState([])
console.log(todos)

useEffect(()=>{
  fetch("http://localhost:3000/todos")
  .then(resp => resp.json())
  .then(data => setTodos(data))
},[])

  return (
    <div className="App">
      <h3>Task List</h3>
      
    </div>
  );
}

export default App;
