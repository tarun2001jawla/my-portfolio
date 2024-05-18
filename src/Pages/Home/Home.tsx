import React from 'react';

import {  Flex } from '@chakra-ui/react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import AboutMe from '../../Components/About Me/AboutMe';
import BackToTopButton from '../../Components/BackToTopButton/BackToTopButton';
import ServicesSection from '../../Components/Services/Services';
import Footer from '../../Components/Footer/Footer';
import ProjectsSection from '../../Components/Projects/Projects';
import ContactForm from '../../Components/ContactMe/ContactMe';
import ClientTestimonials from '../../Components/Testtimonials/Testimonial';
import CodeEditor from '../../Components/CodeEditor/CodeEditor';
const HomePage: React.FC<{ id: string }> = ({id}) => {
  return (
    <Flex direction="column" minHeight="100vh" id={id}>
      
      
      <HeroSection/>
      <AboutMe id='about'/>
      <ProjectsSection id='projects'/>
      <ServicesSection id='services'/>
      <ClientTestimonials/>
      <CodeEditor/>
      <ContactForm id='contact'/>
      
     
      <BackToTopButton/>
      <Footer/>
    </Flex>
  );
};

export default HomePage;
