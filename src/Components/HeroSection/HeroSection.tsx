import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Typed from "typed.js";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  const typedRef = useRef<Typed | null>(null);
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const helloInDifferentLanguages = [
    { language: "English", word: "Hello", color: "#FF6347" }, // Tomato
    { language: "French", word: "Bonjour", color: "#7B68EE" }, // MediumSlateBlue
    { language: "Japanese", word: "こんにちは", color: "#FFD700" }, // Gold
    { language: "Hindi", word: "नमस्ते", color: "#F4C430" }, // PaleGreen
    { language: "Spanish", word: "Hola", color: "#FF69B4" }, // HotPink
    { language: "German", word: "Hallo", color: "#00BFFF" }, // DeepSkyBlue
    { language: "Italian", word: "Ciao", color: "#FF8C00" }, // DarkOrange
  ];

  useEffect(() => {
    const options = {
      strings: ["Full Stack Developer", "UX/UI Designer", "Web Designer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    typedRef.current = new Typed("#typed", options);

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentLanguageIndex((prevIndex) =>
          prevIndex === helloInDifferentLanguages.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500); // Animation duration
    }, 3000); // Change language every 3 seconds

    return () => {
      typedRef.current?.destroy();
      clearInterval(interval);
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
            whiteSpace="nowrap"
          >
            <span
              className={`hello-animation ${isAnimating ? "animate" : ""}`}
              style={{
                color: helloInDifferentLanguages[currentLanguageIndex].color,
              }}
            >
              {helloInDifferentLanguages[currentLanguageIndex].word}!
            </span>{" "}
            <br />
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
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "flex-start" }}
          >
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
        {/* Right side: Colorful Shapes */}
        <Box  mt={{ base: 8, md: 0 }} ml={{ base: 4, md: 12 }}>
  <svg
    width="600"
    height="600"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    
    <rect x="50" y="350" width="300" height="150" fill="#FF6347" />

    
    <circle cx="400" cy="200" r="120" fill="#7B68EE" />

    
    <rect x="50" y="50" width="300" height="150" fill="#FFD700" />

    
    <circle cx="400" cy="400" r="120" fill="#F4C430" />

    
    <path
      d="M150 300L300 450H0L150 300Z"
      fill="#FF69B4"
      transform="rotate(180 150 300)"
    />
  </svg>
</Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
