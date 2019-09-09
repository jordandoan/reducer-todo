import React from 'react';



const List = ({ list, dispatcher }) => {
  const handleClick = (event, task) => {
    dispatcher({type:'COMPLETE_TASK', payload: {...task, completed:!task.completed}});
    event.target.parentNode.classList.toggle("completed");
  }
  return (
    <div>
      {list.map(task => 
        <div>
          <p>{task.item}</p>
          <button onClick={(e) => handleClick(e, task)}>Complete Task</button>
        </div>
      )}
    </div>
  )
};

export default List;