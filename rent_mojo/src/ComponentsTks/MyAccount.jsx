import { Flex } from '@chakra-ui/react';
import AllSideBarRoutes from './AllSideBarRoutes';
import SideBar from './SideBar';

export default function MyAccount() {
	return (
		<Flex>
			<SideBar />
			<AllSideBarRoutes />
		</Flex>
	);
}
