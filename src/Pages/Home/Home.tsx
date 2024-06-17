import React from "react";
import { Flex, Box, Link as ChakraLink } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import HeroSection from "../../Components/HeroSection/HeroSection";
import AboutMe from "../../Components/About Me/AboutMe";
import BackToTopButton from "../../Components/BackToTopButton/BackToTopButton";
import ServicesSection from "../../Components/Services/Services";
import Footer from "../../Components/Footer/Footer";
import ProjectsSection from "../../Components/Projects/Projects";
import ContactForm from "../../Components/ContactMe/ContactMe";
import ClientTestimonials from "../../Components/Testtimonials/Testimonial";
import CodeEditor from "../../Components/CodeEditor/CodeEditor";
import BlogSection from "../../Components/BlogSection/BlogSection";
import FeedbackNotification from "../../Components/FeedbackNotification/FeedbackNotification";
import Navbar from "../../Components/Navbar/Navbar";

import "./Home.css";

const HomePage: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Flex direction="column" minHeight="100vh" id={id} className="no-select">
      <Navbar />
      <HeroSection />
      <AboutMe id="about" />
      <ProjectsSection id="projects" />
      <ServicesSection id="services" />
      <ClientTestimonials />
      <CodeEditor />
      <BlogSection />
      <ContactForm id="contact" />
      <Footer />
      <BackToTopButton />
      <FeedbackNotification />

      {/* Buy Me a Coffee Link */}
      <Box position="fixed" bottom="20px" left="20px" zIndex="1000">
        <ChakraLink
          href="https://buymeacoffee.com/tarunjawla"
          isExternal
          display="flex"
          alignItems="center"
          backgroundColor="#FFDD00"
          color="#333"
          padding="10px 15px"
          borderRadius="5px"
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
          _hover={{ textDecoration: 'none', backgroundColor: "#F7C600" }}
        >
          <FontAwesomeIcon icon={faCoffee} style={{ marginRight: '8px' }} />
          Buy Me a Coffee
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default HomePage;
