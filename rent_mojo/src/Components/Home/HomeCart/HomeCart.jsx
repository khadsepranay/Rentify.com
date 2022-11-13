import { Link } from 'react-router-dom';
import { useState } from 'react';
import './HomeCart.css';
export const HomeCart = ({ handleDisplay, RemoveDisplay }) => {
	return (
		<Link to='/cart'>
			<div>
				<span
					onMouseEnter={handleDisplay}
					onMouseLeave={RemoveDisplay}
				>
					Cart
				</span>
				{/* <span className='cart-header'></span> */}
			</div>
		</Link>
	);
};
