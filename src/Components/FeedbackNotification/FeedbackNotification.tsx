import React, { useEffect, useState } from 'react';
import { Box, Link, Text, IconButton, Flex, keyframes } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

// Define keyframes for animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const FeedbackNotification: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem('hasVisited');
    if (!visited) {
      setShow(true);
      sessionStorage.setItem('hasVisited', 'true');
    }

    const timer = setTimeout(() => {
      handleClose();
    }, 15000); // Hide after 15 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Box
      position="fixed"
      bottom="20px"
      right="20px"
      p="6"
      bgGradient="linear(to-r, teal.400, teal.600)"
      color="white"
      borderRadius="lg"
      boxShadow="2xl"
      zIndex="11000"  // Increased z-index to be above hobbies section
      maxW="350px"
      animation={`${show ? fadeInUp : fadeOut} 0.5s ease-out`}
      onAnimationEnd={!show ? handleClose : undefined}
      opacity={show ? 1 : 0}
      visibility={show ? 'visible' : 'hidden'}
      className='feedback-box'
    >
      <Flex alignItems="center" justifyContent="space-between" >
        <Box>
          <Text mb="2" fontSize="lg" fontWeight="bold" fontFamily="Poppins, sans-serif">
            Enjoying this website?
          </Text>
          <Text mb="2" fontSize="md" fontFamily="Poppins, sans-serif">
            Take a moment to fill out the feedback form!
          </Text>
          <Link
            href="https://z6oh3qa8k3u.typeform.com/to/DYHumylD"
            target="_blank"
            color="yellow.300"
            fontWeight="bold"
            fontFamily="Poppins, sans-serif"
            _hover={{ textDecoration: 'underline', color: 'yellow.400' }}
          >
            Fill Feedback Form
          </Link>
        </Box>
        <IconButton
          aria-label="Close notification"
          icon={<CloseIcon />}
          size="sm"
          variant="ghost"
          color="white"
          _hover={{ bg: 'transparent', color: 'red.400' }}
          _active={{ bg: 'transparent' }}
          onClick={handleClose}
        />
      </Flex>
    </Box>
  );
};

export default FeedbackNotification;
