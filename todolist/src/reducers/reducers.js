const reducer = (state,action) => {
  switch(action.type) {
    case 'ADD_TODO':  
      return [...state, action.payload]
    case 'COMPLETE_TASK':
      let newState = state.map(task => {
        if (task.id == action.payload.id) {
          return {...task, completed: action.payload.completed}
        }
        return task
      });
      return newState
    case 'CLEAR_COMPLETED':
      return state.filter(task => !task.completed)
    
    default:
      return state;
  }
};

export { reducer };

export const initialState = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}];