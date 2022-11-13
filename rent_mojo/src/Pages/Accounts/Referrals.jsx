import {
	Box,
	Container,
	Flex,
	Icon,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Link,
	Text,
	VStack,
} from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImMail4 } from 'react-icons/im';
import SideBar from '../../Components/Home/UserProfilePages/SideBar';
import HomeNavbar from '../../Components/Home/HomeNavbar';

export default function Referrals() {
	return (
		<Container maxW={'9xl'}>
			<Box
				mx={'-10px'}
				mt={'90px'}
			>
				<HomeNavbar />
			</Box>
			<Flex
				gap={2}
				justifyContent='space-evenly'
			>
				<SideBar />
				<VStack
					w='80%'
					gap={4}
				>
					<Box
						w='100%'
						bg='#1dbdc0'
						bgImage='https://www.rentomojo.com/public/images/referral/referral-bg.png'
						bgPos={'right'}
						bgRepeat='no-repeat'
						h='2xs'
						boxShadow={'lg'}
						rounded='md'
					>
						<Flex
							justifyContent={'space-evenly'}
							pt={6}
						>
							<VStack
								alignItems='flex-start'
								justifyContent='space-between'
								p={4}
								mr={8}
							>
								<Text
									color={'white'}
									fontSize='25px'
								>
									Refer a friend, save on rent!
								</Text>
								<Text
									align={'left'}
									color={'white'}
								>
									Earn ₹25 when your friend signs up on rentomojo and up to ₹200
									when your friend orders successfully.
								</Text>
								<Text color={'white'}>
									Refer more to earn more!{' '}
									<Link textDecoration={'underline'}>
										Click here for details
									</Link>
								</Text>
								<Flex gap={4}>
									<Input
										bg={'white'}
										type='email'
										borderRadius={24}
										placeholder='Enter Email Id'
										fontSize={'12px'}
										minW='220px'
									/>
									<InputGroup>
										<Input
											bg={'white'}
											type='email'
											borderRadius={24}
											placeholder='Referral Code'
											fontSize={'12px'}
											minW='220px'
										/>
										<InputRightElement
											ml='-50px'
											borderLeft={'1px solid lightgrey'}
											w={28}
											gap={2}
										>
											<Icon
												as={FaFacebook}
												color='blue.600'
												w='25px'
												h='25px'
											/>
											<Icon
												as={AiFillTwitterCircle}
												color='blue.400'
												w='27px'
												h='27px'
											/>
											<Icon
												as={ImMail4}
												color='red.600'
												w='25px'
												h='25px'
											/>
										</InputRightElement>
									</InputGroup>
								</Flex>
							</VStack>
							<Box>
								<Image
									src='https://www.rentomojo.com/public/images/referral/sorted_new.png'
									alt='referral-img'
									w='2xs'
								/>
							</Box>
						</Flex>
					</Box>
					<VStack
						w='100%'
						border='1px solid lightgrey'
						borderBottom='3px solid cyan'
						h='xs'
						// alignItems='center'
						justifyContent='center'
						mt={8}
						rounded={'md'}
						boxShadow='lg'
					>
						<Text fontSize='20px'>NO REFERRALS</Text>
						<Text>
							Uh oh! You don't have any referrals yet. Refer your friends to
							earn RentoMoney in your account for every successful referral.
						</Text>
					</VStack>
				</VStack>
			</Flex>
		</Container>
	);
}
