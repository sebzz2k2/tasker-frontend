import { TOGGLE_TODO, EDIT_TODO, GET_ALL_TODO } from "./actionType";

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
    case TOGGLE_TODO:
      const editedTodo = state;
      editedTodo.todo.find((val) => action.payload.id === val.id).completed =
        action.payload.completed;
      return {
        ...state,
        todo: [...editedTodo.todo],
      };
    case EDIT_TODO:
      const editTodo = state;
      editTodo.todo.find((val) => action.payload.id === val.id).name =
        action.payload.name;
      return {
        ...state,
        todo: [...editTodo.todo],
      };
    default:
      return state;
  }
};
export default todoReducer;
