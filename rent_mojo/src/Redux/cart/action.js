import axios from "axios";
import {
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
} from "./actiontype";

export const CartProduct = () => async (dispatch) => {
  dispatch({ type: GET_CART_LOADING });

  try {
    let response = await axios.get("https://rentify-com.onrender.com/CartItem");
    let data = response.data;
    dispatch({ type: GET_CART_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_CART_ERROR });
  }
};

export const cartDelete = (id) => async (dispatch) => {
  dispatch({ type: GET_CART_LOADING });
  try {
    let remove = await axios.delete(`https://rentify-com.onrender.com/CartItem/${id}`);
    let data = remove.data;
    console.log(remove, "remove");
    dispatch({ type: GET_CART_SUCCESS, payload: data });
  }
   catch (err) {
    dispatch({ type: GET_CART_ERROR});
  }

}

export const IncDecQty = (el) => async (dispatch) => {
  console.log("patchData1", el);
  dispatch({ type: GET_CART_LOADING });
  try{
    let res = await axios.patch(`https://rentify-com.onrender.com/CartItem/${el.id}`,el);
    let data = res.data;
    console.log(data,"patachData2")
    dispatch({ type: GET_CART_SUCCESS, payload: data})
  }
  catch(e){
    dispatch({ type: GET_CART_ERROR});
  }
}


