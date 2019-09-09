import React from 'react';

import { useField } from '../hooks/useField';

const Form = ({ dispatcher }) => {
  let [task, handleChange] = useField();

  const handleEnter = (event) => {
    if (event.keyCode == 13) {
      handleSubmit();
    }
  }
  const handleSubmit = () => {
    dispatcher({type: 'ADD_TODO', payload: {item: task, id: new Date(), completed: false}})
    handleChange({target:{value: ""}});
  }

  const handleRemove = () => {
    dispatcher({type: 'CLEAR_COMPLETED'})
  }
  return (
    <div className='form-container'>
      <h2>Task Form</h2>
      <div className='form'>
        <input type="text" placeholder="task description" onKeyDown={(e) => handleEnter(e)} value={task} onChange={(e) => handleChange(e)}/>
        <button onClick={handleSubmit}>Add Task</button>
        <button onClick={handleRemove}>Clear Completed</button>
      </div>
    </div>
  )
};

export default Form;