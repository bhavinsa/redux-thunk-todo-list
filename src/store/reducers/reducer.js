const initialState = {
  todoArr: []
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "ADD_TODO":
      return {
        ...newState,
        todoArr: state.todoArr.concat({ item: action.value, key: Date.now() })
      };
  }
  return newState;
};

export default reducer;
