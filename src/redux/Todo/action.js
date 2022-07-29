import { GET_ALL_TODO } from "./actionType";

import { getToken } from "../../Extras/getToken";

import axios from "axios";
import URL from "../../Extras/URLS";

export const addNewTodo = (todoItem) => async (dispatch) => {
  const token = await getToken();
  await axios
    .post(
      `${URL}todo/add-todo`,
      {
        name: todoItem,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(() => dispatch(getAllTodo()))
    .catch((err) => console.log(err));
};
export const getAllTodo = () => async (dispatch) => {
  const token = await getToken();
  let response = await axios
    .get(`${URL}todo/all-todo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
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
  const token = await getToken();

  await axios
    .put(
      `${URL}todo/toggle-todo/${todoItem.id}`,
      {
        completed: !todoItem.completed,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(() => dispatch(getAllTodo()))
    .catch((err) => console.log(err));
};
export const editTodo = (todoItem) => async (dispatch) => {
  const token = await getToken();
  await axios
    .put(
      `${URL}todo/edit-todo/${todoItem.id}`,
      {
        name: todoItem.name,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(() => dispatch(getAllTodo()))
    .catch((err) => console.log(err));
};

export const deletedTodo = (todoId) => async (dispatch) => {
  const token = await getToken();
  await axios
    .delete(`${URL}todo/delete-todo/${todoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => dispatch(getAllTodo()))
    .catch((err) => console.log(err));
};
