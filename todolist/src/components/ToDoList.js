import React from 'react';



const List = ({ list }) => {
  return (
    <div>
      {list.map(task => <p>{task.item}</p>)}
    </div>
  )
};

export default List;