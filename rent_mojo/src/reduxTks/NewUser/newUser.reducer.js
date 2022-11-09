import { GET_ALL_USERS } from './newUser.types';

const initState = {
	users: [],
	newUser: false,
	loading: false,
	error: false,
};

export const newUserReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case GET_ALL_USERS: {
			return {
				...state,
				users: [...payload],
			};
		}
		default: {
			return state;
		}
	}
};
