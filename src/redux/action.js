import { GET_ALL_TODO } from "./actionType";

import axios from "axios";
import URL from "../Extras/URLS";

export const addNewTodo = (todoItem) => async (dispatch) => {
  await axios
    .post(`${URL}todo/add-todo`, {
      name: todoItem,
    })
    .then(() => dispatch(getAllTodo()))
    .catch((err) => console.log(err));
};
export const getAllTodo = () => async (dispatch) => {
  let response = await axios
    .get(`${URL}todo/all-todo`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  dispatch({
    type: GET_ALL_TODO,
    payload: {
      todoArray: response,
    },
  });
};
export const toggleTodo = (todoItem) => async (dispatch) => {
  await axios
    .put(`${URL}todo/toggle-todo/${todoItem.id}`, {
      completed: !todoItem.completed,
    })
    .then(() => dispatch(getAllTodo()))
    .catch((err) => console.log(err));
};
export const editTodo = (todoItem) => async (dispatch) => {
  await axios
    .put(`${URL}todo/edit-todo/${todoItem.id}`, {
      name: todoItem.name,
    })
    .then(() => dispatch(getAllTodo()))
    .catch((err) => console.log(err));
};

export const deletedTodo = (todoId) => async (dispatch) => {
  await axios
    .delete(`${URL}todo/delete-todo/${todoId}`)
    .then(() => dispatch(getAllTodo()))
    .catch((err) => console.log(err));
};
