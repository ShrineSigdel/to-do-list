import React, { useEffect, useState } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

export default function App() {
  const [todos, setTodos] = useState(() => {
    const local = localStorage.getItem('ITEMS');
    if (local == null) return [];
    return JSON.parse(local);
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => [...currentTodos, {
      id: crypto.randomUUID(),
      title,
      completed: false,
    }]);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => currentTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed };
      }
    }));
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => (todo.id !== id)));
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
