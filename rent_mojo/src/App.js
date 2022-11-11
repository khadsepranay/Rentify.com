import './App.css';
<<<<<<< HEAD
import { HomePage } from './RohiniPages/HomePage';
import { CartItem } from './vh-component/CartItem'; 
import Footer from './RohiniComponents/Footer';
=======
import LoginSignUp from './ComponentsTks/LoginSignUp';
import { HomePage } from './RohiniPages/HomePage';
import { CartItem } from './vh-component/CartItem';
import Packages from './Components/Category pages/Packages';
import Bedroom from './Components/Category pages/Packages_Categories/Bedroom';
import AllRouters from './Routers/AllRoutes';
>>>>>>> main
function App() {
  return (
    <div className="App">
      <HomePage/>
      <Footer/>   
      <CartItem/>
      <AllRouters/>
      <LoginSignUp />
    </div>
  );

export default App;
