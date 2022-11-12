import './App.css';
import AllRouters from './Routers/AllRouters';
import { ChakraProvider } from '@chakra-ui/react';
import HomeNavbar from './Components/Home/HomeNavbar';
function App() {
  return (
    <div className="App">
    <ChakraProvider><HomeNavbar /></ChakraProvider>
      <AllRouters/> 
    </div>
  );
}

export default App;
