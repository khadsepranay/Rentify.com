import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './Auth/auth.reducer';
import { newUserReducer } from './NewUser/newUser.reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	newUser: newUserReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
