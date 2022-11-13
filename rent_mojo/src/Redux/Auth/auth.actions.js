import {
	ADD_NEW_USER,
	CURRENT_USER,
	FIND_ONE_USER,
	GET_ALL_USERS,
	USER_LOGOUT,
} from './auth.types';
import axios from 'axios';

export const getAllUsers = () => async (dispatch) => {
	try {
		let res = await axios.get('http://localhost:8000/users');
		let data = await res.data;
		console.log('auth/getAllUsers', data);
		dispatch({ type: GET_ALL_USERS, payload: data });
		return data;
	} catch (e) {
		console.log(e);
	}
};

export const addNewUser = (user) => async (dispatch) => {
	try {
		let res = await axios.post('http://localhost:8000/users', user);
		let data = await res.data;
		console.log(data);
		dispatch({ type: ADD_NEW_USER, payload: data });
	} catch (e) {
		console.log(e.message);
	}
};

export const findUsers =
	(params = {}) =>
	async (dispatch) => {
		try {
			let res = await axios.get('http://localhost:8000/users', {
				params: {
					mobile: params.number,
				},
			});
			let data = await res.data;
			console.log('auth/findUsers', data);
			dispatch({ type: FIND_ONE_USER, payload: data });
		} catch (e) {
			console.log(e.message);
		}
	};

export const userLogout = (id) => async (dispatch) => {
	try {
		let res = await axios.delete(`http://localhost:8000/loginUser/${id}`);
		let data = await res.data;
		console.log('userLogout/data', data);
		dispatch({ type: USER_LOGOUT });
	} catch (e) {
		console.log(e.mwssage);
	}
};

export const setLoginUser = (creds) => async (dispatch) => {
	try {
		let res = await axios.post('http://localhost:8000/loginUser', creds);
		let data = await res.data;
		dispatch({ type: CURRENT_USER });
		return data;
	} catch (e) {
		console.log(e.message);
	}
};
