import { Box, Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function SideBar() {
	return (
		<Flex
			w='15%'
			direction='column'
			// gap='20px'
			// border={'1px solid'}
			boxShadow='dark-lg'
			rounded={'md'}
		>
			<Box
				_hover={{ borderLeft: '5px solid red', pr: '5px' }}
				h={12}
				py={2}
			>
				<Link to='#'>Live Orders</Link>
			</Box>
			<Box
				_hover={{ borderLeft: '5px solid red', pr: '5px' }}
				h={12}
				py={2}
			>
				<Link to='/myAccount/undelivered-orders'>Undelivered Orders</Link>
			</Box>
			<Box
				_hover={{ borderLeft: '5px solid red', pr: '5px' }}
				h={12}
				py={2}
			>
				<Link to='/myAccount/refund-status'>Refund Status</Link>
			</Box>
			<Box
				_hover={{ borderLeft: '5px solid red', pr: '5px' }}
				h={12}
				py={2}
			>
				<Link to='/myAccount/referral'>Referrals</Link>
			</Box>
			<Box
				_hover={{ borderLeft: '5px solid red', pr: '5px' }}
				h={12}
				py={2}
			>
				<Link to='/myAccount/requests'>Requests</Link>
			</Box>
			<Box>
				<Image
					src='https://www.rentomojo.com/public/images/dashboard/LHS-Banner-new.gif'
					alt='advertise'
				/>
			</Box>
		</Flex>
	);
}
