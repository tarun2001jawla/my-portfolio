import React from "react";
import { Flex } from "@chakra-ui/react";
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
import HobbiesSection from "../../Components/Hobbies/Hobbies";
import Navbar from "../../Components/Navbar/Navbar";
import RollingBall from "../../Components/BallRolling/BallRolling";

import "./Home.css";

const HomePage: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Flex direction="column" minHeight="100vh" id={id} className="no-select">
      <Navbar />
      <HeroSection />
      <AboutMe id="about" />
      <ProjectsSection id="projects" />
      <HobbiesSection id="hobbies"/>
      <ServicesSection id="services" />
      <ClientTestimonials />
      <CodeEditor />
   <RollingBall/>
      <BlogSection />
      <ContactForm id="contact" />
      
      <Footer />
      <BackToTopButton />
      <FeedbackNotification />
    </Flex>
  );
};

export default HomePage;
