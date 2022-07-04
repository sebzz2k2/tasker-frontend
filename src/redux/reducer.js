import { ADD_NEW_TODO } from "./actionType";

let initialState = {
  todo: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      console.log(state.todo);
      const newTodo = {
        id: state.todo.length + Math.random(),
        name: action.payload.todoItem,
        completed: false,
      };
      return {
        ...state,
        todo: [...state.todo, newTodo],
      };

    default:
      return state;
  }
};
export default todoReducer;
