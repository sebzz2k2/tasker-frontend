import {
  ADD_NEW_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "./actionType";

export const addNewTodo = (todoItem) => async (dispatch) => {
  dispatch({
    type: ADD_NEW_TODO,
    payload: {
      todoItem: todoItem,
    },
  });
};
export const toggleTodo = (todoItem) => async (dispatch) => {
  dispatch({
    type: TOGGLE_TODO,
    payload: {
      id: todoItem.id,
      name: todoItem.name,
      completed: !todoItem.completed,
    },
  });
};
export const editTodo = (todoItem) => async (dispatch) => {
  dispatch({
    type: EDIT_TODO,
    payload: {
      id: todoItem.id,
      name: todoItem.name,
    },
  });
};

export const deletedTodo = (todoId) => async (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    payload: {
      todoId,
    },
  });
};
