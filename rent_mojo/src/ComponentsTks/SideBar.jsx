import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function SideBar() {
	return (
		<Flex
			w='200px'
			direction='column'
			gap='20px'
			border={'1px solid'}
		>
			<Link to='/live-orders'>Live Orders</Link>
			<Link to='/undelivered-orders'>Undelivered Orders</Link>
			<Link to='/refund-status'>Refund Status</Link>
			<Link to='/referral'>Referrals</Link>
			<Link to='/requests'>Requests</Link>
		</Flex>
	);
}
