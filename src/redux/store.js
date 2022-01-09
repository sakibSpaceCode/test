/*eslint-disable */
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  isLoggedInReducer,
  userLoginReducer,
  userLoginValidateReducer,
} from "./reducers/authReducers";
import {
  deleteFieldReducer,
  get2ndDiffDropdownReducer,
  get2ndDropdownReducer,
  get3rdDropdownReducer,
  get4thDropdownReducer,
  get5thDropdownReducer,
  get6thDropdownReducer,
  get7thDropdownReducer,
  get8thDropdownReducer,
  getDiffDropdownReducer,
  getDropdownReducer,
  postFieldsReducer,
  postImageReducer,
  postUpdatePasswordReducer,
  putFieldsReducer,
} from "./reducers/commonFormReducers";
import {
  getDataReducer,
  getDetailsReducer,
  getNotificationsReducer,
} from "./reducers/commonGetDataReducers";
import { getPermissionReducer } from "./reducers/employeReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  isLoggedIn: isLoggedInReducer,
  postFields: postFieldsReducer,
  putFields: putFieldsReducer,
  deleteField: deleteFieldReducer,
  getData: getDataReducer,
  userLoginValidateReducer: userLoginValidateReducer,
  getPermissionReducer: getPermissionReducer,
  getDetails: getDetailsReducer,
  getDropdown: getDropdownReducer,
  get2ndDropdown: get2ndDropdownReducer,
  get3rdDropdown: get3rdDropdownReducer,
  get4thDropdown: get4thDropdownReducer,
  get5thDropdown: get5thDropdownReducer,
  get6thDropdown: get6thDropdownReducer,
  get7thDropdown: get7thDropdownReducer,
  get8thDropdown: get8thDropdownReducer,
  getDiffDropdown: getDiffDropdownReducer,
  get2ndDiffDropdown: get2ndDiffDropdownReducer,
  getNotifications: getNotificationsReducer,
  postImage: postImageReducer,
  postUpdatePassword: postUpdatePasswordReducer,
});
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["userLogin"],
};
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const isLoggedInFromStorage = localStorage.getItem("isLoggedIn")
  ? localStorage.getItem("isLoggedIn")
  : false;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  isLoggedIn: { isLoggedIn: isLoggedInFromStorage },
};

const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
export default store;
