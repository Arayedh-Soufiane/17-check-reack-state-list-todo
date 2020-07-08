import React, { useState } from "react";
import "./App.css";

function App() {
  const [useTask, setTask] = useState();
  const [todos, setodos] = useState([]);
  const onChange = (el) => {
    el.preventDefault();
    setTask(el.target.value);
  };
  const onSubmit = (elm) => {
    elm.preventDefault();
    if (useTask === "") return;
    setodos([...todos, { id: Math.random(), text: useTask }]);
    elm.target.reset();
  };
  const remove = (id) => {
    setodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <h1>TODO List</h1>
      <hr></hr>
      <div className="cltete">
        <p>The task </p>
        <hr></hr>
        <p>Action</p>
      </div>
      <hr></hr>
      <form onSubmit={onSubmit}>
        {todos.map((p) => (
          <div key={Math.random()} className="cllist">
            {p.text}
           
            <a href="#" onClick={() => remove(p.id)}>
              <img src="./poubelle.jpg" width="30px"></img>
            </a>
          </div>
        ))}
        <hr></hr>
        <div className="cltett">
          <input className="clinput" placeholder="push your commint " onChange={onChange}></input>
          <button className="clbouton">Add a new task</button>
        </div>
      </form>
    </div>
  );
}

export default App;
