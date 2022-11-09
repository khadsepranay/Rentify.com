import {
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
} from "./actiontype";

const cartInitalState = {
  loading: false,
  error: false,
  cart: [],
};

export const cartReducer = (state = cartInitalState, { type, payload }) => {
  switch (type) {
    case GET_CART_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case GET_CART_SUCCESS: {
      return { ...state, loading: false, cart: payload };
    }
    case GET_CART_ERROR: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return state;
    }
  }
};
