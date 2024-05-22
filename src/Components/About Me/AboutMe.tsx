import React, { useEffect } from "react";
import { Box, Flex, Heading, Text, Icon, Image } from "@chakra-ui/react";
import {
  FaJava,
  FaNodeJs,
  FaUser,
  FaGraduationCap,
  FaGithub,
  FaPython,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
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
  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === "c" || e.key === "C")) {
        e.preventDefault();
      }
    };

    document.addEventListener("copy", handleCopy);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
    <Box py={20} className="about-section no-select" id={id}>
      <Box textAlign="center" mb={8}>
        <Heading
          as="h1"
          mb={4}
          fontFamily="Poppins, sans-serif"
          fontWeight="600"
        >
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
          <Flex alignItems="center" mt={8}>
            <Image
              src="/static/images/pp4.JPG"
              alt="Profile Picture"
              borderRadius="md"
              boxSize="150px"
              objectFit="cover"
              mr={4}
            />
            <Box lineHeight="1.2">
              <Flex alignItems="center">
                <Text fontWeight="bold" mr={2}>
                  Name:
                </Text>
                <Text>Tarun Jawla</Text>
              </Flex>
              <Flex alignItems="center">
                <Text fontWeight="bold" mr={2}>
                  Email:
                </Text>
                <Text>tarunjawla2@gmail.com</Text>
              </Flex>
              <Flex alignItems="center">
                <Text fontWeight="bold" mr={2}>
                  Phone:
                </Text>
                <Text>+91-8279202574</Text>
              </Flex>
              <Flex alignItems="center">
                <Text fontWeight="bold" mr={2}>
                  Address:
                </Text>
                <Text>Jaipur, Rajasthan, India</Text>
              </Flex>
            </Box>
          </Flex>
          <Text
            mt={8}
            color="#333"
            fontFamily="Nanum Gothic Coding, monospace"
            fontWeight={700}
          >
            Hey there, I'm Tarun, a passionate technologist based in Jaipur. I
            recently graduated with a BTech in Information Technology,
            specializing in Java, MERN development, and UX/UI design, from the
            2023 batch. Apart from immersing myself in the world of technology,
            I also have a flair for diving into the realms of literature,
            enjoying a good game of cricket, and experimenting with various
            culinary creations. 
          </Text>
          <Flex mt={8}>
            <Box mr={4} className="social-icon">
              <a href="https://github.com/tarun2001jawla" target="blank">
                <Icon as={FaGithub} boxSize={8} style={{ color: "#333" }} />
              </a>
            </Box>
            <Box mr={4} className="social-icon" >
              <a href="https://www.instagram.com/tarun_jawla/" target="blank">
                <Icon
                  as={FaInstagram}
                  boxSize={8}
                  style={{ color: "#833ab4" }}
                />
              </a>
            </Box>
            <Box mr={4} className="social-icon">
              <a href="https://twitter.com/tarun_jawla" target="blank">
                <Icon as={FaTwitter} boxSize={8} style={{ color: "#1da1f2" }} />
              </a>
            </Box>
            <Box className="social-icon">
              <a href="https://www.linkedin.com/in/tarunjawlajaipur/" target="blank">
                <Icon
                  as={FaLinkedin}
                  boxSize={8}
                  style={{ color: "#0077b5" }}
                />
              </a>
            </Box>
          </Flex>
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
            <Flex flexWrap="wrap" fontFamily="Inter, sans-serif">
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
                  fontWeight={500}
                  transition="background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
                  _hover={{ bg: `${skill.color}20`, boxShadow: "md" }} // Hover color with 20% opacity
                >
                  <Icon
                    as={skill.icon}
                    boxSize={6}
                    color={skill.color}
                    mr={2}
                  />
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
            <Heading
              as="h3"
              mb={4}
              color="#333"
              display="flex"
              alignItems="center"
            >
              <Icon as={FaGraduationCap} color="#333" mr={2} />
              Educational Background
            </Heading>
            <Text mb={2} fontFamily="Inter, sans-serif">
              <strong>Degree:</strong> B.Tech.
            </Text>
            <Text mb={2} fontFamily="Inter, sans-serif">
              <strong>University:</strong> Galgotias College Of Engineering &
              Technology
            </Text>
            <Text mb={2} fontFamily="Inter, sans-serif">
              <strong>Graduation Year:</strong> 2023
            </Text>
            <Text fontFamily="Inter, sans-serif">
              <strong>Specialization:</strong> Information Technology
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutMe;
