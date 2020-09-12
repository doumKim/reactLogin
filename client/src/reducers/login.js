import { SET_LOGIN, SET_LOGOUT } from '../action/type';

const initialState = {
  isLogin: false,
};

const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        isLogin: true,
      };
    case SET_LOGOUT:
      return {
        isLogin: false,
      };
    default:
      return state;
  }
};

export default logInReducer;
