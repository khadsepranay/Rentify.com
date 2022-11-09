import { useState } from 'react';

export const OTP = () => {
	let otp, newOtp;
	const [time, setTime] = useState(0);

	// let timer = 20;
	showCountdownTimer(20);

	function showOtp() {
		otp = 9999 - Math.ceil(Math.random() * 1000);
		alert(`OTP is ${otp}`);
	}

	function showCountdownTimer(timer) {
		let timerId = setInterval(() => {
			setTime(timer);
			timer--;
		}, 1000);
	}

	console.log(time);
};
