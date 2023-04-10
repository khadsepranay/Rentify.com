import { Box, Flex } from '@chakra-ui/react';
// import AllRouters from '../../../Routers/AllRouters';
// import AllRoutes from '../../AllRoutes';
import HomeNavbar from '../HomeNavbar';
// import AllSideBarRoutes from './AllSideBarRoutes';
import SideBar from './SideBar';

export default function MyAccount() {
	return (
		<Box>
			<HomeNavbar />
			<Flex p={2}>
				<SideBar />
				{/* <AllRouters /> */}
			</Flex>
		</Box>
	);
}
