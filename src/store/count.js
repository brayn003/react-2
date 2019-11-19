
// the initial state
const initialState = {
  count: 0
};

//types
const COUNT_INCREMENT = 'Count Increment';

// reducers
export const reducer = (state = initialState, action) => {
  
  switch(action.type) {
    case COUNT_INCREMENT:
      return {
        count: state.count + 1,
      }
    default:
      return state;
  }

  
}


// actions creators
export const incrementAction = () => {
  return {
    type: COUNT_INCREMENT,
    payload: {}
  }
}