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
        Authorization: userInfo?.data.token,
      },
    };
    console.log(config);

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
        payload: data.message,
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
        Authorization: userInfo?.data.token,
      },
    };
    console.log(config);

    let url = `${CONSTANTS.BASEURL}${collection}/delete`;

    const { data } = await axios.delete(url, config, id);
    if (data.success === true) {
      dispatch({
        type: "DELETE_FIELD_SUCCESS",
        payload: data,
      });
    } else {
      dispatch({
        type: "DELETE_FIELD_ERROR",
        payload: data.message,
      });
    }
  };
export const getDropdown = (collectionName) => async (dispatch, getState) => {
  dispatch({ type: "GET_DROPDOWN_REQUEST" });
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
  let url = `${CONSTANTS.BASEURL}${collectionName}/list?offset=0&limit=100`;
  const { data } = await axios.get(url, config);
  if (data.success === true) {
    dispatch({
      type: "GET_DROPDOWN_SUCCESS",
      payload: data.data.data,
    });
  } else {
    dispatch({
      type: "GET_DROPDOWN_ERROR",
      payload: data.error,
    });
  }
};
export const getDiffDropdown =
  (collectionName) => async (dispatch, getState) => {
    dispatch({ type: "GET_DIFF_DROPDOWN_REQUEST" });
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
    let url = `${CONSTANTS.BASEURL}${collectionName}/list?offset=0&limit=100`;
    const { data } = await axios.get(url, config);
    if (data.success === true) {
      dispatch({
        type: "GET_DIFF_DROPDOWN_SUCCESS",
        payload: data.data.data,
      });
    } else {
      dispatch({
        type: "GET_DIFF_DROPDOWN_ERROR",
        payload: data.error,
      });
    }
  };
export const get2ndDiffDropdown =
  (collectionName) => async (dispatch, getState) => {
    dispatch({ type: "GET_2ND_DIFF_DROPDOWN_REQUEST" });
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
    let url = `${CONSTANTS.BASEURL}${collectionName}/list?offset=0&limit=100`;
    const { data } = await axios.get(url, config);
    if (data.success === true) {
      dispatch({
        type: "GET_2ND_DIFF_DROPDOWN_SUCCESS",
        payload: data.data.data,
      });
    } else {
      dispatch({
        type: "GET_2ND_DIFF_DROPDOWN_ERROR",
        payload: data.error,
      });
    }
  };
export const get2ndDropdown = (formData) => async (dispatch, getState) => {
  dispatch({ type: "GET_2ND_DROPDOWN_REQUEST" });
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
  let url = `${CONSTANTS.BASEURL}user/dropdown`;
  const { data } = await axios.post(url, formData, config);
  if (data.success === true) {
    dispatch({
      type: "GET_2ND_DROPDOWN_SUCCESS",
      payload: data.data.data,
    });
  } else {
    dispatch({
      type: "GET_2ND_DROPDOWN_ERROR",
      payload: data.error,
    });
  }
};
export const get3rdDropdown = (formData) => async (dispatch, getState) => {
  dispatch({ type: "GET_3RD_DROPDOWN_REQUEST" });
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
  let url = `${CONSTANTS.BASEURL}user/dropdown`;
  const { data } = await axios.post(url, formData, config);
  if (data.success === true) {
    dispatch({
      type: "GET_3RD_DROPDOWN_SUCCESS",
      payload: data.data.data,
    });
  } else {
    dispatch({
      type: "GET_3RD_DROPDOWN_ERROR",
      payload: data.error,
    });
  }
};
export const get4thDropdown = (formData) => async (dispatch, getState) => {
  dispatch({ type: "GET_4TH_DROPDOWN_REQUEST" });
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
  let url = `${CONSTANTS.BASEURL}user/dropdown`;
  const { data } = await axios.post(url, formData, config);
  if (data.success === true) {
    dispatch({
      type: "GET_4TH_DROPDOWN_SUCCESS",
      payload: data.data.data,
    });
  } else {
    dispatch({
      type: "GET_4TH_DROPDOWN_ERROR",
      payload: data.error,
    });
  }
};
export const get5thDropdown = (formData) => async (dispatch, getState) => {
  dispatch({ type: "GET_5TH_DROPDOWN_REQUEST" });
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
  let url = `${CONSTANTS.BASEURL}user/dropdown`;
  const { data } = await axios.post(url, formData, config);
  if (data.success === true) {
    dispatch({
      type: "GET_5TH_DROPDOWN_SUCCESS",
      payload: data.data.data,
    });
  } else {
    dispatch({
      type: "GET_5TH_DROPDOWN_ERROR",
      payload: data.error,
    });
  }
};
export const get6thDropdown = (formData) => async (dispatch, getState) => {
  dispatch({ type: "GET_6TH_DROPDOWN_REQUEST" });
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
  let url = `${CONSTANTS.BASEURL}user/dropdown`;
  const { data } = await axios.post(url, formData, config);
  if (data.success === true) {
    dispatch({
      type: "GET_6TH_DROPDOWN_SUCCESS",
      payload: data.data.data,
    });
  } else {
    dispatch({
      type: "GET_6TH_DROPDOWN_ERROR",
      payload: data.error,
    });
  }
};
export const get7thDropdown = (formData) => async (dispatch, getState) => {
  dispatch({ type: "GET_7TH_DROPDOWN_REQUEST" });
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
  let url = `${CONSTANTS.BASEURL}user/dropdown`;
  const { data } = await axios.post(url, formData, config);
  if (data.success === true) {
    dispatch({
      type: "GET_7TH_DROPDOWN_SUCCESS",
      payload: data.data.data,
    });
  } else {
    dispatch({
      type: "GET_7TH_DROPDOWN_ERROR",
      payload: data.error,
    });
  }
};
export const get8thDropdown = (formData) => async (dispatch, getState) => {
  dispatch({ type: "GET_8TH_DROPDOWN_REQUEST" });
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
  let url = `${CONSTANTS.BASEURL}user/dropdown`;
  const { data } = await axios.post(url, formData, config);
  if (data.success === true) {
    dispatch({
      type: "GET_8TH_DROPDOWN_SUCCESS",
      payload: data.data.data,
    });
  } else {
    dispatch({
      type: "GET_8TH_DROPDOWN_ERROR",
      payload: data.error,
    });
  }
};

export const clearDropDownResponse = () => {
  return {
    type: "CLEAR_DROP_DOWN",
  };
};
export const clearDiffDropDownResponse = () => {
  return {
    type: "CLEAR_DIFF_DROP_DOWN",
  };
};
export const clear2ndDiffDropDownResponse = () => {
  return {
    type: "CLEAR_2ND_DIFF_DROP_DOWN",
  };
};
export const clear2ndDropDownResponse = () => {
  return {
    type: "CLEAR_2ND_DROP_DOWN",
  };
};
export const clear3rdDropDownResponse = () => {
  return {
    type: "CLEAR_3RD_DROP_DOWN",
  };
};
export const clear4thDropDownResponse = () => {
  return {
    type: "CLEAR_4TH_DROP_DOWN",
  };
};
export const clear5thDropDownResponse = () => {
  return {
    type: "CLEAR_5TH_DROP_DOWN",
  };
};
export const clear6thDropDownResponse = () => {
  return {
    type: "CLEAR_6TH_DROP_DOWN",
  };
};
export const clear7thDropDownResponse = () => {
  return {
    type: "CLEAR_7TH_DROP_DOWN",
  };
};
export const clear8thDropDownResponse = () => {
  return {
    type: "CLEAR_8TH_DROP_DOWN",
  };
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
