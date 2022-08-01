import { GET_ALL_TODO } from "./Todo/actionType";
import { SET_USER, EDIT_USER_SUCCESS } from "./Auth/authActionType";

let initialState = {
  todo: [],
  user: {},
  appState: { loading: false, isLogged: false },
};

const todoReducer = (state = initialState, action) => {
  //todo reducer
  switch (action.type) {
    case GET_ALL_TODO:
      return {
        ...state,
        todo: action.payload.todoArray.todo,
      };

    //auth reducer
    case SET_USER:
      localStorage.setItem("user", JSON.stringify(action.payload.userLogData));
      return {
        ...state,
        user: action.payload.userLogData,
      };

    case EDIT_USER_SUCCESS:
      return state;

    default:
      return state;
  }
};
export default todoReducer;
