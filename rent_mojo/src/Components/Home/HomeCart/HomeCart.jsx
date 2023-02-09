import { Link } from 'react-router-dom';
import { useState } from 'react';
import './HomeCart.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
export const HomeCart = ({ handleDisplay, RemoveDisplay }) => {

	let CartData = useSelector((state)=>state.Cart.CartData)
	let isAdded = useSelector((state)=>state.Cart.isAdded)


	return (
		<Link to='/cart'>
			<div>
				<span
					onMouseEnter={handleDisplay}
					onMouseLeave={RemoveDisplay}
				>
					Cart
				</span>
				<span className='cart-header'>{CartData.length}</span>
			</div>
		</Link>
	);
};
