import './App.css';
import AllRouters from './Routers/AllRouters';
import { ChakraProvider } from '@chakra-ui/react';
import HomeNavbar from './Components/Home/HomeNavbar';
import Nav from './Components/Productpages/Nav';
import Footer from './Components/Home/Footer';
function App() {
  return (
    <div className="App">
      <AllRouters/> 
      <ChakraProvider><Footer/></ChakraProvider>
    </div>
  );
}

export default App;
