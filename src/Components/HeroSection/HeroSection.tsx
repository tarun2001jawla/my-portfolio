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
    { language: "Hindi", word: "नमस्ते", color: "#FFA500" }, // PaleGreen
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
  }, [helloInDifferentLanguages.length]);

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
        direction={{ base: "column-reverse", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        zIndex={1}
        width="80%"
        mx="auto"
      >
        {/* Left side: Text, Heading, and Buttons */}
        <Box textAlign={{ base: "center", md: "left" }}>
          <Heading
            size={{ base: "3xl", md: "4xl" }}
            as="h1"
            mb={{ base: 8, md: 0 }}
            fontWeight="bold"
            
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
            <span
    className="wave-emoji"
    role="img"
    aria-label="Waving hand"
    style={{ position: "absolute", top: "2.80em" }}
  >
    👋
  </span>
            <br />
            I'm&nbsp;<span className="colorful-name">Tarun Jawla</span>
          </Heading>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            mb={{ base: 4, md: 8 }} 
            fontFamily="Poetsen One, sans-serif"
            
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
   <Box mt={{ base: 8, md: 0 }} ml={{ base: 4, md: 12 }}>
          <svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="50" y="350" width="300" height="150" fill="url(#gradient1)" 
             />

            <circle cx="400" cy="200" r="120" fill="url(#gradient2)" />

            <rect x="50" y="50" width="300" height="150" fill="url(#gradient3)" />

            <circle  cx="400" cy="400" r="120"fill="url(#gradient4)"/>

            <path
              d="M150 300L300 450H0L150 300Z"
              fill="url(#gradient5)"
              transform="rotate(180 150 300)"
            />
    
    {/* Gradients */}
    <defs>
      {/* Gradient 1 */}
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF6347" />
        <stop offset="100%" stop-color="#D63AF9" />
      </linearGradient>
      
      {/* Gradient 2 */}
      <radialGradient id="gradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stop-color="#7B68EE" />
        <stop offset="100%" stop-color="#5715F9" />
      </radialGradient>
      
      {/* Gradient 3 */}
      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFD700" />
        <stop offset="100%" stop-color="#FFE01B" />
      </linearGradient>
      
      {/* Gradient 4 */}
      <radialGradient id="gradient4" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stop-color="#F4C430" />
        <stop offset="100%" stop-color="#E0A72D" />
      </radialGradient>
      
      {/* Gradient 5 */}
      <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF69B4" />
        <stop offset="100%" stop-color="#E5389B" />
      </linearGradient>
    </defs>
  </svg>
</Box>

      </Flex>
    </Box>
  );
};

export default HeroSection;
