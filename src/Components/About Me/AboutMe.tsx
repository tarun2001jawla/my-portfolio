import React, { useEffect, useRef } from "react";
import { Box, Flex, Heading, Text, Icon, Image, Badge, Link } from "@chakra-ui/react";
import {
  FaJava,
  FaNodeJs,

  FaPython,
  
} from "react-icons/fa";

import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiTypescript,
  SiMysql,
  SiGithub,
  SiFigma,
} from "react-icons/si";

import "./AboutMe.css";

const AboutMe: React.FC<{ id: string }> = ({ id }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lift-animation");
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the heading is visible
    );

    const headingElement = headingRef.current;
    if (headingElement) {
      observer.observe(headingElement);
    }

    return () => {
      if (headingElement) {
        observer.unobserve(headingElement);
      }
    };
  }, []);

  const skills = [
    { name: "Java", icon: FaJava, color: "#007396", url: "https://docs.oracle.com/en/java/" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React", icon: SiReact, color: "#61DAFB", url: "https://reactjs.org/docs/getting-started.html" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", url: "https://docs.mongodb.com/" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", url: "https://www.typescriptlang.org/docs/" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933", url: "https://nodejs.org/en/docs/" },
    { name: "Git and GitHub", icon: SiGithub, color: "#181717", url: "https://docs.github.com/en" },
    { name: "Python", icon: FaPython, color: "#3776AB", url: "https://docs.python.org/3/" },
    { name: "MySQL", icon: SiMysql, color: "#ffA500", url: "https://dev.mysql.com/doc/" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E", url: "https://www.figma.com/" },
  ];

 

  return (
    <Box py={20} className="about-section no-select" id={id} fontFamily="Poppins, sans-serif">
      <Box textAlign="center" mb={8}>
        <Heading
          as="h1"
          mb={4}
          fontFamily="Poppins, sans-serif"
          fontWeight="600"
          ref={headingRef}
          className="observed-heading"
        >
          About me
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
          p={6}
          m={{ base: 2, md: 4 }}
          boxShadow="md"
          rounded="lg"
          className="card-content about-card"
          maxW={{ base: "100%", md: "600px" }}
          height="auto"
          mr={{ base: 0, md: 8 }}
          mb={{ base: 8, md: 0 }}
        >
          <Heading as="h6" mb={4} color="#333" fontSize="1.5rem">
            Personal Info
          </Heading>
          <Flex alignItems="center" mt={8}>
            <Image
              src="/static/images/pp4.JPG"
              alt="Profile Picture"
              boxSize="150px"
              objectFit="cover"
              borderRadius="8px"
              mr={4}
            />
            <Box lineHeight="1.2" mt={5}>
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
          <Text mt={12} color="#333" fontWeight={600}>
            Hey there, I'm Tarun, a passionate technologist based in Jaipur. I
            recently graduated with a BTech in Information Technology,
            specializing in Java, MERN development, and UX/UI design, from the
            2023 batch. Apart from immersing myself in the world of technology,
            I also have a flair for diving into the realms of literature,
            enjoying a good game of cricket, and experimenting with various
            culinary creations.
          </Text>
        </Box>
        {/* Right side: Skills and Education */}
        <Box>
          {/* Skills and Tech Stack */}
          <Box
            bg="rgba(0,0,255,0.2)"
            p={6}
            m={{ base: 2, md: 4 }}
            boxShadow="md"
            rounded="lg"
            className="card-content skill-card"
            maxW={{ base: "100%", md: "600px" }}
            height="auto"
          >
            <Heading as="h6" mb={4} color="#333" fontSize="1.5rem">
              My Toolkit
            </Heading>
            <Flex flexWrap="wrap" >
              {skills.map((skill) => (
                <Link
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: "none" }}
                >
                  <Badge
                    display="flex"
                    alignItems="center"
                    colorScheme="blue"
                    p={3}
                    borderRadius="md"
                    m={1}
                    fontSize="1em"
                    bg={skill.color}
                    color="white"
                  >
                    <Icon as={skill.icon} boxSize={5} mr={1} />
                    {skill.name}
                  </Badge>
                </Link>
              ))}
            </Flex>
          </Box>
          {/* Education */}
          <Box
            bg="rgba(255,0,0,0.2)"
            p={6}
            m={{ base: 2, md: 4 }}
            boxShadow="md"
            rounded="lg"
            className="card-content education-card"
            maxW={{ base: "100%", md: "600px" }}
            height="auto"
          >
              <Heading as="h6" mb={4} color="#333" fontSize="1.5rem">
              Education
            </Heading>
            <Box>
              <Text mb={2}>
                <strong>Degree:</strong> B.Tech.
              </Text>
              <Text mb={2}>
                <strong>University:</strong> Galgotias College Of Engineering &
                Technology
              </Text>
              <Text mb={2}>
                <strong>Graduation Year:</strong> 2023
              </Text>
              <Text>
                <strong>Specialization:</strong> Information Technology
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>

      
    </Box>
  );
};

export default AboutMe;

