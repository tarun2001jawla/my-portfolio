import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter,Routes } from 'react-router-dom';
import 'antd/dist/reset.css';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import HomePage from './Pages/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
  
        <Navbar />
        <HomePage id="Home" /> 
        
        <Routes>
          
        </Routes>
      
        
        
       
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
