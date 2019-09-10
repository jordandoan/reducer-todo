import React, { useEffect } from 'react';



const List = ({ list, dispatcher }) => {
  const handleClick = (event, task) => {
    dispatcher({type:'COMPLETE_TASK', payload: {...task, completed:!task.completed}});
    // event.target.parentNode.classList.toggle("completed");
  }

  useEffect(() => {
    let tasks = document.querySelectorAll('.task');
    tasks.forEach((task) => {
      if (task.attributes.value.value == 'true') {
        task.classList.add("completed");
      } else {
        task.classList.remove("completed");
      }
    })
  }, [list])
  return (
    <div className="list-container">
      <h2>Tasks</h2>
      {list.map(task => 
        <div className='task' value={task.completed}>
          <p>{task.item}</p>
          <button className="clear" onClick={(e) => handleClick(e, task)}>Complete Task</button>
        </div>
      )}
    </div>
  )
};

export default List;