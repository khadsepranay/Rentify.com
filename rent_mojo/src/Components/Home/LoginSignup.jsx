// import { Box, Button, FormControl, FormLabel, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react"
// import { useState } from "react";

// export const LoginSignup = () => {
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const [clicked, setClicked] = useState(false);

//     const handleClick = () => {
//         setClicked(true);
//     }

//     return (
//         <>
//             <Button
//                 onClick={onOpen}
//                 display={{ base: 'none', md: 'inline-flex' }}
//                 fontSize={'12px'}
//                 fontWeight={400}
//                 color={'white'}
//                 bg={'#dc3226'}
//                 href={'#'}
//                 borderRadius={'10px'}
//                 p={'0px 20px'}
//                 _hover={{
//                     bg: 'transparent',
//                     border: '1px solid red',
//                     color: '#dc3226',
//                     cursor: 'pointer'
//                 }}>
//                 LOGIN/SIGNUP
//             </Button>

//             <Modal size={'2xl'} isCentered={true} blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
//                 <ModalOverlay />
//                 <ModalContent >
//                     {/* <ModalHeader>Modal Title</ModalHeader> */}
//                     <ModalCloseButton />
//                     <ModalBody display={'flex'} >
//                         <Box>
//                             <Image src="./logoImage/login_side.gif" alt="cat-img" width={'400px'} height={"450px"} />
//                         </Box>
//                         <Box display={'flex'} flexDirection={'column'} gap={"20px"} marginTop={'-50px'} justifyContent={'center'}>
//                            {
//                             !clicked ?
//                                 <FormControl id="email">
//                                     <br/>
//                                     <FormLabel>
//                                         Enter your name
//                                     </FormLabel>
//                                     <Input
//                                         focusBorderColor="none"
//                                         border={'none'}
//                                         borderRadius={'none'}
//                                         borderBottom={'3px solid lightgray'}
//                                         placeholder="Enter your name*"
//                                         _placeholder={{ color: 'gray.500' }}
//                                         type="text"
//                                         required
//                                     />
//                                     <br/>
//                                     <br/>
//                                     <FormLabel>
//                                         Enter your phone number
//                                     </FormLabel>
//                                     <Input
//                                         focusBorderColor="none"
//                                         border={'none'}
//                                         borderRadius={'none'}
//                                         borderBottom={'3px solid lightgray'}
//                                         placeholder="Enter your phone number*"
//                                         _placeholder={{ color: 'gray.500' }}
//                                         type="number"
//                                         required
//                                     />
//                                     <Stack>
//                                         <br />
//                                         <Button
//                                             bg={'#dc3226'}
//                                             color={'white'}
//                                             onClick={handleClick}
//                                             _hover={{
//                                                 bg: '#dc3226',
//                                             }}>
//                                             Continue
//                                         </Button>
//                                     </Stack>
//                                 </FormControl>
//                             :
//                                 <FormControl id="otp">
//                                     <FormLabel>
//                                         Enter your OTP
//                                     </FormLabel>
//                                     <Input
//                                         focusBorderColor="none"
//                                         border={'none'}
//                                         borderRadius={'none'}
//                                         borderBottom={'3px solid lightgray'}
//                                         placeholder="Enter your OTP*"
//                                         _placeholder={{ color: 'gray.500' }}
//                                         type="number"
//                                         required
//                                     />
//                                     <Stack>
//                                         <br />
//                                         <Button
//                                             bg={'#dc3226'}
//                                             color={'white'}
//                                             onClick={onClose}
//                                             _hover={{
//                                                 bg: '#dc3226',
//                                             }}>
//                                             Login
//                                         </Button>
//                                     </Stack>
//                                 </FormControl>
//                             }
//                         </Box>
//                     </ModalBody>
//                 </ModalContent>
//             </Modal>
//         </>
//     )
// }

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	findUsers,
	getAllUsers,
	userLogout,
} from '../../Redux/Auth/auth.actions';
import Login from '../Home/HomeCart/AuthComponents/Login';
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
	useToast,
} from '@chakra-ui/react';
// import { showOtp } from './OTP';
import Signup from '../Home/HomeCart/AuthComponents/Signup';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginSignUp() {
	const toast = useToast();
	const [number, setNumber] = useState('');
	const { users, newUser, existingUser, isAuthenticated, currentUser } =
		useSelector((store) => store.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		dispatch(getAllUsers());
	}, []);

	// console.log('Login/users', users);

	const checkUser = async () => {
		dispatch(findUsers({ number: Number(number) }));
		// showOtp();
	};

	return (
		<div>
			{!isAuthenticated ? (
				<Button
					onClick={onOpen}
					display={{ base: 'none', md: 'inline-flex' }}
					fontSize={'12px'}
					fontWeight={400}
					color={'white'}
					bg={'#dc3226'}
					borderRadius={'10px'}
					p={'0px 20px'}
					_hover={{
						bg: 'transparent',
						border: '1px solid red',
						color: '#dc3226',
						cursor: 'pointer',
					}}
				>
					Login/Signup
				</Button>
			) : (
				<Menu>
					<MenuButton
						as={Button}
						display={{ base: 'none', md: 'inline-flex' }}
						fontSize={'12px'}
						fontWeight={400}
						color={'white'}
						bg={'#dc3226'}
						borderRadius={'10px'}
						p={'0px 20px'}
						_hover={{
							bg: 'transparent',
							border: '1px solid red',
							color: '#dc3226',
							cursor: 'pointer',
						}}
					>
						{currentUser[0].admin
							? `Admin - ${currentUser[0].name}`
							: `User - ${currentUser[0].name}`}
					</MenuButton>
					<MenuList>
						<MenuItem>
							<Link to='/myAccount/undelivered-orders'>My Account</Link>
						</MenuItem>
						<MenuItem>Subscriptions</MenuItem>
						<MenuItem>Settings</MenuItem>
						<MenuItem
							onClick={() => {
								dispatch(userLogout(currentUser[0].id));
								navigate('/');
								toast({
									title: 'Log Out Successful',
									description: 'You have been successfully logged out.',
									status: 'success',
									duration: 3000,
									isClosable: true,
									position: 'top',
								});
							}}
						>
							Log Out
						</MenuItem>
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
								src='https://images.squarespace-cdn.com/content/v1/55e06d0ee4b0718764fcc921/1507805805238-M8XG4RMCMWITZ7LJGEEF/slidebank+login.gif'
								alt='google-gif'
								w={'xs'}
								h={'sm'}
							/>
						</Box>
						{newUser ? (
							<Signup number={Number(number)} />
						) : existingUser ? (
							<Login onClose={onClose} />
						) : (
							<Box bg={'blackAlpha.100'}>
								<ModalBody h={'2xs'}>
									<Text mb={4}>Enter Your Number to Signup or Login</Text>
									<Input
										// colorScheme={'blue'}
										bg={'white'}
										borderColor={'black'}
										type='number'
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
