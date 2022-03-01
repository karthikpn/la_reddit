import { createStore, combineReducers, applyMiddleware } from "redux";
import { userLoginReducer } from "./Reducers/userReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  user: userLoginReducer,
});

const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = { user: { userInfo: userFromStorage } };

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
