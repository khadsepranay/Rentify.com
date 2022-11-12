import { combineReducers, applyMiddleware, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/reducer";
import { productReducer } from "./product/reducer";


const rootReducer = combineReducers({
 product: productReducer,
 Item: cartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));