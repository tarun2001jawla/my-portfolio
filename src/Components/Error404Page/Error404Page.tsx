// Error404.tsx
import React from "react";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Error404Page.css";

const Error404: React.FC = () => {
  return (
    <Box className="container">
      <Box textAlign="center" fontFamily="Poppins, sans-serif">
        {/* Heading */}
        <Heading className="heading" size="2xl" mb="1em">
          <span style={{ fontWeight: "bold", background: "linear-gradient(to right, #4f93ff, #0168fa)", WebkitBackgroundClip: "text", color: "transparent" }}>404</span>
        </Heading>

        {/* Subheading */}
        <Text className="subheading" fontSize="xl" fontWeight="bold" mb="1em">
          We're working on it
        </Text>
      </Box>

      {/* Image */}
      <Image src="/static/images/Work at home.svg" alt="Placeholder" />

      {/* Button */}
      <Box textAlign="center" mt="1em">
        <Button
          as={Link}
          to="/"
          colorScheme="blue"
          size="lg"
          leftIcon={<FaHome />}
          className="button"
        >
          Go to Home
        </Button>
      </Box>
    </Box>
  );
};

export default Error404;
