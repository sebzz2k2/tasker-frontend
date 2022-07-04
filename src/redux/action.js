import { ADD_NEW_TODO } from "./actionType";

export const addNewTodo = (todoItem) => async (dispatch) => {
  dispatch({
    type: ADD_NEW_TODO,
    payload: {
      todoItem: todoItem,
    },
  });
};
