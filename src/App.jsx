import React, { useState } from 'react';

function App() {
  return (
    <form action="#" className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
export default App;
