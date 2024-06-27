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
import SocialIcons from "../../Components/SocialSection/SocialSection";
import LinkedInPosts from "../../Components/LinkedinPosts/LinkedInPosts";

import "./Home.css";

const HomePage: React.FC<{ id: string }> = ({ id }) => {
  // const GridOverlay = () => (
  //   <svg
  //     style={{
  //       position: 'fixed',
  //       top: 0,
  //       left: 0,
  //       width: '100%',
  //       height: '100%',
  //       pointerEvents: 'none',
  //       zIndex: 10,
  //     }}
  //   >
  //     <defs>
  //       <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
  //         <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
  //       </pattern>
  //     </defs>
      
  //     {/* Top-left corner */}
  //     <rect x="0" y="0" width="200" height="200" fill="url(#smallGrid)" />
      
  //     {/* Top-right corner */}
  //     <rect x="calc(100% - 200px)" y="0" width="200" height="200" fill="url(#smallGrid)" />
      
  //     {/* Bottom-left corner */}
  //     <rect x="0" y="calc(100% - 200px)" width="200" height="200" fill="url(#smallGrid)" />
      
  //     {/* Bottom-right corner */}
  //     <rect x="calc(100% - 200px)" y="calc(100% - 200px)" width="200" height="200" fill="url(#smallGrid)" />
  //   </svg>
  // );
  return (
    <Flex direction="column" minHeight="100vh" id={id} className="no-select">
    <Navbar />
    <HeroSection />
    <SocialIcons />
    <AboutMe id="about" />
      <ProjectsSection id="projects" />
      <HobbiesSection id="hobbies"/>
      <ServicesSection id="services" />
      <ClientTestimonials />
      <CodeEditor />
      <LinkedInPosts/>
   
      <BlogSection />
      <ContactForm id="contact" />
      
      <Footer />
      <BackToTopButton />
      <FeedbackNotification />
    </Flex>
  );
};

export default HomePage;
