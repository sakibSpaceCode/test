const responseDataInitialState = {
  loading: false,
  error: "",
  responseData: {},
};
export const getDataReducer = (state = responseDataInitialState, action) => {
  switch (action.type) {
    case "GET_DATA_REQUEST":
      return { ...state, loading: true };
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        responseData: action.payload,
      };

    case "GET_DATA_ERROR":
      return { ...state, error: action.payload, loading: false };

    case "CLEAR_DATA":
      return {};

    default:
      return state;
  }
};
export const getDetailsReducer = (
  state = { detailsLoading: false, detailsError: "", detailsResponseData: {} },
  action
) => {
  switch (action.type) {
    case "GET_DETAILS_REQUEST":
      return { ...state, loading: true };
    case "GET_DETAILS_SUCCESS":
      return {
        ...state,
        detailsLoading: false,
        detailsResponseData: action.payload,
      };

    case "GET_DETAILS_ERROR":
      return { ...state, detailsError: action.payload, detailsLoading: false };

    case "CLEAR_DETAILS":
      return {};

    default:
      return state;
  }
};
export const getNotificationsReducer = (
  state = {
    notificationLoading: false,
    notificationError: "",
    notifications: {},
  },
  action
) => {
  switch (action.type) {
    case "GET_NOTIFICATION_REQUEST":
      return { ...state, loading: true };
    case "GET_NOTIFICATION_SUCCESS":
      return {
        ...state,
        notificationLoading: false,
        notifications: action.payload,
      };

    case "GET_NOTIFICATION_ERROR":
      return {
        ...state,
        notificationError: action.payload,
        notificationLoading: false,
      };

    case "CLEAR_notification":
      return {};

    default:
      return state;
  }
};
