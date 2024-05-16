import React from 'react';

import { Flex } from '@chakra-ui/react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import AboutMe from '../../Components/About Me/AboutMe';
import BackToTopButton from '../../Components/BackToTopButton/BackToTopButton';
import ServicesSection from '../../Components/Services/Services';
const HomePage: React.FC<{ id: string }> = ({id}) => {
  return (
    <Flex direction="column" minHeight="100vh" id={id}>
      
      
      <HeroSection/>
      <AboutMe id='about'/>
      <ServicesSection id='services'/>
      <BackToTopButton/>
    </Flex>
  );
};

export default HomePage;
