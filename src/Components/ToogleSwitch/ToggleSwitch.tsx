import React, { useState } from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ToggleSwitch.css";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box className="theme-toggle-container" onClick={toggleTheme}>
        <Box className={`toggle-switch ${isDarkMode ? "dark" : "light"}`}>
          <Icon as={isDarkMode ? FaMoon : FaSun} className="toggle-icon" />
        </Box>
      </Box>
    </Flex>
  );
};

export default ThemeToggle;
