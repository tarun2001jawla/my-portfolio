import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  IconButton,
  Icon,
  keyframes,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
import "./Footer.css";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const rainAnimation = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
`;

interface HeartPosition {
  x: number;
  y: number;
}

const Footer: React.FC = () => {
  const [showHeartRain, setShowHeartRain] = useState<boolean>(false);
  const [heartPositions, setHeartPositions] = useState<HeartPosition[]>([]);

  const handleHeartClick = () => {
    setShowHeartRain(true);
  
    // Generate multiple heart positions
    const newHeartPositions: HeartPosition[] = Array.from(
      { length: 100 }, // Increase the number of hearts here
      () => ({
        x: Math.random() * window.innerWidth,
        y: -50 - Math.random() * 500, // Spread hearts across the screen
      })
    );
  
    // Set heart positions
    setHeartPositions(newHeartPositions);
  
    // Hide heart rain after 3 seconds
    setTimeout(() => setShowHeartRain(false), 3000);
  };
  

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

  return (
    <Box
      className="footer no-select"
      py={12}
      fontFamily="Poppins, sans-serif"
      position="relative"
    >
      <Flex
        className="footer-container"
        maxW="1200px"
        mx="auto"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Box mb={6}>
          <Heading as="h3" size="lg" mb={4}>
            Tarun Jawla
          </Heading>
          <Text>Full Stack Web Developer</Text>
        </Box>

        <Box mb={6}>
          <Heading as="h4" size="md" mb={4}>
            Quick Links
          </Heading>
          <Flex direction="column">
            <Link href="#home" mb={2}>
              Home
            </Link>
            <Link href="#projects" mb={2}>
              Projects
            </Link>
            <Link href="https://forms.gle/r7JLzzxafUJ7Lfg1A" target="_blank"
              rel="noopener noreferrer" mb={2}>
              Feedback Form
            </Link>
          </Flex>
        </Box>

        <Box mb={6}>
          <Heading as="h4" size="md" mb={4}>
            Connect
          </Heading>
          <Flex>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              colorScheme="blue"
              as={Link}
              href="https://github.com/tarun2001jawla"
              target="_blank"
              rel="noopener noreferrer"
              mr={2}
            />
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              colorScheme="blue"
              as={Link}
              href="https://www.linkedin.com/in/tarunjawlajaipur/"
              target="_blank"
              rel="noopener noreferrer"
              mr={2}
            />
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
              colorScheme="blue"
              as={Link}
              href="https://www.instagram.com/tarun_jawla/"
              target="_blank"
              rel="noopener noreferrer"
              mr={2}
            />
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              colorScheme="blue"
              as={Link}
              href="https://twitter.com/tarun_jawla"
              target="_blank"
              rel="noopener noreferrer"
            />
          </Flex>
        </Box>

        <Box mb={6}>
          <Heading as="h4" size="md" mb={4}>
            Contact
          </Heading>
          <Text mb={2}>Jaipur, Rajasthan, India</Text>
          <Text mb={2}>Phone: +91-8279202574</Text>
          <Text mb={2}>
            Email:{" "}
            <Link href="mailto:tarunjawla2@gmail.com" target="_blank"
              rel="noopener noreferrer" mb={2}>tarunjawla2@gmail.com</Link>
          </Text>
        </Box>
      </Flex>

      <Flex
        className="footer-bottom"
        justifyContent="center"
        alignItems="center"
        maxW="1200px"
        mx="auto"
      >
        <Text display="flex" alignItems="center" fontWeight={500}>
          Made with{" "}
          <Icon
            as={FaHeart}
            color="red.500"
            ml={2}
            mr={2}
            mt={1}
            boxSize={6}
            animation={`${pulse} 1.5s infinite`}
            onClick={handleHeartClick}
            cursor="pointer"
          />{" "}
          By Tarun Jawla
        </Text>
      </Flex>

      {showHeartRain && (
        <Box position="fixed" top={0} left={0} right={0} bottom={0} zIndex={100}>
          {heartPositions.map((position, index) => (
            <Icon
              key={index}
              as={FaHeart}
              color="red.500"
              position="absolute"
              left={position.x}
              top={position.y}
              animation={`${rainAnimation} 3s linear`}
              fontSize="4xl"
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Footer;