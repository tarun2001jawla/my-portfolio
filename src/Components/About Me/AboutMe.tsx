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
  FaUser,
  FaGraduationCap,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiTypescript,
  SiGithub,
} from "react-icons/si";

import "./AboutMe.css";

const AboutMe: React.FC<{ id: string }> = ({ id }) => {
  const skills = [
    { name: "Java", icon: FaJava, color: "#007396" }, // Java original color
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }, // JavaScript original color
    { name: "React", icon: SiReact, color: "#61DAFB" }, // React original color
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" }, // MongoDB original color
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }, // TypeScript original color
    { name: "Node.js", icon: FaNodeJs, color: "#339933" }, // Node.js original color
    { name: "Git and GitHub", icon: SiGithub, color: "#181717" }, // GitHub original color
    { name: "Python", icon: FaPython, color: "#3776AB" }, // Python original color
  ];

  return (
    <Box py={16} className="about-section" id={id}>
      <Box textAlign="center" mb={8}>
        <Heading as="h1" mb={4}>
          About Me
        </Heading>
      </Box>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "center" }}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        {/* Left side: Introduction */}
        <Box
          bg="rgba(0,255,0,0.2)"
          border="2px solid black"
          p={6}
          m={{ base: 2, md: 4 }}
          borderRadius="md"
          boxShadow="md"
          rounded="lg"
          className="card-content about-card"
          maxW={{ base: "100%", md: "600px" }}
          height="auto"
          mr={{ base: 0, md: 8 }}
          mb={{ base: 8, md: 0 }}
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
            <Box lineHeight="1.2">
              <Flex alignItems="center">
                <Text fontWeight="bold" mr={2}>Name:</Text>
                <Text>Tarun Jawla</Text>
              </Flex>
              <Flex alignItems="center">
                <Text fontWeight="bold" mr={2}>Email:</Text>
                <Text>tarunjawla2@gmail.com</Text>
              </Flex>
              <Flex alignItems="center">
                <Text fontWeight="bold" mr={2}>Phone:</Text>
                <Text>+91-8279202574</Text>
              </Flex>
              <Flex alignItems="center">
                <Text fontWeight="bold" mr={2}>Address:</Text>
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
            m={{ base: 2, md: 4 }}
            borderRadius="md"
            boxShadow="md"
            rounded="lg"
            className="card-content skill-card"
            maxW={{ base: "100%", md: "600px" }}
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
                  bg="white"
                  p={2}
                  borderRadius="md"
                  border="1px solid #ddd"
                  boxShadow="sm"
                  transition="background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
                  _hover={{ bg: `${skill.color}20`, boxShadow: "md" }} // Hover color with 20% opacity
                >
                  <Icon as={skill.icon} boxSize={6} color={skill.color} mr={2} />
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
            m={{ base: 2, md: 4 }}
            borderRadius="md"
            boxShadow="md"
            rounded="lg"
            className="card-content education-card"
            maxW={{ base: "100%", md: "600px" }}
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
