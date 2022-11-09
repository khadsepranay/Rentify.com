import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./actiontype";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let res = await axios.get("http://localhost:8080/Furniture");
    let data = res.data;
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const postProducts = (el) => {
    // dispatch({ type: GET_PRODUCTS_LOADING });
     axios.post(`http://localhost:8080/CartItem`,el);
    //   let data = res.data;
    //   dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  };