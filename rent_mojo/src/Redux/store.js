import { combineReducers, applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './cart/reducer';
import { productReducer } from './product/reducer';
import { authReducer } from './Auth/auth.reducer';

const rootReducer = combineReducers({
	product: productReducer,
	Item: cartReducer,
	auth: authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
