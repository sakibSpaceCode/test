import axios from "axios";
import CONSTANTS from "../../common/constant";

export const getData =
  (collectionName) =>
  async (dispatch, getState) => {
    dispatch({ type: "GET_DATA_REQUEST" });
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
    // getData(urlEndPoint)
    let url = `${CONSTANTS.BASEURL}${collectionName}/list?offset=0&limit=10`;
    const { data } = await axios.get(url, config);
    if (data.success === true) {
      dispatch({
        type: "GET_DATA_SUCCESS",
        payload: data,
      });
    } else {
      dispatch({
        type: "GET_DATA_ERROR",
        payload: data.error,
      });
    }
  };

export const clearData = () => {
  return {
    type: "CLEAR_DATA",
  };
};
export const getDetails =
  (collectionName, id) => async (dispatch, getState) => {
    dispatch({ type: "GET_DETAILS_REQUEST" });
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
    let url = `${CONSTANTS.BASEURL}${collectionName}detail/${id}`;
    const { data } = await axios.get(url, config);
    if (data.status === true) {
      dispatch({
        type: "GET_DETAILS_SUCCESS",
        payload: data,
      });
    } else {
      dispatch({
        type: "GET_DETAILS_ERROR",
        payload: data.error,
      });
    }
  };

export const clearDetails = () => {
  return {
    type: "CLEAR_DETAILS",
  };
};
