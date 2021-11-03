import CONSTANTS from "../../common/constant";
import axios from "axios";
const config = {
  headers: {
    "Content-Type": "application/json",
    type: "Web",
  },
};

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    let url = `${CONSTANTS.BASEURL}user/admin_login`;
    const loginResponse = await axios.post(url, { email, password }, config);
    const { data } = loginResponse;
    console.log(data);

    if (data.success === true) {
      dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: data,
      });
      dispatch({
        type: "USER_IS_LOGGEDIN",
        payload: true,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("isLoggedIn", true);
    } else {
      dispatch({
        type: "USER_LOGIN_FAIL",
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload: error?.response?.statusText,
    });
  }
};

export const clearLoginState = () => {
  return {
    type: "CLEAR_LOGIN_STATE",
  };
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.setItem("isLoggedIn", false);
  dispatch({ type: "USER_LOGOUT" });
  dispatch({
    type: "USER_IS_LOGGEDIN",
    payload: false,
  });
};
