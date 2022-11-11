import { FIND_ONE_USER, GET_ALL_USERS } from './auth.types';
import axios from 'axios';

export const getAllUsers = () => async (dispatch) => {
	try {
		let res = await axios.get('http://localhost:8080/users');
		let data = await res.data;
		console.log('auth/getAllUsers', data);
		dispatch({ type: GET_ALL_USERS, payload: data });
		return data;
	} catch (e) {
		console.log(e);
	}
};

export const findUsers =
	(params = {}) =>
	async (dispatch) => {
		try {
			let res = await axios.get('http://localhost:8080/users', {
				params: {
					number: params.number,
				},
			});
			let data = await res.data;
			console.log('auth/findUsers', data);
			dispatch({ type: FIND_ONE_USER, payload: data });
		} catch (e) {
			console.log(e.message);
		}
	};
