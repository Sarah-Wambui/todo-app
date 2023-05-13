import './App.css';
import React,{useState, useEffect} from "react"
import TodoList from './TodoList';
import NewTodo from './NewTodo';

function App() {
  const [isDark, setIsDark] = useState(false)
  const [todos, setTodos] = useState([])

useEffect(()=>{
  fetch("http://localhost:3000/todos")
  .then(resp => resp.json())
  .then(data => setTodos(data))
},[])

function handleMode(){
  setIsDark(!isDark)
}
const appClass= isDark ? "App dark" : "App light"


function addTodo(newTodo){
  setTodos([...todos, newTodo])
}

function updateTodo(id, completed){
   console.log({id, completed})
  const updatedTodos = todos.map(todo=>{
    if(todo.id === id){
      return { ...todo, completed }
    }else {
      return todo
    }
  })
     setTodos(updatedTodos)
}

function deleteTodo(id){
const updatedTodos= todos.filter((todo) => todo.id !== id)
setTodos(updatedTodos)
}


  return (
    <div id="App" className={appClass} >
      <header>
        <h2>Task List</h2>
        <button onClick={handleMode}>{isDark ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <NewTodo addTodo={addTodo}/>
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
      
    </div>
  );
}

export default App;


//mission
//To be able to carry out crud functionality
//To be able to toggle dark mode
//
// pseudocode
// import usestate and useeffect
// create a state that holds isDark mode
// create another state that will hold the fetched todos from the mock server
// make a GET fetch request to the server inside the useeffect hook and store inside the todos variables
// pass the fetched todos to the TodoList component
// map them in that component and pass the mapped todos to the TodoItem and display each todo in an unlisted list
// in the NewTodo component make  POST request to the server to create a new todo. 
// add a delete event to the delete button in each todo to make a DELETE request
// add an update event to a checked input to make a PATCH request 