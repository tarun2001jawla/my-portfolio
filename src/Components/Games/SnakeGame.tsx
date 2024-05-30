import React from 'react';
import { Link } from 'react-router-dom';
import './SnakeGame.css';

const SnakeGame: React.FC = () => {
  return (
    <div className="snake-game-container">
      <h1 className="game-title">Snake Game</h1>
      <p className="game-description">This game is under development. We will drop it as soon as it's ready!</p>
      <Link to="/" className="back-to-home-link">Back to Home</Link>
    </div>
  );
};

export default SnakeGame;
