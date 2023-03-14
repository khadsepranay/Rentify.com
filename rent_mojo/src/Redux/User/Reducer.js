import { login, logout } from "./actionTypes";
let initialState = {
  isLogin: false,
  isLogout: true,
};

let AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case login:
      return { ...state, isLogin: action.payload, isLogout: !action.payload };
    case logout:
      return { ...state, isLogout: action.payload, isLogin: !action.payload };
    default:
      return { ...state };
  }
};

export default AuthReducer;
