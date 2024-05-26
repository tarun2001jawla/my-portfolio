import './Scrollbar.css'
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes } from 'react-router-dom';
import 'antd/dist/reset.css';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { useEffect } from 'react';
import HomePage from './Pages/Home/Home';




function App() {
  

 
  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'C')) || // Disable copy
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) || // Disable Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) || // Disable Ctrl+Shift+J
        (e.ctrlKey && (e.key === 'U' || e.key === 'u')) || // Disable Ctrl+U
        e.key === 'F12' // Disable F12
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('copy', handleCopy);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
   
      <BrowserRouter>
        <ChakraProvider>
          <Navbar />
          <HomePage id="Home" />
          <Routes></Routes>
        </ChakraProvider>
      </BrowserRouter>
    
  );
}

export default App;