import { newProductAdded } from "./actions";
import {
  CartData,
  DecreaseCartData,
  IncreaseCartData,
  isAddedToCart,
  isNewItemAdded,
} from "./actionTypes";

let initState = {
  isAdded: false,
  CartData: [],
  NewProductAdded: false,
};

let CartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case isAddedToCart:
      return { ...state, isAdded: payload };
    case CartData:
      return { ...state, CartData: payload };
    case IncreaseCartData:
      return { ...state, CartData: payload };
    case DecreaseCartData:
      return { ...state, CartData: payload };
    case isNewItemAdded:
      return { ...state, NewProductAdded: payload };
    default:
      return { ...state };
  }
};

export { CartReducer };
