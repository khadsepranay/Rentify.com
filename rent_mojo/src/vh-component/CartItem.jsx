import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartDelete, CartProduct } from "../vh-redux/cart/action";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
export const CartItem = () => {
  const dispatch = useDispatch();
  const { loading, error, cart } = useSelector((state) => state.Item);

  useEffect(() => {
    dispatch(CartProduct());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(cartDelete(id));
    window.location.reload(false);
  };

  if (loading) {
    return <CircularProgress isIndeterminate color='green.300' />
  } else if (error) {
    return <h2>Error...</h2>;
  }
  return (
    <div>
      {cart?.map((el, index) => (
        <div key={index}>
          <img src={el.img} alt="pic" />
          <br />
          <h3>{el.title}</h3>
          <br />
          <h4>{`${el.price}mo`}</h4>
          <button onClick={() => handleDelete(el.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};
