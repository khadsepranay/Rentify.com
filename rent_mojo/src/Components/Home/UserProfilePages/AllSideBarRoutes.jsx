import { Route, Routes } from 'react-router-dom';
import Referrals from '../../../Pages/Accounts/Referrals';
import RefundStatus from '../../../Pages/Accounts/RefundStatus';
import Requests from '../../../Pages/Accounts/Requests';
import UndeliveredOrders from '../../../Pages/Accounts/UndeliveredOrders';
import MyAccount from './MyAccount';

export default function AllSideBarRoutes() {
	return (
		<Routes>
			<Route
				path='/myAccount/live-orders'
				element={<h1>Live Orders</h1>}
			></Route>
			<Route
				path='/myAccount/undelivered-orders'
				element={<UndeliveredOrders />}
			></Route>
			<Route
				path='/myAccount/refund-status'
				element={<RefundStatus />}
			></Route>
			<Route
				path='/myAccount/referral'
				element={<Referrals />}
			></Route>
			<Route
				path='/myAccount/requests'
				element={<Requests />}
			></Route>
		</Routes>
	);
}
