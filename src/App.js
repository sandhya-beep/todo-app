import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div style={styles.container}>
      <h1>📝 Todo App</h1>

      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={styles.input}
        />

        <button onClick={addTodo} style={styles.addBtn}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.listItem}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
            />

            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                marginLeft: "10px",
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => deleteTodo(index)}
              style={styles.deleteBtn}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  input: {
    padding: "10px",
    width: "200px",
  },
  addBtn: {
    padding: "10px",
    marginLeft: "10px",
    backgroundColor: "green",
    color: "white",
    border: "none",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
  listItem: {
    marginTop: "10px",
  },
  deleteBtn: {
    marginLeft: "10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
  },
};

export default App;