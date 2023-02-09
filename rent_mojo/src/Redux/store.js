import AuthReducer from "./User/Reducer";
import { CartReducer } from "./Cart/Reducer";
import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from 'redux-thunk'

let rootReducer = combineReducers({
    Auth:AuthReducer,
    Cart:CartReducer
})

let store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store