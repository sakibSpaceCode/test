import axios from "axios";
import CONSTANTS from "../../common/constant";

export const getEmployeePermission =
  (collectionName, id) => async (dispatch, getState) => {
    dispatch({ type: "GET_PERMISSION_REQUEST" });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        type: "Web",
        Authorization: userInfo?.data?.token,
      },
    };
    let url = `${CONSTANTS.BASEURL}user/permission`;
    const { data } = await axios.get(url, config);
    if (data.success === true) {
      dispatch({
        type: "GET_PERMISSION_SUCCESS",
        payload: data,
      });
    } else {
      dispatch({
        type: "GET_PERMISSION_ERROR",
        payload: data.error,
      });
    }
  };
