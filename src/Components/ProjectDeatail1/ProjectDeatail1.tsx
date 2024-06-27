/* This code snippet is a TypeScript React component that represents a project description. Here's a
breakdown of what it does: */
import React from 'react';
import { Box, Heading, Text, Image, Tag, Wrap, WrapItem } from '@chakra-ui/react';
import './ProjectDeatail1.css';

const ProjectDescription: React.FC = () => {
  const techStack = ['React', 'TypeScript', 'Chakra UI', 'CSS'];

  return (
    <Box p={5} maxW="800px" mx="auto">
      <Heading as="h1" size="2xl" mb={4} textAlign="center" fontFamily="Poppins, sans-serif">
        Project Title
      </Heading>
      <Box mb={4}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Description:
        </Text>
        <Text fontSize="md" className="project-description-text">
          This is a detailed description of the project. It explains what the project is about, its features, and how it works. This project uses various technologies and tools to achieve its goals.
        </Text>
      </Box>
      <Box mb={4}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Tech Stack:
        </Text>
        <Wrap>
          {techStack.map((tech, index) => (
            <WrapItem key={index}>
              <Tag size="lg" colorScheme="teal" variant="solid">
                {tech}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
      <Box>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Screenshots:
        </Text>
        <Box className="screenshots-container">
          <Image
            src="https://placekitten.com/800/400"
            alt="Project Screenshot 1"
            className="project-screenshot"
            mb={4}
          />
          <Image
            src="https://placekitten.com/800/401"
            alt="Project Screenshot 2"
            className="project-screenshot"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDescription;
