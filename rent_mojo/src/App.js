import './App.css';
import Routers from './Routers/Routers';
import Footer from './Components/Home/Footer'
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <div className="App">
      <Routers/>
      <ChakraProvider><Footer/></ChakraProvider>
    </div>
  );
}

export default App;
