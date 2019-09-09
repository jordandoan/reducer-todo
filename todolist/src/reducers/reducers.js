const reducer = (state,action) => {
  switch(action.type) {
    case 'add':  
      return [...state, action.payload]
  }
};

export { reducer };

export const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
};