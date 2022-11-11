import { useEffect, useState } from 'react';
import { showOtp } from '../OTP';
import { useDispatch } from 'react-redux';

export default function Login() {
	const [inputOtp, setInputOtp] = useState(0);
	const [otp, setOtp] = useState(0);
	const dispatch = useDispatch();

	// let otp;
	useEffect(() => {
		setOtp(showOtp());
		console.log(otp, typeof otp);
	}, []);

	const verifyOtp = () => {
		// console.log(otp, inputOtp);
		if (otp == Number(inputOtp)) {
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
			<button onClick={() => verifyOtp()}>Verify</button>
		</div>
	);
}
