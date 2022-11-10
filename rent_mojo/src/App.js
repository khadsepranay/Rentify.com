import './App.css';
import { HomePage } from './RohiniPages/HomePage';
import { CartItem } from './vh-component/CartItem'; 
import Footer from './RohiniComponents/Footer';
function App() {
  return (
    <div className="App">
      <HomePage/>
      <Footer/>   
      <CartItem/>
    </div>
  );

}

export default App;
