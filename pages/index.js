import { useState } from 'react';

export default function Home() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const styles = {
    container: {
      backgroundColor: '#000',
      color: '#0f0',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'monospace',
    },
    input: {
      backgroundColor: '#222',
      color: '#0f0',
      border: '1px solid #0f0',
      padding: '0.5rem',
    },
    button: {
      backgroundColor: '#000',
      color: '#0f0',
      border: '1px solid #0f0',
      marginLeft: '0.5rem',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
    },
  };

  const addTodo = () => {
    if (task.trim() === '') return;
    setTodos([...todos, task.trim()]);
    setTask('');
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h1>TODO List</h1>
      <div>
        <input
          style={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button style={styles.button} onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              style={styles.button}
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
