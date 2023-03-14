import { Link } from "react-router-dom";
import "./HomeCart.css";
import { useSelector } from "react-redux";
export const HomeCart = ({ handleDisplay, RemoveDisplay }) => {
	
  let CartData = useSelector((state) => state.Cart.CartData);

  return (
    <Link to="/cart">
      <div>
        <span onMouseEnter={handleDisplay} onMouseLeave={RemoveDisplay}>
          Cart
        </span>
        <span className="cart-header">{CartData.length}</span>
      </div>
    </Link>
  );
};
