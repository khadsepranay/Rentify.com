import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Box,
	Button,
	Input,
	ModalBody,
	ModalFooter,
	Text,
	useToast,
} from '@chakra-ui/react';

export default function Signup({ number , onClose }) {
	const toast = useToast();
	const [inputOtp, setInputOtp] = useState('');
	const [otp, setOtp] = useState('');

	const [otpVerify, setOtpVerify] = useState(false);
	const [registerForm, setRegisterForm] = useState({
		name: '',
		mobile: number,
		email: '',
		admin: false,
	});
	function showOtp() {
		let otp = 9999 - Math.ceil(Math.random() * 1000);
		// alert(`OTP is ${otp}`);
		toast({
			title: 'OTP',
			description: `Your 4-digit OTP is ${otp}`,
			status: 'info',
			duration: 5000,
			isClosable: true,
			position: 'top',
		});

		return otp;
	}

	const dispatch = useDispatch();

	// let otp;
	useEffect(() => {
		setOtp(showOtp());
		// console.log(otp, typeof otp);
	}, []);

	const verifyOtp = () => {
		// console.log(otp, inputOtp);
		if (otp == Number(inputOtp)) {
			// alert('OTP verified');
			toast({
				title: 'OTP Verified',
				description: 'OTP has been verified successfully',
				status: 'success',
				duration: 3000,
				isClosable: true,
				position: 'top',
			});
			setOtpVerify(true);
		} else {
			toast({
				title: 'Incorrect OTP',
				description: 'Please enter correct OTP',
				status: 'error',
				duration: 3000,
				isClosable: true,
				position: 'top',
			});
			showOtp();
		}
	};

	const userRegister = async () => {
		// console.log('currentUser', currentUser);
		onClose();
	};

	const handleChange = (e) => {
		setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
	};
	console.log(registerForm);

	// const { name, email } = registerForm;
	return (
		<>
			{!otpVerify ? (
				<Box bg={'blackAlpha.100'}>
					<ModalBody h={'2xs'}>
						<Text mb={4}>Enter the 4-Digit OTP Recieved</Text>
						<Input
							bg={'white'}
							borderColor={'black'}
							type='number'
							maxLength='4'
							value={inputOtp}
							onChange={({ target }) => setInputOtp(target.value)}
						/>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme='red'
							mr={3}
							onClick={verifyOtp}
						>
							Continue
						</Button>
					</ModalFooter>
				</Box>
			) : (
				<Box bg={'blackAlpha.100'}>
					<ModalBody h={'2xs'}>
						<Text mb={4}>Enter Your Number to Signup or Login</Text>
						<label> Name </label>
						<Input
							bg={'white'}
							borderColor={'black'}
							type='text'
							name='name'
							value={registerForm.name}
							// maxLength='10'
							onChange={handleChange}
						/>
						<label>Email</label>
						<Input
							bg={'white'}
							borderColor={'black'}
							type='email'
							name='email'
							value={registerForm.email}
							// maxLength='10'
							onChange={handleChange}
						/>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme='red'
							mr={3}
							onClick={userRegister}
						>
							Continue
						</Button>
					</ModalFooter>
				</Box>
			)}
		</>
	);
}
