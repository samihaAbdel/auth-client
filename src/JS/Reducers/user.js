//import
import {
  LOAD_USER,
  SUCC_USER,
  CURRENT_USER,
  LOGOUT_USER,
  FAIL_USER,
} from "../ActionType/user.js";

//initialState
const initailState = {
  user: {},
  loadUser: false,
  errors: [],
  isAuth: false,
};

//pure function

const userReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true };

    case SUCC_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, isAuth: true, user: payload.user };

    case CURRENT_USER:
      return { ...state, loadUser: false, user: payload, isAuth: true };

    case LOGOUT_USER:
        localStorage.removeItem('token')
      return { user: {}, loadUser: false, errors: [], isAuth: false };

    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload };

    default:
      return state;
  }
};

export default userReducer;
