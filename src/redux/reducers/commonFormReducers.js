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
export const getDropdownReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_DROPDOWN_REQUEST':
            return { ...state, loading: true };
        case 'GET_DROPDOWN_SUCCESS':
            return { ...state, loading: false, options: action.payload };
        case 'GET_DROPDOWN_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'CLEAR_DROP_DOWN':
            return {};

        default:
            return state;
    }
};
export const get2ndDropdownReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_2ND_DROPDOWN_REQUEST':
            return { ...state, loading: true };
        case 'GET_2ND_DROPDOWN_SUCCESS':
            return { ...state, loading: false, options2: action.payload };
        case 'GET_2ND_DROPDOWN_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'CLEAR_2ND_DROP_DOWN':
            return {};

        default:
            return state;
    }
};
export const getDiffDropdownReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_DIFF_DROPDOWN_REQUEST':
            return { ...state, loading: true };
        case 'GET_DIFF_DROPDOWN_SUCCESS':
            return { ...state, loading: false, optionsDiff: action.payload };
        case 'GET_DIFF_DROPDOWN_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'CLEAR_DIFF_DROP_DOWN':
            return {};

        default:
            return state;
    }
};
export const get2ndDiffDropdownReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_2ND_DIFF_DROPDOWN_REQUEST':
            return { ...state, loading: true };
        case 'GET_2ND_DIFF_DROPDOWN_SUCCESS':
            return { ...state, loading: false, options2Diff: action.payload };
        case 'GET_2ND_DIFF_DROPDOWN_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'CLEAR_2ND_DIFF_DROP_DOWN':
            return {};

        default:
            return state;
    }
};
export const get3rdDropdownReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_3RD_DROPDOWN_REQUEST':
            return { ...state, loading: true };
        case 'GET_3RD_DROPDOWN_SUCCESS':
            return { ...state, loading: false, options3: action.payload };
        case 'GET_3RD_DROPDOWN_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'CLEAR_3RD_DROP_DOWN':
            return {};

        default:
            return state;
    }
};
export const get4thDropdownReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_4TH_DROPDOWN_REQUEST':
            return { ...state, loading: true };
        case 'GET_4TH_DROPDOWN_SUCCESS':
            return { ...state, loading: false, options4: action.payload };
        case 'GET_4TH_DROPDOWN_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'CLEAR_4TH_DROP_DOWN':
            return {};

        default:
            return state;
    }
};
export const get5thDropdownReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_5TH_DROPDOWN_REQUEST':
            return { ...state, loading: true };
        case 'GET_5TH_DROPDOWN_SUCCESS':
            return { ...state, loading: false, options5: action.payload };
        case 'GET_5TH_DROPDOWN_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'CLEAR_5TH_DROP_DOWN':
            return {};

        default:
            return state;
    }
};
export const get6thDropdownReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_6TH_DROPDOWN_REQUEST':
            return { ...state, loading: true };
        case 'GET_6TH_DROPDOWN_SUCCESS':
            return { ...state, loading: false, options6: action.payload };
        case 'GET_6TH_DROPDOWN_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'CLEAR_6TH_DROP_DOWN':
            return {};

        default:
            return state;
    }
};
export const get7thDropdownReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_7TH_DROPDOWN_REQUEST':
            return { ...state, loading: true };
        case 'GET_7TH_DROPDOWN_SUCCESS':
            return { ...state, loading: false, options7: action.payload };
        case 'GET_7TH_DROPDOWN_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'CLEAR_7TH_DROP_DOWN':
            return {};

        default:
            return state;
    }
};
export const get8thDropdownReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_8TH_DROPDOWN_REQUEST':
            return { ...state, loading: true };
        case 'GET_8TH_DROPDOWN_SUCCESS':
            return { ...state, loading: false, options8: action.payload };
        case 'GET_8TH_DROPDOWN_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'CLEAR_8TH_DROP_DOWN':
            return {};

        default:
            return state;
    }
};