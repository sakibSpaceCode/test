const userLogin = { loading: false, userInfo: {}, error: null };
export const userLoginReducer = (state = userLogin, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { loading: true };
    case "USER_LOGIN_SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "USER_LOGIN_FAIL":
      return { loading: false, error: action.payload };
    case "USER_LOGOUT":
      return userLogin;
    case "CLEAR_LOGIN_STATE":
      return { loading: false, userInfo: null, error: null };
    default:
      return state;
  }
};
export const isLoggedInReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_IS_LOGGEDIN":
      return { loading: false, isLoggedIn: action.payload };
    default:
      return state;
  }
};
