import React, { useState } from 'react';

export default function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState('');
  function handleInput(e) {
    setNewItem(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === '') return null;
    onSubmit(newItem);
  }

  return (
    <form onSubmit={handleSubmit} action="#" className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} onChange={handleInput} type="text" id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
