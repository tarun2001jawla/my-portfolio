/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Box, Text, Heading, Flex, Badge } from "@chakra-ui/react";
import {
  FaCode,
  FaPlane,
  FaGamepad,
  FaCamera,
  FaBookOpen,
  FaUtensils,
  FaDumbbell,
  FaMusic,
  FaFilm,
  FaPen,
  FaHeart,
  FaTheaterMasks,
  FaBrain,
  FaPizzaSlice,
} from "react-icons/fa";
import "./Hobbies.css";

const hobbies = [
  { name: "Coding", color: "#FF6347", icon: FaCode },
  { name: "Reading", color: "#1E90FF", icon: FaBookOpen },
  { name: "Traveling", color: "#32CD32", icon: FaPlane },
  { name: "Gaming", color: "#FFD700", icon: FaGamepad },
  { name: "Photography", color: "#FF69B4", icon: FaCamera },
  { name: "Cooking", color: "#8A2BE2", icon: FaUtensils },
  { name: "Fitness", color: "#FF4500", icon: FaDumbbell },
  { name: "Music", color: "#7B68EE", icon: FaMusic },
  { name: "Movies", color: "#FFB6C1", icon: FaFilm },
  { name: "Blogging", color: "#48D1CC", icon: FaPen },
  { name: "Romance", color: "#FF1493", icon: FaHeart },
  { name: "Theater", color: "#FFD700", icon: FaTheaterMasks }, // Changed to FaMask (theater masks)
  { name: "Mystery", color: "#000000", icon: FaBrain }, // Changed to FaBrain (brain)
  { name: "Fiction", color: "#DA70D6", icon: FaBookOpen }, // Changed to FaBookOpen
  { name: "Chill", color: "#00CED1", icon: FaPizzaSlice },
];

const HobbiesSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Box
      id={id}
      py={10}
      className="hobbies-section"
      fontFamily="Poppins, sans-serif"
    >
      <Heading
        as="h2"
        size="xl"
        mb={6}
        className="hobbies-heading"
        textAlign="center"
        fontWeight= {600}
      >
        Do What You Love
        <br />
        <Text as="span" display="inline-block" ml={10} fontWeight= {600}>
          Love What You Do
        </Text>
      </Heading>
      <Flex
        className="hobbies-container"
        overflow="hidden"
        flexDirection="column"
      >
        <Flex className="hobbies-track left-to-right" mb={8}>
          {hobbies.slice(0, 5).map((hobby) => (
            <Badge
              key={hobby.name}
              className="hobby-badge"
              bg={hobby.color}
              color="white"
              p={4}
              borderRadius={5}
              mx={4}
              display="flex"
              alignItems="center"
            >
              <hobby.icon style={{ fontSize: "32px", marginRight: "12px" }} />
              <Text
                fontSize="lg"
                fontWeight="bold"
                style={{ textTransform: "capitalize" }}
              >
                {hobby.name.toLowerCase()}
              </Text>
            </Badge>
          ))}
          {hobbies.slice(0, 5).map((hobby) => (
            <Badge
              key={`${hobby.name}-duplicate`}
              className="hobby-badge"
              bg={hobby.color}
              color="white"
              p={4}
              borderRadius={5}
              mx={4}
              display="flex"
              alignItems="center"
              transition="transform 0.3s ease-out, box-shadow 0.3s ease-out"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              }}
            >
              <hobby.icon style={{ fontSize: "32px", marginRight: "12px" }} />
              <Text
                fontSize="lg"
                fontWeight="bold"
                style={{ textTransform: "capitalize" }}
              >
                {hobby.name.toLowerCase()}
              </Text>
            </Badge>
          ))}
          {hobbies.slice(0, 5).map((hobby) => (
            <Badge
              key={`${hobby.name}-duplicate-2`}
              className="hobby-badge"
              bg={hobby.color}
              color="white"
              p={4}
              borderRadius={5}
              mx={4}
              display="flex"
              alignItems="center"
              transition="transform 0.3s ease-out, box-shadow 0.3s ease-out"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              }}
            >
              <hobby.icon style={{ fontSize: "32px", marginRight: "12px" }} />
              <Text
                fontSize="lg"
                fontWeight="bold"
                style={{ textTransform: "capitalize" }}
              >
                {hobby.name.toLowerCase()}
              </Text>
            </Badge>
          ))}
        </Flex>
        <Flex className="hobbies-track right-to-left" mb={8}>
          {hobbies.slice(5, 10).map((hobby) => (
            <Badge
              key={hobby.name}
              className="hobby-badge"
              bg={hobby.color}
              color="white"
              p={4}
              borderRadius={5}
              mx={4}
              display="flex"
              alignItems="center"
              transition="transform 0.3s ease-out, box-shadow 0.3s ease-out"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              }}
            >
              <hobby.icon style={{ fontSize: "32px", marginRight: "12px" }} />
              <Text
                fontSize="lg"
                fontWeight="bold"
                style={{ textTransform: "capitalize" }}
              >
                {hobby.name.toLowerCase()}
              </Text>
            </Badge>
          ))}
          {hobbies.slice(5, 10).map((hobby) => (
            <Badge
              key={`${hobby.name}-duplicate`}
              className="hobby-badge"
              bg={hobby.color}
              color="white"
              p={4}
              borderRadius={5}
              mx={4}
              display="flex"
              alignItems="center"
              transition="transform 0.3s ease-out, box-shadow 0.3s ease-out"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              }}
            >
              <hobby.icon style={{ fontSize: "32px", marginRight: "12px" }} />
              <Text
                fontSize="lg"
                fontWeight="bold"
                style={{ textTransform: "capitalize" }}
              >
                {hobby.name.toLowerCase()}
              </Text>
            </Badge>
          ))}
          {hobbies.slice(5, 10).map((hobby) => (
            <Badge
              key={`${hobby.name}-duplicate-2`}
              className="hobby-badge"
              bg={hobby.color}
              color="white"
              p={4}
              borderRadius={5}
              mx={4}
              display="flex"
              alignItems="center"
              transition="transform 0.3s ease-out, box-shadow 0.3s ease-out"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              }}
            >
              <hobby.icon style={{ fontSize: "32px", marginRight: "12px" }} />
              <Text
                fontSize="lg"
                fontWeight="bold"
                style={{ textTransform: "capitalize" }}
              >
                {hobby.name.toLowerCase()}
              </Text>
            </Badge>
          ))}
        </Flex>
        <Flex className="hobbies-track left-to-right">
          {hobbies.slice(10).map((hobby) => (
            <Badge
              key={hobby.name}
              className="hobby-badge"
              bg={hobby.color}
              color="white"
              p={4}
              borderRadius={5}
              mx={4}
              display="flex"
              alignItems="center"
              transition="transform 0.3s ease-out, box-shadow 0.3s ease-out"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              }}
            >
              <hobby.icon style={{ fontSize: "32px", marginRight: "12px" }} />
              <Text
                fontSize="lg"
                fontWeight="bold"
                style={{ textTransform: "capitalize" }}
              >
                {hobby.name.toLowerCase()}
              </Text>
            </Badge>
          ))}
          {hobbies.slice(10).map((hobby) => (
            <Badge
              key={`${hobby.name}-duplicate`}
              className="hobby-badge"
              bg={hobby.color}
              color="white"
              p={4}
              borderRadius={5}
              mx={4}
              display="flex"
              alignItems="center"
              transition="transform 0.3s ease-out, box-shadow 0.3s ease-out"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              }}
            >
              <hobby.icon style={{ fontSize: "32px", marginRight: "12px" }} />
              <Text
                fontSize="lg"
                fontWeight="bold"
                style={{ textTransform: "capitalize" }}
              >
                {hobby.name.toLowerCase()}
              </Text>
            </Badge>
          ))}
          {hobbies.slice(10).map((hobby) => (
            <Badge
              key={`${hobby.name}-duplicate-2`}
              className="hobby-badge"
              bg={hobby.color}
              color="white"
              p={4}
              borderRadius={5}
              mx={4}
              display="flex"
              alignItems="center"
              transition="transform 0.3s ease-out, box-shadow 0.3s ease-out"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              }}
            >
              <hobby.icon style={{ fontSize: "32px", marginRight: "12px" }} />
              <Text
                fontSize="lg"
                fontWeight="bold"
                style={{ textTransform: "capitalize" }}
              >
                {hobby.name.toLowerCase()}
              </Text>
            </Badge>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default HobbiesSection;
