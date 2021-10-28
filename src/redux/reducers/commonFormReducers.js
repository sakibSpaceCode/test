export const postFieldsReducer = (state = {}, action) => {
    switch (action.type) {
        case "POST_FIELDS_REQUEST":
            return { ...state, postLoading: true };
        case "POST_FIELDS_SUCCESS":
            return { ...state, postLoading: false, postResponse: action.payload };
        case "POST_FIELDS_ERROR":
            return { ...state, postLoading: false, postError: action.payload };
        case "CLEAR_POST_FIELDS":
            return {};
        default:
            return state;
    }
};
export const putFieldsReducer = (state = {}, action) => {
    switch (action.type) {
        case "PUT_FIELDS_REQUEST":
            return { ...state, putLoading: true };
        case "PUT_FIELDS_SUCCESS":
            return { ...state, putLoading: false, putResponse: action.payload };
        case 'PUT_FIELDS_ERROR':
            return { ...state, putLoading: false, putError: action.payload };
        case "CLEAR_PUT_FIELDS":
            return {};
        default:
            return state;
    }
};
export const deleteFieldReducer = (state = {}, action) => {
    switch (action.type) {
        case 'DELETE_FIELD_REQUEST':
            return { ...state, deleteLoading: true };
        case 'DELETE_FIELD_SUCCESS':
            return { ...state, deleteLoading: false, deleteResponse: action.payload };
        case 'DELETE_FIELD_ERROR':
            return { ...state, deleteLoading: false, deleteError: action.payload };
        case 'CLEAR_DELETE_RESPONSE':
            return {};
        default:
            return state;
    }
};