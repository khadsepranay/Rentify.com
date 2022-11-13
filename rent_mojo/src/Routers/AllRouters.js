import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';
import Packages from '../Components/Category pages/Packages';
import Bedroom from '../Components/Category pages/Packages_Categories/Bedroom';
import Livingroom from '../Components/Category pages/Packages_Categories/Livingroom';
import Appliances from '../Components/Category pages/Packages_Categories/Appliances';
import WorkFromHome from '../Components/Category pages/Packages_Categories/WorkFromHome';
import KitchenDining from '../Components/Category pages/Packages_Categories/Kitchen&Dining';
import SmartHome from '../Components/Category pages/Packages_Categories/SmartHome';
import FitandExercise from '../Components/Category pages/Packages_Categories/Fit&Exercise';
import StudioApartment from '../Components/Category pages/Packages_Categories/StudioApartment';
import OneBHK from '../Components/Category pages/Packages_Categories/1BHK';
import TwoBHK from '../Components/Category pages/Packages_Categories/2BHK';
import SingleBedroomPage from '../Components/Category pages/Packages_Categories/SingleBedroomPage';
import { ChakraProvider } from '@chakra-ui/react';
import { AppFilter } from '../Components/Productpages/AppFilter';
import { ElctoFilter } from '../Components/Productpages/ElctoFilter';
import { FurFilter } from '../Components/Productpages/FurFilter';
import { Fitfilter } from '../Components/Productpages/Fitfilter';
import PaymentPage from '../Components/Home/checkoutPages/PaymentPage';
import MyAccount from '../Components/Home/UserProfilePages/MyAccount';
import Referrals from '../Pages/Accounts/Referrals';
import Requests from '../Pages/Accounts/Requests';
import RefundStatus from '../Pages/Accounts/RefundStatus';
import UndeliveredOrders from '../Pages/Accounts/UndeliveredOrders';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SingleWorkFromHomePage from '../Components/Category pages/Packages_Categories/SingleWorkFromHome';
import SingleTwoBHKPage from '../Components/Category pages/Packages_Categories/SingleTwoBHK';
import SingleStudioApartmentPage from '../Components/Category pages/Packages_Categories/SingleStudioApartment';
import SingleSmartHomePage from '../Components/Category pages/Packages_Categories/SingleSmartHome';
import SingleOneBHKPage from '../Components/Category pages/Packages_Categories/SingleOneBHK';
import SingleLivingRoomPage from '../Components/Category pages/Packages_Categories/SingleLivingRoom';
import SingleKitcheDiningPage from '../Components/Category pages/Packages_Categories/SingleKitchenDining';
import SingleFitExercisePage from '../Components/Category pages/Packages_Categories/SingleFitExercise';
import SingleBedRoomPage from '../Components/Category pages/Packages_Categories/SingleBedroom';
import SingleAppliancesPage from '../Components/Category pages/Packages_Categories/SingleAppliances';

function AllRouters() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<ChakraProvider>
						<HomePage />
					</ChakraProvider>
				}
			></Route>
			<Route
				path='/appliances'
				element={
					<ChakraProvider>
						<AppFilter />
					</ChakraProvider>
				}
			></Route>
			<Route
				path='/electronics'
				element={
					<ChakraProvider>
						<ElctoFilter />
					</ChakraProvider>
				}
			></Route>
			<Route
				path='/fitness'
				element={
					<ChakraProvider>
						<Fitfilter />
					</ChakraProvider>
				}
			></Route>
			<Route
				path='/furniture'
				element={
					<ChakraProvider>
						<FurFilter />
					</ChakraProvider>
				}
			></Route>
			<Route
				path='/cart'
				element={
					<ChakraProvider>
						<PaymentPage />
					</ChakraProvider>
				}
			></Route>

			<Route
				path='/packages'
				element={<Packages />}
			></Route>
			<Route
				path='/packages/bedroom'
				element={<Bedroom />}
			></Route>
			<Route
				path='/packages/livingroom'
				element={<Livingroom />}
			></Route>
			<Route
				path='/packages/appliances'
				element={<Appliances />}
			></Route>
			<Route
				path='/packages/wfh'
				element={<WorkFromHome />}
			></Route>
			<Route
				path='/packages/KandD'
				element={<KitchenDining />}
			></Route>
			<Route
				path='/packages/smarthome'
				element={<SmartHome />}
			></Route>
			<Route
				path='/packages/FandE'
				element={<FitandExercise />}
			></Route>
			<Route
				path='/packages/studio-apartment'
				element={<StudioApartment />}
			></Route>
			<Route
				path='/packages/1bhk'
				element={<OneBHK />}
			></Route>
			<Route
				path='/packages/2bhk'
				element={<TwoBHK />}
			></Route>
			<Route
				path='/packages/bedroom/:id'
				element={<SingleBedroomPage />}
			></Route>
			<Route
				path='/packages/livingroom/:id'
				element={<SingleLivingRoomPage />}
			></Route>
			<Route
				path='/packages/1bhk/:id'
				element={<SingleOneBHKPage />}
			></Route>
			<Route
				path='/packages/2bhk/:id'
				element={<SingleTwoBHKPage />}
			></Route>
			<Route
				path='/packages/appliances/:id'
				element={<SingleAppliancesPage />}
			></Route>
			<Route
				path='/packages/FandE/:id'
				element={<SingleFitExercisePage />}
			></Route>
			<Route
				path='/packages/KandD/:id'
				element={<SingleKitcheDiningPage />}
			></Route>
			<Route
				path='/packages/smarthome/:id'
				element={<SingleSmartHomePage />}
			></Route>
			<Route
				path='/packages/studio-apartment/:id'
				element={<SingleStudioApartmentPage />}
			></Route>
			<Route
				path='/packages/wfh/:id'
				element={<SingleWorkFromHomePage />}
			></Route>

			<Route
				path='/myAccount'
				element={
					<ChakraProvider>
						<PrivateRoute>
							<MyAccount />
						</PrivateRoute>
					</ChakraProvider>
				}
			></Route>
			<Route
				path='/myAccount/live-orders'
				element={<h1>Live Orders</h1>}
			></Route>
			<Route
				path='/myAccount/undelivered-orders'
				element={
					<ChakraProvider>
						<PrivateRoute>
							<UndeliveredOrders />
						</PrivateRoute>
					</ChakraProvider>
				}
			></Route>
			<Route
				path='/myAccount/refund-status'
				element={
					<ChakraProvider>
						<PrivateRoute>
							<RefundStatus />
						</PrivateRoute>
					</ChakraProvider>
				}
			></Route>
			<Route
				path='/myAccount/referral'
				element={
					<ChakraProvider>
						<PrivateRoute>
							<Referrals />
						</PrivateRoute>
					</ChakraProvider>
				}
			></Route>
			<Route
				path='/myAccount/requests'
				element={
					<ChakraProvider>
						<PrivateRoute>
							<Requests />
						</PrivateRoute>
					</ChakraProvider>
				}
			></Route>
		</Routes>
	);
}

export default AllRouters;
