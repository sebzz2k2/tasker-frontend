import {
  ADD_NEW_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "./actionType";

let initialState = {
  todo: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      const newTodo = {
        id: state.todo.length + Math.random(),
        name: action.payload.todoItem,
        completed: false,
      };
      return {
        ...state,
        todo: [...state.todo, newTodo],
      };

    case TOGGLE_TODO:
      const editedTodo = state;
      editedTodo.todo.find((val) => action.payload.id === val.id).completed =
        action.payload.completed;
      return {
        ...state,
        todo: [...editedTodo.todo],
      };

    case DELETE_TODO:
      const remainingTodo = state.todo.filter(
        (data) => data.id !== action.payload.todoId
      );
      return {
        ...state,
        todo: [...remainingTodo],
      };
    case EDIT_TODO:
      const editTodo = state;
      editTodo.todo.find((val) => action.payload.id === val.id).name =
        action.payload.name;
      return {
        ...state,
        todo: [...editTodo.todo],
      };
      break;

    default:
      return state;
  }
};
export default todoReducer;
