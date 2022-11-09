import axios from "axios";
import {
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
} from "./actiontype";

export const CartProduct = () => async (dispatch) => {
  dispatch({ type: GET_CART_LOADING });

  try {
    let response = await axios.get("http://localhost:8080/CartItem");
    let data = response.data;
    dispatch({ type: GET_CART_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_CART_ERROR });
  }
};

export const cartDelete = (id) => async (dispatch) => {
  let remove = await axios.delete(`http://localhost:8080/CartItem/${id}`);
  let x = remove.x;
  dispatch({ type: GET_CART_SUCCESS, payload:x });

}