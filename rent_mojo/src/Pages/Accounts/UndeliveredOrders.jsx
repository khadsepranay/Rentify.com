import { Box, Button, Container, Flex, Text, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import HomeNavbar from '../../Components/Home/HomeNavbar';
import SideBar from '../../Components/Home/UserProfilePages/SideBar';

export default function UndeliveredOrders() {
	const { currentUser } = useSelector((store) => store.auth);
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
					h={'xs'}
					border='1px solid lightgrey'
					borderBottom='3px solid cyan'
					justifyContent='center'
					rounded={'md'}
					boxShadow='lg'
				>
					<Text>Hi {currentUser[0]?.name}!</Text>
					<Text>
						We are waiting for you to place your first order to deliver you the
						joy of renting.
					</Text>
					<Button
						colorScheme={'teal'}
						borderRadius='0px'
					>
						Start Renting
					</Button>
				</VStack>
			</Flex>
		</Container>
	);
}
