// RollingBall.tsx

import React from "react";
import { Box } from "@chakra-ui/react";
import "./BallRolling.css"; // Import your CSS for styling

const RollingBall: React.FC = () => {
  return (
    <Box className="rolling-ball-container">
      <Box className="rolling-ball-rod" />
      <Box className="rolling-ball-wrapper">
        <Box className="rolling-ball" />
      </Box>
    </Box>
  );
};

export default RollingBall;
