import React from 'react';
import { Flex, Icon, Link, Box } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcons:React.FC = () => {
  const socialIcons = [
    { name: "GitHub", icon: FaGithub, color: "#333", url: "https://github.com/tarun2001jawla" },
    { name: "Instagram", icon: FaInstagram, color: "#833ab4", url: "https://www.instagram.com/tarun_jawla/" },
    { name: "Twitter", icon: FaXTwitter, color: "#000", url: "https://x.com/tarun_jawla" },
    { name: "LinkedIn", icon: FaLinkedin, color: "#0077b5", url: "https://www.linkedin.com/in/tarunjawlajaipur/" },
    { name: "Email", icon: FaEnvelope, color: "#EA4335", url: "mailto:tarunjawla2@gmail.com" },
    { name: "Behance", icon: FaBehance, color: "#0000FF", url: "https://www.behance.net/tarunjawla1" },
  ];

  return (
    <Flex justifyContent="center" py={4} bg="gray.100">
      {socialIcons.map((social) => (
        <Link href={social.url} key={social.name} isExternal mx={2}>
          <Box
            as="span"
            _hover={{
              transform: "translateY(-2px)",
              transition: "transform 0.2s",
            }}
            display="inline-block"
          >
            <Icon as={social.icon} w={8} h={8} color={social.color} />
          </Box>
        </Link>
      ))}
    </Flex>
  );
};

export default SocialIcons;