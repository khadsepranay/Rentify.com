import { Link } from 'react-router-dom';
import { useState } from 'react';
import './HomeCart.css';
import { useSelector } from 'react-redux';
export const HomeCart = ({ handleDisplay, RemoveDisplay }) => {
	const {cart} = useSelector((state)=>state.Item)
	console.log("cart",cart)
	return (
		<Link to='/cart'>
			<div>
				<span
					onMouseEnter={handleDisplay}
					onMouseLeave={RemoveDisplay}
				>
					Cart
				</span>
				{cart.length==0?null:<span className='cart-header'>{cart.length}</span>}
			</div>
		</Link>
	);
};
