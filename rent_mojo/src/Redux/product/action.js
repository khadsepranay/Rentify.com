import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./actiontype";

export const getProducts = (params) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let res = await axios.get("https://rentify-com.onrender.com/Furniture",params);
    let data = res.data;
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const getType = (params) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let res = await axios.get("https://rentify-com.onrender.com/Appliances",params);
    let data = res.data;
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const getFitness = (params) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let res = await axios.get("https://rentify-com.onrender.com/Fitness",params);
    let data = res.data;
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const getElectronics = (params) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let res = await axios.get("https://rentify-com.onrender.com/Electronics",params);
    let data = res.data;
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const postProducts = (el) => {
    // dispatch({ type: GET_PRODUCTS_LOADING });
     axios.post(`https://rentify-com.onrender.com/CartItem`,el);
    //   let data = res.data;
    //   dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  };