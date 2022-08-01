import axios from "axios";
import URL from "../../Extras/URLS";
import { SET_USER, EDIT_USER_SUCCESS } from "./authActionType";
import { getToken } from "../../Extras/getToken";

export const registerUser = (userData) => async (dispatch) => {
  const userLogData = await axios
    .post(`${URL}user/register`, {
      userName: userData.userName,
      password: userData.password,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));

  dispatch(setUser(userLogData));
};

const setUser = (userLogData) => async (dispatch) => {
  dispatch({
    type: SET_USER,
    payload: {
      userLogData,
    },
  });
};

export const loginUser = (userData) => async (dispatch) => {
  const userLogData = await axios
    .post(`${URL}user/login`, {
      userName: userData.userName,
      password: userData.password,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
  dispatch(setUser(userLogData));
};

export const editUser = (userData) => async (dispatch) => {
  const token = await getToken();

  await axios
    .put(`${URL}user/edit-user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      id: userData.id,
      userName: userData.userName,
      newPassword: userData.password,
    })
    .then((res) => {
      dispatch({
        type: EDIT_USER_SUCCESS,
      });
    })
    .catch((err) => console.log(err));
};

export const getUser = (userData) => async (dispatch) => {
  //   await axios
  //     .post(`${URL}todo/add-todo`, {
  //       name: todoItem,
  //     })
  //     .then(() => dispatch(getAllTodo()))
  //     .catch((err) => console.log(err));
};
