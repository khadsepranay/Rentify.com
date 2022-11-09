import { GET_ALL_USERS } from './newUser.types';
import axios from 'axios';

export const getAllUsers = () => async (dispatch) => {
	try {
		let res = await axios.get('http://localhost:8080/users');
		let data = await res.data;
		console.log(data);
		dispatch({ type: GET_ALL_USERS, payload: data });
		return data;
	} catch (e) {
		console.log(e);
	}
};

export const findUsers = (params = {}) => {
	return axios.get('http://localhost:8080/users', {
		params: {
			number: params.number,
		},
	});
};
