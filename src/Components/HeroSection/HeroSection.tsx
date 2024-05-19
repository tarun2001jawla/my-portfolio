import React, { useEffect, useRef } from 'react';
import { Box, Flex, Heading, Text, Button} from '@chakra-ui/react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import Typed from 'typed.js';
import './HeroSection.css'; 

const HeroSection: React.FC = () => {
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: ['Full Stack Developer', 'UX/UI Designer', 'Web Designer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    typedRef.current = new Typed('#typed', options);

    return () => {
      typedRef.current?.destroy();
    };
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/TarunJawlaResume.pdf';
    link.setAttribute('download', 'TarunJawlaResume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    document.body.removeChild(link);
  };

  return (
    <Box  fontFamily="Poppins, sans-serif"
      className="hero-section"
      backgroundImage="url('/public/IMG_9087.ARW')" // Adjusted path
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Box position="absolute" top="0" left="0" width="100%" height="100%" bg="rgba(0, 0, 0, 0.5)" zIndex={0} />
      <Flex direction="column" alignItems="center" textAlign="center" zIndex={1}>
        <Heading as="h1" size="4xl" fontWeight="bold" color="white" mb={4} fontFamily="Poppins, sans-serif">
          Hey! I'm Tarun Jawla
        </Heading>
        <Text
          mt={5}
          fontSize="2xl"
          fontWeight="bold"
          color="white"
          fontFamily="Poetsen One, sans-serif" // Apply fontFamily here
        >
          I am a <span id="typed"></span>
        </Text>
        <Flex mt={8}>
          <Button
            colorScheme="blue"
            size="lg"
            mr={4}
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          >
            Contact Me
          </Button>
          <Button
            variant="outline"
            colorScheme="blue"
            size="lg"
            onClick={handleDownloadResume}
            leftIcon={<FaCloudDownloadAlt />}
            _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg', bg: 'blue.500', color: 'white' }}
            transition="all 0.3s ease"
          >
            Download Resume
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeroSection;
