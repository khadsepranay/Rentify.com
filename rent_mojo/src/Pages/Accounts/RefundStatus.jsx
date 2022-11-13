import { Box, Button, Container, Flex, Text, VStack } from '@chakra-ui/react';
import HomeNavbar from '../../Components/Home/HomeNavbar';
import SideBar from '../../Components/Home/UserProfilePages/SideBar';

export default function RefundStatus() {
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
					<Text>You haven't started your subscription with us.</Text>
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
