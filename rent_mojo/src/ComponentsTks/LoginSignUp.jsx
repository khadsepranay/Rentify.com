import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	findUsers,
	getAllUsers,
	userLogout,
} from '../reduxTks/Auth/auth.actions';
import Login from './AuthComponents/Login';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Flex,
	Box,
	Button,
	Image,
	Text,
	Input,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react';
import { showOtp } from './OTP';

export default function LoginSignUp() {
	const [number, setNumber] = useState('');
	const { users, newUser, existingUser, isAuthenticated, currentUser } =
		useSelector((store) => store.auth);
	const dispatch = useDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		dispatch(getAllUsers());
	}, []);

	// console.log('Login/users', users);

	const checkUser = async () => {
		dispatch(findUsers({ number: number }));
		showOtp();
	};

	if (newUser) {
		return <div>New User, Please Sign up</div>;
	} else if (existingUser) {
		return <Login />;
	} else {
		return (
			<div>
				{/* <input
					type='tel'
					value={number}
					maxLength='10'
					onChange={({ target }) => setNumber(target.value)}
				/>
				<button onClick={checkUser}>Continue</button> */}
				{!isAuthenticated ? (
					<Button onClick={onOpen}>Login/Signup</Button>
				) : (
					<Menu>
						<MenuButton
							as={Button}
							// rightIcon={<ChevronDownIcon />}
						>
							{currentUser[0].admin
								? `Admin - ${currentUser[0].name}`
								: `User - ${currentUser[0].name}`}
						</MenuButton>
						<MenuList>
							<MenuItem>My Account</MenuItem>
							<MenuItem>Subscriptions</MenuItem>
							<MenuItem>Settings</MenuItem>
							<MenuItem onClick={() => dispatch(userLogout)}>Log Out</MenuItem>
						</MenuList>
					</Menu>
				)}
				<Modal
					isOpen={isOpen}
					onClose={onClose}
				>
					<ModalOverlay />
					<ModalContent
						borderRadius={20}
						maxW={'2xl'}
						h={'md'}
						px={6}
						pt={10}
					>
						<ModalCloseButton />
						<Flex h={'sm'}>
							<Box>
								<Image
									src='https://i.gifer.com/origin/5f/5ffad62fea4ee49330b8467dff73b53b.gif'
									alt='google-gif'
									w={'xs'}
									h={'sm'}
								/>
							</Box>
							{newUser ? (
								<h3>NewUser, Signup</h3>
							) : existingUser ? (
								<h3>Existing User, Login</h3>
							) : (
								<Box bg={'blackAlpha.100'}>
									<ModalBody h={'2xs'}>
										<Text mb={4}>Enter Your Number to Signup or Login</Text>
										<Input
											// colorScheme={'blue'}
											bg={'white'}
											borderColor={'black'}
											type='tel'
											value={number}
											maxLength='10'
											onChange={({ target }) => setNumber(target.value)}
										/>
									</ModalBody>

									<ModalFooter>
										<Button
											colorScheme='red'
											mr={3}
											onClick={checkUser}
										>
											Continue
										</Button>
									</ModalFooter>
								</Box>
							)}
						</Flex>
					</ModalContent>
				</Modal>
			</div>
		);
	}
}
