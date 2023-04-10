import AuthReducer from "./User/reducer";
import { CartReducer } from "./Cart/reducer";
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
  Auth: AuthReducer,
  Cart: CartReducer,
});

let store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
