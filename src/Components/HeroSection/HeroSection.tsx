import React, { useEffect, useRef } from "react";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Typed from "typed.js";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: ["Full Stack Developer", "UX/UI Designer", "Web Designer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    typedRef.current = new Typed("#typed", options);

    return () => {
      typedRef.current?.destroy();
    };
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/static/images/TarunJawlaResume.pdf";
    link.setAttribute("download", "TarunJawlaResume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      fontFamily="Poppins, sans-serif"
      className="hero-section"
      bg="#FAF9F6"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      color="black"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        zIndex={1}
        width="80%"
        mx="auto"
      >
        {/* Left side: Text, Heading, and Buttons */}
        <Box textAlign={{ base: "center", md: "left" }}>
          <Heading
            as="h1"
            size="4xl"
            fontWeight="bold"
            mb={4}
            fontFamily="Poppins, sans-serif"
          >
            <span className="hola">Hola!</span> <br />
            I'm <span className="colorful-name">Tarun Jawla</span>
          </Heading>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            fontFamily="Poetsen One, sans-serif"
            mb={4}
          >
            I am a <span id="typed"></span>
          </Text>
          <Flex direction={{ base: "column", md: "row" }} align={{ base: "center", md: "flex-start" }}>
            <Button
              colorScheme="purple"
              size="lg"
              mb={{ base: 4, md: 0 }}
              mr={{ md: 4 }}
              sx={{
                "@media (hover: hover) and (pointer: fine)": {
                  _hover: {
                    transform: "scale(1.05)",
                    boxShadow: "0 0 20px 10px rgba(128, 0, 128, 0.4)",
                    backgroundColor: "purple",
                  },
                },
                transition: "all 0.3s ease",
                boxShadow: "0 0 10px 5px rgba(128, 0, 128, 0.3)",
              }}
            >
              Contact Me
            </Button>
            <Button
              variant="outline"
              colorScheme="red"
              size="lg"
              onClick={handleDownloadResume}
              leftIcon={<FaCloudDownloadAlt />}
              sx={{
                "@media (hover: hover) and (pointer: fine)": {
                  _hover: {
                    transform: "translateY(-5px)",
                    boxShadow: "lg",
                    bg: "red.500",
                    color: "white",
                  },
                },
                transition: "all 0.3s ease",
              }}
            >
              Download Resume
            </Button>
          </Flex>
        </Box>
        {/* Right side: Character Image */}
        <Box mt={{ base: 8, md: 0 }} ml={{ base: 0, md: 8 }}>
          <Image src="https://placehold.co/600x400" alt="Character Image" maxW="400px" />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
