import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findUsers, getAllUsers } from '../reduxTks/Auth/auth.actions';
import Login from './AuthComponents/Login';

export default function LoginSignUp() {
	const [number, setNumber] = useState('');
	const { users, newUser, existingUser } = useSelector((store) => store.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllUsers());
	}, []);

	// console.log('Login/users', users);

	const checkUser = async () => {
		dispatch(findUsers({ number: number }));
	};

	if (newUser) {
		return <div>New User, Please Sign up</div>;
	} else if (existingUser) {
		return <Login />;
	} else {
		return (
			<div>
				<input
					type='tel'
					value={number}
					maxLength='10'
					onChange={({ target }) => setNumber(target.value)}
				/>
				<button onClick={checkUser}>Continue</button>
			</div>
		);
	}
}
