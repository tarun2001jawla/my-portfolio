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

const FeedbackNotification: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem('hasVisited');
    if (!visited) {
      setShow(true);
      sessionStorage.setItem('hasVisited', 'true');
    }

    const timer = setTimeout(() => {
      setShow(false);
    }, 15000); // Hide after 15 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <Box
      position="fixed"
      bottom="20px"
      right="20px"
      p="6"
      bgGradient="linear(to-r, blue.400, blue.600)"
      color="white"
      borderRadius="lg"
      boxShadow="2xl"
      zIndex="1000"
      maxW="350px"
      animation={`${fadeInUp} 0.5s ease-out`}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Text mb="2" fontSize="lg" fontWeight="bold">
            Enjoying this website?
          </Text>
          <Text mb="2" fontSize="md">
            Take a moment to fill out our feedback form!
          </Text>
          <Link
            href="https://forms.gle/r7JLzzxafUJ7Lfg1A"
            target="_blank"
            color="yellow.300"
            fontWeight="bold"
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
          onClick={() => setShow(false)}
        />
      </Flex>
    </Box>
  );
};

export default FeedbackNotification;
