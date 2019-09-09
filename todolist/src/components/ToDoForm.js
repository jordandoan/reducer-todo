import React from 'react';

import { useField } from '../hooks/useField';

const Form = ({ dispatcher }) => {
  let [task, handleChange] = useField();

  const handleEnter = (event) => {
    console.log(event.keyCode)
    if (event.keyCode == 13) {
      handleSubmit();
    }
  }
  const handleSubmit = () => {
    dispatcher({type: 'add', payload: {item: task, id: new Date(), completed: false}})
    handleChange({target:{value: ""}});
  }

  return (
    <div className='form-container'>
      <h2>Task Form</h2>
      <div className='form'>
        <input type="text" placeholder="task description" onKeyDown={(e) => handleEnter(e)} value={task} onChange={(e) => handleChange(e)}/>
        <button onClick={handleSubmit}>Add Task</button>
      </div>
    </div>
  )
};

export default Form;