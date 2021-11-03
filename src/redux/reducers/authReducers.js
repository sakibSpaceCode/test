const userLogin = { loading: false, userInfo: false, error: null };
export const userLoginReducer = (state = userLogin, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { loading: true };
    case "USER_LOGIN_SUCCESS":
      return { loading: false, userInfo: action.payload, error: "" };
      case "USER_LOGIN_FAIL":
        return { loading: false };

    case "USER_LOGOUT":
      return { userInfo: false, error: "" };
    case "CLEAR_LOGIN_STATE":
      return { loading: false, userInfo: null, error: "" };
    case "CLEAR_TEMP_DATA":
      return { ...userLogin, loading: false, error: "" };
    default:
      return state;
  }
}
export const userLoginValidateReducer = (state = userLogin, action) => {
  switch (action.type) {
   
    case "USER_LOGIN_FAIL":
      return { loading: false, error: action.payload };

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
