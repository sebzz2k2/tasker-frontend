import { GET_ALL_TODO } from "./actionType";

let initialState = {
  todo: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TODO:
      return {
        ...state,
        todo: action.payload.todoArray.todo,
      };
    default:
      return state;
  }
};
export default todoReducer;
