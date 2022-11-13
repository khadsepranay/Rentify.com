import {
	ADD_NEW_USER,
	CURRENT_USER,
	FIND_ONE_USER,
	GET_ALL_USERS,
	USER_LOGOUT,
} from './auth.types';

const initState = {
	users: [],
	currentUser: [],
	number: '',
	newUser: false,
	existingUser: false,
	isAuthenticated: false,
	loading: false,
	error: false,
};

export const authReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case GET_ALL_USERS: {
			return {
				...state,
				users: [...payload],
			};
		}
		case ADD_NEW_USER: {
			return {
				...state,
				users: [...state.users, payload],
			};
		}
		case FIND_ONE_USER: {
			let flag = false;
			if (payload.length !== 0) {
				console.log('authReducer/FIND_ONE_USER: -', payload[0].name);
				flag = false;
				return {
					...state,
					newUser: flag,
					existingUser: !flag,
					currentUser: [...payload],
				};
			} else {
				console.log('new user');
				flag = true;
				return {
					...state,
					newUser: flag,
					existingUser: !flag,
					currentUser: [],
				};
			}
			// console.log(flag);
		}
		case CURRENT_USER: {
			return {
				...state,
				isAuthenticated: true,
			};
		}
		case USER_LOGOUT: {
			return {
				...state,
				currentUser: [],
				isAuthenticated: false,
			};
		}
		default: {
			return state;
		}
	}
};
