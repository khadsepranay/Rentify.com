import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Box,
	Button,
	HStack,
	Input,
	ModalBody,
	ModalFooter,
	PinInput,
	PinInputField,
	Text,
	useToast,
} from '@chakra-ui/react';
import { setLoginUser } from '../../../../Redux/Auth/auth.actions';

export default function Login({ onClose }) {
	const toast = useToast();
	const [inputOtp, setInputOtp] = useState('');
	const [otp, setOtp] = useState('');

	// const [otpVerify, setOtpVerify] = useState(false);
	const { currentUser } = useSelector((store) => store.auth);
	const dispatch = useDispatch();
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
			// setOtpVerify(true);
			dispatch(setLoginUser(currentUser[0]));
			onClose();
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

	return (
		<>
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
		</>
	);
}
