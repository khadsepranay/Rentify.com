// import { useState } from 'react';

// export const OTP = () => {
// let otp = showOtp();
// 	const [time, setTime] = useState(0);

// let timer = 20;
// showCountdownTimer(20);

// function showCountdownTimer(timer) {
// 	let timerId = setInterval(() => {
// 		setTime(timer);
// 		timer--;
// 	}, 1000);
// }

// 	console.log(time);
// };

export function showOtp() {
	let otp = 9999 - Math.ceil(Math.random() * 1000);
	alert(`OTP is ${otp}`);

	return otp;
}
