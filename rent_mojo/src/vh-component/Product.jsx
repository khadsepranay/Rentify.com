import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { getProducts, postProducts } from "../vh-redux/product/action";
export const Product = () => {
  // const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.product)
  const handleClick = (el) => {
    postProducts(el);
  }
  useEffect(() => {
  dispatch(getProducts());
  },[dispatch])

  if(loading){
    return <CircularProgress isIndeterminate color='green.300' />
  }else if(error){
    return <h2>Error...</h2>
  }
  return (
    <div>
      {data?.map((el,index) => (
        <div key={index}>
       <img src={el.img} alt="pic" width="200px"/><br/>
       <h2>cat:{el.category}</h2>
       <button onClick={()=> handleClick(el)}>Add to cart</button>
       </div>
))}
    </div>
  );
};
