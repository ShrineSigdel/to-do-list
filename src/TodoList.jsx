import React from 'react';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && 'No Todos'}
      {todos.map((todo) => (
        <ListItem {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id} />
      ))}

    </ul>
  );
}

function ListItem({
  id, title, completed, toggleTodo, deleteTodo,
}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
