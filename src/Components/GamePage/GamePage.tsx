import React from 'react';
import { Box, Heading, Text, Grid, Container, Image, VStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './GamePage.css';

const GamesPage: React.FC = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="center">
        <Heading as="h1" textAlign="center" color="teal.600" fontFamily="Verdana, sans-serif">
          Play Games
        </Heading>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8} justifyContent="center">
          <Link to="/games/snake" style={{ textDecoration: 'none' }}>
            <Box className="game-card">
              <Image
                src="/static/images/snake.png"
                alt="Snake Game"
                mb={4}
                borderRadius="md"
                className="game-card-image"
              />
              <Heading as="h2" size="lg" mb={2} className="game-card-title">
                Snake Game
              </Heading>
              <Text mb={4} className="game-card-description">
                Classic snake game where you control a snake and eat food to grow longer. See how long you can survive!
              </Text>
            </Box>
          </Link>
          <Box className="game-card">
            <Heading as="h2" size="lg" mb={2} className="game-card-title" >
              More Games Coming Soon
            </Heading>
            <Text mb={4} className="game-card-description">
              Stay tuned for more exciting games in the future!
            </Text>
          </Box>
        </Grid>
        <Button
          as={Link}
          to="/"
          leftIcon={<FaArrowLeft />}
          className="back-to-home-button"
          _hover={{  transform: 'translateY(-3px)'}}
        >
          Back to Home
        </Button>
      </VStack>
    </Container>
  );
};

export default GamesPage;
