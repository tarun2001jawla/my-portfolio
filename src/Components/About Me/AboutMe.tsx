import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Image,
} from "@chakra-ui/react";
import {
  FaJava,
  FaNodeJs,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaGraduationCap,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiTypescript,
  SiGithub,
} from "react-icons/si";


import "./AboutMe.css";

const AboutMe: React.FC<{ id: string }> = ({id}) => {
  const skills = [
    { name: "Java", icon: FaJava, color: "#FF6347" }, // Red
    { name: "JavaScript", icon: SiJavascript, color: "#F0DB4F" }, // Yellow
    { name: "React", icon: SiReact, color: "#61DAFB" }, // Light Blue
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" }, // Green
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }, // Blue
    { name: "Node.js", icon: FaNodeJs, color: "#8CC84B" }, // Dark Green
    { name: "Git and GitHub", icon: SiGithub, color: "#6e5494" }, // Light Purple
  ];

  return (
    <Box py={16} className="about-section" id={id}> {/* Added id here */}
      <Box textAlign="center" mb={8}>
        <Heading as="h1" mb={4}>
          About Me
        </Heading>
      </Box>
      <Flex justifyContent="center">
        {/* Left side: Introduction */}
        <Box
          bg="rgba(0,255,0,0.2)"
          border="2px solid black"
          p={6}
          m={4}
          borderRadius="md"
          boxShadow="md"
          rounded="lg"
          className="card-content about-card"
          maxW="600px"
          height="auto"
          mr={8}
        >
          <Heading as="h3" mb={4} color="#333">
            <Icon as={FaUser} color="#333" mr={2} />
            Personal Info
          </Heading>
          <Flex alignItems="center" mt={4}>
            <Image
              src="https://via.placeholder.com/150"
              alt="Profile Picture"
              borderRadius="md"
              boxSize="150px"
              objectFit="cover"
              mr={4}
            />
            <Box>
              <Flex alignItems="center" mb={2}>
                <Icon as={FaUser} color="#333" mr={2} />
                <Text>Tarun Jawla</Text>
              </Flex>
              <Flex alignItems="center" mb={2}>
                <Icon as={FaEnvelope} color="#333" mr={2} />
                <Text>tarunjawla2@gmail.com</Text>
              </Flex>
              <Flex alignItems="center" mb={2}>
                <Icon as={FaPhoneAlt} color="#333" mr={2} />
                <Text>+91-8279202574</Text>
              </Flex>
              <Flex alignItems="center">
                <Icon as={FaMapMarkerAlt} color="#333" mr={2} />
                <Text>Jaipur, Rajasthan, India</Text>
              </Flex>
            </Box>
          </Flex>
          <Text mt={4} color="#333">
            Hey there, I'm Tarun, a passionate technologist based in Jaipur. I
            recently graduated with a BTech in Information Technology,
            specializing in Java, MERN development, and UX/UI design, from the
            2023 batch. Apart from immersing myself in the world of technology,
            I also have a flair for diving into the realms of literature,
            enjoying a good game of cricket, and experimenting with various
            culinary creations. My diverse interests reflect my multifaceted
            persona and the curiosity that drives me to explore and excel in
            both the technological and creative domains.
          </Text>
        </Box>
        {/* Right side: Skills and Education */}
        <Box>
          {/* Skills and Tech Stack */}
          <Box
            bg="rgba(0,0,255,0.2)"
            border="2px solid black"
            p={6}
            m={4}
            borderRadius="md"
            boxShadow="md"
            rounded="lg"
            className="card-content skill-card"
            maxW="600px"
            height="auto"
          >
            <Heading as="h3" mb={4} color="#333">
              <Icon as={FaGithub} color="#333" mr={2} />
              Tech Stack
            </Heading>
            <Flex flexWrap="wrap">
              {skills.map((skill) => (
                <Flex
                  key={skill.name}
                  mr={4}
                  mb={4}
                  className="skill-item"
                  alignItems="center"
                  bg={skill.color}
                  p={2}
                  borderRadius="md"
                  transition="background-color 0.3s ease-in-out"
                  _hover={{ bg: `${skill.color}90` }} // Hover color with 90% opacity
                >
                  <Icon as={skill.icon} boxSize={6} color="#333" mr={2} />
                  <Text>{skill.name}</Text>
                </Flex>
              ))}
            </Flex>
          </Box>
          {/* Educational Details */}
          <Box
            bg="rgba(255,165,0,0.2)"
            border="2px solid black"
            p={6}
            m={4}
            borderRadius="md"
            boxShadow="md"
            rounded="lg"
            className="card-content education-card"
            maxW="600px"
            height="auto"
          >
            <Heading as="h3" mb={4} color="#333" display="flex" alignItems="center">
              <Icon as={FaGraduationCap} color="#333" mr={2} />
              Educational Background
            </Heading>
            <Text mb={2}>
              <strong>Degree:</strong> B.Tech. 
            </Text>
            <Text mb={2}>
              <strong>University:</strong> Galgotias College Of Engineering & Technology
            </Text>
            <Text mb={2}>
              <strong>Graduation Year:</strong> 2023
            </Text>
            <Text>
              <strong>Specialization:</strong> Information Technology
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutMe;
