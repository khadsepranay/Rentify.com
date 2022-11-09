import './App.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OTP } from './Components/OTP';
import { findUsers, getAllUsers } from './redux/NewUser/newUser.actions';

function App() {
	const [number, setNumber] = useState('');
	const [newUserDetect, setNewUserDetect] = useState(false);
	const [existingUserDetect, setExistingUserDetect] = useState(false);

	const { users } = useSelector((store) => store.newUser);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllUsers());
	}, []);

	console.log(users);

	let otp, newOtp;
	// const [time, setTime] = useState(20);

	// let timer = 20;
	// showCountdownTimer();

	function showOtp() {
		otp = 9999 - Math.ceil(Math.random() * 1000);
		alert(`OTP is ${otp}`);
	}

	// function showCountdownTimer() {
	// let timerId = setInterval(function () {
	// 	setTime((time) => time - 1);
	// 	// timer--;
	// }, 1000);
	// }
	// showOtp();
	// console.log(time);
	const checkUser = async () => {
		let res = await findUsers({ number: Number(number) });
		let user = await res.data;
		if (user) {
			setExistingUserDetect(false);
			setNewUserDetect(true);
		} else {
			setExistingUserDetect(true);
			setNewUserDetect(false);
		}
	};

	if (newUserDetect) {
		return <div>New User, Please Sign up</div>;
	} else if (existingUserDetect) {
		return <div>Existing User, please login</div>;
	} else {
		return (
			<div className='App'>
				<input
					type='tel'
					value={number}
					maxLength='10'
					onChange={({ target }) => setNumber(target.value)}
				/>
				<button onClick={checkUser}>Continue</button>
				<h3>
					{/* Time: {Math.floor(time / 10) !== 0 ? `00:${time}` : `00:0${time}`} */}
				</h3>
				{/* <OTP /> */}
			</div>
		);
	}
}

export default App;
