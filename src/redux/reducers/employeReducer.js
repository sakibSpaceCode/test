export const getPermissionReducer = (
  state = { loading: false, error: "", permission: {} },
  action
) => {
  switch (action.type) {
    case "GET_PERMISSION_REQUEST":
      return { ...state, loading: true };
    case "GET_PERMISSION_SUCCESS":
      return {
        ...state,
        loading: false,
        permission: action.payload,
      };

    case "GET_PERMISSION_ERROR":
      return { ...state, errorPermission: action.payload, loading: false };

    case "CLEAR_PERMISSION":
      return {};

    default:
      return state;
  }
};
