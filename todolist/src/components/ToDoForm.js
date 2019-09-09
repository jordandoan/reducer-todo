import React from 'react';

import { useField } from '../hooks/useField';

const Form = () => {
  let [task, handleChange] = useField("");
  return (
    <div className='form-container'>
      <h2>Task Form</h2>
      <div className='form'>
        <input type="text" placeholder="task description" value={task} onChange={(e) => handleChange(e)}/>
        <button>Add Task</button>
      </div>
    </div>
  )
};

export default Form;