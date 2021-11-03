import axios from "axios";
import CONSTANTS from "../../common/constant";

export const postFormData =
  (collection, formData) => async (dispatch, getState) => {
    dispatch({ type: "POST_FIELDS_REQUEST" });
    const {
      userLogin: { userInfo },
    } = getState();
    
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo?.data?.token,
      },
    };
    let url = `${CONSTANTS.BASEURL}${collection}/add`;
    const { data } = await axios.post(url, formData, config);
    if (data.success === true) {
      dispatch({
        type: "POST_FIELDS_SUCCESS",
        payload: data,
      });
    } else {
      dispatch({
        type: "POST_FIELDS_ERROR",
        payload: data.message,
      });
    }
  };
export const putFormData =
  (collection, formData) => async (dispatch, getState) => {
    dispatch({ type: "PUT_FIELDS_REQUEST" });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: userInfo?.data.token,
      },
    };

    let url = `${CONSTANTS.BASEURL}${collection}/edit`;

    const { data } = await axios.put(url, formData, config);
    if (data.success === true) {
      dispatch({
        type: "PUT_FIELDS_SUCCESS",
        payload: data,
      });
    } else {
      dispatch({
        type: "PUT_FIELDS_ERROR",
        payload: data.error,
      });
    }
  };
export const deleteFormData =
  (collection, id) => async (dispatch, getState) => {
    dispatch({ type: "DELETE_FIELD_REQUEST" });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: userInfo?.data.token,
      },
    };

    let url = `${CONSTANTS.BASEURL}${collection}/delete`;

    const { data } = await axios.delete(url, id, config);
    if (data.success === true) {
      dispatch({
        type: "DELETE_FIELD_SUCCESS",
        payload: data,
      });
    } else {
      dispatch({
        type: "DELETE_FIELD_ERROR",
        payload: data.error,
      });
    }
  };
export const clearPostResponse = () => {
  return {
    type: "CLEAR_POST_FIELDS",
  };
};
export const clearPutResponse = () => {
  return {
    type: "CLEAR_PUT_FIELDS",
  };
};
export const clearDeleteResponse = () => {
  return {
    type: "CLEAR_DELETE_RESPONSE",
  };
};
