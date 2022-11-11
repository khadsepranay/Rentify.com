import { Route, Routes } from 'react-router-dom';
import Referrals from '../PagesTks/Referrals';
import RefundStatus from '../PagesTks/RefundStatus';

export default function AllSideBarRoutes() {
	return (
		<Routes>
			<Route
				path='/live-orders'
				element={<h1>Live Orders</h1>}
			></Route>
			<Route
				path='/undelivered-orders'
				element={<h1>Undelivered Orders</h1>}
			></Route>
			<Route
				path='/refund-status'
				element={<RefundStatus />}
			></Route>
			<Route
				path='/referral'
				element={<Referrals />}
			></Route>
			<Route
				path='/requests'
				element={<h1>Requests</h1>}
			></Route>
		</Routes>
	);
}
