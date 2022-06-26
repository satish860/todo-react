import "./App.css";
import { useState, useEffect } from "react";
import db from "./Firebase";
import { addDoc, collection, getDocs, serverTimestamp } from "firebase/firestore/lite";

function App() {
  const [Input, setInput] = useState("");
  const [Todos, setTodos] = useState([]);
  var todocollection = collection(db, "todos");

  useEffect(() => {
    async function fetechData() {
      const citySnapshot = await getDocs(todocollection);
      setTodos(citySnapshot.docs.map((doc) => {
        console.log(doc.data())
        return doc.data().task
      }));
    }
    fetechData()
  }, []);

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function HandleClick(e) {
    e.preventDefault();
    console.log(Input);
    addDoc(todocollection,{
      created:serverTimestamp(),
      task:Input
    })

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
        {Todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
