import React, { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

const BackToTopButton:React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <IconButton
          onClick={scrollToTop}
          aria-label="Back to Top"
          icon={<ArrowUpIcon />}
          position="fixed"
          bottom="6"
          right="6"
          size="lg"
          borderRadius="full"
          boxShadow="md"
          transition="all 0.3s ease"
          _hover={{
            transform: 'scale(1.1)',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
            '@media (hover: hover) and (pointer: fine)': {
              backgroundImage: 'linear-gradient(90deg, #ff6b6b, #ffa500)',
            },
          }}
          _active={{
            transform: 'scale(0.9)',
          }}
          bg="linear-gradient(45deg, #ff416c, #ff4b2b)"
          color="white"
        />
      )}
    </>
  );
};

export default BackToTopButton;