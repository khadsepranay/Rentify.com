import './App.css';
import { CartItem } from './vh-component/CartItem';
import Packages from './Components/Category pages/Packages';
import Bedroom from './Components/Category pages/Packages_Categories/Bedroom';
import AllRouters from './Routers/AllRoutes';
function App() {
  return (
    <div className="App">
      <HomePage/>   
      <CartItem/>
      <AllRouters/>
    </div>
  );

}

export default App;
