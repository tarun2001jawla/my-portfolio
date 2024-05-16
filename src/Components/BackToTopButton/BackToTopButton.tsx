// BackToTopButton.tsx
import React, { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

const BackToTopButton: React.FC = () => {
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
          bg="teal.500"
          color="white"
          _hover={{ bg: 'teal.600' }}
          size="lg"
        />
      )}
    </>
  );
};

export default BackToTopButton;
