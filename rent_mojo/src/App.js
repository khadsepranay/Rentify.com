import './App.css';
import { HomePage } from './RohiniPages/HomePage';
import { CartItem } from './vh-component/CartItem'; 
import Footer from './RohiniComponents/Footer';
import LoginSignUp from './ComponentsTks/LoginSignUp';
function App() {
  return (
    <div className="App">
      <HomePage/>
      <Footer/>   
      <CartItem/>
      {/* <LoginSignUp /> */}
    </div>
  );
}

export default App;
