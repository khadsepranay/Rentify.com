import { useState } from 'react';
import { showOtp } from '../OTP';
import { useDispatch } from 'react-redux';

export default function Login() {
	const [inputOtp, setInputOtp] = useState('');
	const dispatch = useDispatch();

	let otp = showOtp();

	const verifyOtp = () => {
		if (otp == inputOtp) {
			alert('OTP verified');
		} else {
			alert('please try again');
			showOtp();
		}
	};

	return (
		<div>
			<input
				type='number'
				maxLength='4'
				value={inputOtp}
				onChange={({ target }) => setInputOtp(target.value)}
			/>
			<button onClick={() => verifyOtp}>Verify</button>
		</div>
	);
}
