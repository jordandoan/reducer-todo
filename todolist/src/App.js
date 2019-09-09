import React, { useReducer } from 'react';
import './App.css';

import Form from './components/ToDoForm';
import List from './components/ToDoList';

import { reducer, initialState } from './reducers/reducers';
function App() {
  let [list, dispatcher] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <Form dispatcher={dispatcher} />
      <List list={list} />
    </div>
  );
}

export default App;
