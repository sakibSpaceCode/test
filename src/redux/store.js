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
  getDropdownReducer,
  postFieldsReducer,
  putFieldsReducer,
} from "./reducers/commonFormReducers";
import {
  getDataReducer,
  getDetailsReducer,
} from "./reducers/commonGetDataReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  isLoggedIn: isLoggedInReducer,
  postFields: postFieldsReducer,
  putFields: putFieldsReducer,
  deleteField: deleteFieldReducer,
  getData: getDataReducer,
  userLoginValidateReducer: userLoginValidateReducer,
  getDetails: getDetailsReducer,
  getDropdown: getDropdownReducer
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
