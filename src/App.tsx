import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css';
import HomePage from './Pages/Home/Home';
import LoadingBall from './Components/LoadingBall/LoadingBall';
import './App.css';
import './Scrollbar.css';
import GamesPage from './Components/GamePage/GamePage';
import SnakeGame from './Components/Games/SnakeGame';
import Error404 from './Components/Error404Page/Error404Page';
import CookieConsentPopup from './Components/CookieConsent/CookieConsent'; // Import the CookieConsent component

const App:React.FC =()=> {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Change this to the actual loading time needed
  }, []);

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

  useEffect(() => {
    const cursor = document.createElement('div');
    const cursorBall = document.createElement('div');
    const cursorDot = document.createElement('div');
  
    cursor.classList.add('cursor');
    cursorBall.classList.add('cursor__ball');
    cursorDot.classList.add('cursor__dot');
  
    cursor.appendChild(cursorBall);
    cursor.appendChild(cursorDot);
    document.body.appendChild(cursor);
  
    const moveCursor = (e: MouseEvent) => {
      cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursorBall.style.left = `${e.clientX}px`;
      cursorBall.style.top = `${e.clientY}px`;
    };
  
    document.addEventListener('mousemove', moveCursor);
  
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <BrowserRouter>
      <ChakraProvider>
        {isLoading ? (
          <LoadingBall />
        ) : (
          <>
            <CookieConsentPopup /> {/* Render the CookieConsent component */}
            <Routes>
              <Route path="/" element={<HomePage id="Home" />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/games/snake" element={<SnakeGame />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </>
        )}
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
//end
