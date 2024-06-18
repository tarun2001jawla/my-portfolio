import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  IconButton,
  Icon,
  keyframes,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaHeart,
  FaTimes,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

import "leaflet/dist/leaflet.css";

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
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleMapOpen = () => {
    setIsMapOpen(true);
  };

  const handleMapClose = () => {
    setIsMapOpen(false);
  };

  const handleHeartClick = () => {
    setShowHeartRain(true);

    const newHeartPositions: HeartPosition[] = Array.from(
      { length: 100 },
      () => ({
        x: Math.random() * window.innerWidth,
        y: -50 - Math.random() * 500,
      })
    );

    setHeartPositions(newHeartPositions);

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
    <Box className="footer no-select" py={12} fontFamily="Poppins, sans-serif" position="relative">
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
          <Text>Software Developer</Text>
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
            <Link href="https://z6oh3qa8k3u.typeform.com/to/DYHumylD" target="_blank" rel="noopener noreferrer" mb={2}>
              Feedback Form
            </Link>
            <RouterLink to="/games" className="game-link">
              Play Games
            </RouterLink>
            
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
              icon={<FaXTwitter />}
              variant="ghost"
              colorScheme="blue"
              as={Link}
              href="https://x.com/tarun_jawla"
              target="_blank"
              rel="noopener noreferrer"
            />
          </Flex>
        </Box>

        <Box mb={6}>
          <Heading as="h4" size="md" mb={4}>
            Contact
          </Heading>
          <Popover isOpen={isMapOpen} onClose={handleMapClose} placement="top" isLazy>
            <PopoverTrigger>
              <Text onClick={handleMapOpen} style={{ cursor: "pointer" }}>
                Jaipur, Rajasthan, India
              </Text>
            </PopoverTrigger>
            <PopoverContent
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
              width="400px"
              maxWidth="90%"
              marginTop="5"
            >
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody padding={0}>
                <MapContainer style={{ height: "300px", width: "100%" }} center={[26.9124, 75.7873]} zoom={13}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[26.9124, 75.7873]} >
                    <Popup>
                      <Box>
                        <Flex justify="space-between" align="center" mb={2}>
                          <Heading as="h6" size="sm">
                            Welcome to Jaipur!
                          </Heading>
                          <IconButton
                            aria-label="Close"
                            icon={<FaTimes />}
                            onClick={handleMapClose}
                            variant="ghost"
                            colorScheme="blue"
                            size="sm"
                          />
                        </Flex>
                        <Text>This is a beautiful city in Rajasthan, India.</Text>
                      </Box>
                    </Popup>
                  </Marker>
                </MapContainer>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Text mb={2}>Phone: +91-8279202574</Text>
          <Text mb={2}>
            Email:{" "}
            <Link href="mailto:tarunjawla2@gmail.com" target="_blank" rel="noopener noreferrer" mb={2}>
              tarunjawla2@gmail.com
            </Link>
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
            _hover={{ transform: "scale(1.2)", transition: "transform 0.2s ease" }}
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
