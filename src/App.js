import "./App.css";
import { useState } from "react";

function App() {
  const [Input, setInput] = useState("");
  const [Todos,setTodos] = useState(["Hello World","Todo2"])

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function HandleClick(e) {
    e.preventDefault();
    console.log(Input);
    setTodos([...Todos,Input])
    setInput("");
  }

  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={Input}
          onChange={(e) => handleInputChange(e)}
          placeholder="Enter your Todo"
        />
        <button onClick={(e) => HandleClick(e)} type="submit">
          Create Todo
        </button>
      </form>
      <ul>
        {Todos.map((todo)=>{
          return(
            <li>{todo}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
