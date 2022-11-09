
import './App.css';
import {Box} from "@chakra-ui/react";
import { CartItem } from './vh-component/CartItem';
import { Product } from './vh-component/Product';
function App() {
  return (
    <div>
    {/* <Product/> */}
    <CartItem/>
    </div>
  );
}

export default App;
