import React, { useState } from "react";
import "./App.css";

function App() {
  const [useTask, setTask] = useState("");
  const [todos, setodos] = useState([]);
  const [useTaskEdit, setTaskEdit] = useState(null);
  const onChange = (el) => {
    el.preventDefault();
    setTask(el.target.value);
  };
  const onSubmit = (elm) => {
    elm.preventDefault();
    if (useTask === "") return;
    if (useTaskEdit === null) {
      setodos([...todos, { id: Math.random(), text: useTask }]);
      setTask("");
    } else {
      edittask(useTask, useTaskEdit.id);
      // console.log(useTask, 1);
      // console.log(useTaskEdit.id, 2);
      // console.log(todos);
      setTask("");
    }
  };
  const remove = (id) => {
    setodos(todos.filter((todo) => todo.id !== id));
  };
  const edit = (id) => {
    const item = todos.find((el) => el.id === id);
    setTaskEdit(item);
    setTask(item.text);
    // console.log(item,5);
  };
  const edittask = (title, id) => {
    var newtask = todos.map((task) =>
      task.id === id ? { id, text: useTask } : task
    );
    // console.log(newtask, 3);
    setodos(newtask);
    // console.log(todos, 4);
    setTaskEdit(null);
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
            <div type="text" id={p.id} name="edit" className="editcl">
              {p.text}
            </div>
            <div>
              <a href="#" onClick={() => remove(p.id)}>
                <img src="./poubelle.jpg" width="30px"></img>
              </a>
              <a href="#" onClick={() => edit(p.id)}>
                <img src="./edit.jpg" width="30px"></img>
              </a>
            </div>
          </div>
        ))}
        <hr></hr>

        <div className="cltett">
          <input
            value={useTask}
            autoFocus
            className="clinput"
            placeholder="push your commint "
            onChange={onChange}
          ></input>
          <button className="clbouton">Add a new task</button>
        </div>
      </form>
    </div>
  );
}

export default App;
