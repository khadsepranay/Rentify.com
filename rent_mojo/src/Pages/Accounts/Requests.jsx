import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import SideBar from '../../Components/Home/UserProfilePages/SideBar';
import HomeNavbar from '../../Components/Home/HomeNavbar';

export default function Requests() {
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
				<Flex
					justifyContent={'space-between'}
					// h={'xs'}
					w='80%'
					border='1px solid lightgrey'
					// borderBottom='3px solid cyan'
					alignItems='flex-start'
					rounded={'md'}
					boxShadow='lg'
					p={4}
				>
					<Text>
						If you have raised any requests, they would show up here with the
						status of each request.
					</Text>
					<Button
						variant={'outline'}
						colorScheme={'teal'}
						_hover={{ color: 'white', bg: 'cyan' }}
					>
						New Request <ChevronDownIcon />
					</Button>
				</Flex>
			</Flex>
		</Container>
	);
}
