import React from 'react';
import './App.css';

import Form from './components/ToDoForm';
import List from './components/ToDoList';

function App() {
  return (
    <div className="container">
      <Form />
      <List />
    </div>
  );
}

export default App;
