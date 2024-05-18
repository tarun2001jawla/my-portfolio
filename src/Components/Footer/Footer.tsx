// Footer.tsx
import React from "react";
import { Box, Flex, Heading, Text, Link, IconButton } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <Box className="footer" py={12}>
      <Flex className="footer-container" maxW="1200px" mx="auto" flexWrap="wrap" justifyContent="space-between">
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
            Email: <Link href="mailto:tarunjawla2@gmail.com">tarunjawla2@gmail.com</Link>
          </Text>
        </Box>
      </Flex>

      <Flex className="footer-bottom" justifyContent="space-between" alignItems="center" maxW="1200px" mx="auto">
        <Text>&copy; {new Date().getFullYear()} All rights reserved.</Text>
        <Text>Developed By <Link href="https://github.com/tarun2001jawla" target="_blank" rel="noopener noreferrer">Tarun Jawla</Link></Text>
      </Flex>
    </Box>
  );
};

export default Footer;
