import React, { useState, useEffect } from 'react';
import { Box, Input, Text, Flex, Heading } from '@chakra-ui/react';
import './Terminal.css';

interface Command {
  command: string;
  description: string;
  action?: () => void;
}

const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string[]>([
    'Welcome to my website! Get started by typing `help` command below',
    '',
    '$tarunjawla-dev: ',
  ]);

  const whoami = () => {
    setOutput((prevOutput) => [...prevOutput, 'You need to be signed in to use this command!', '', 'Just type `sign-in`', '', '$tarunjawla-dev: ']);
  };

  const getLocation = () => {
    setOutput((prevOutput) => [...prevOutput, 'not found!', '', '$tarunjawla-dev: ']);
  };

  const clear = () => {
    setOutput(['Welcome to my website! Get started by typing `help` command below', '', '$tarunjawla-dev: ']);
  };

  const commands: Command[] = [
    { command: 'help', description: 'Lists available commands' },
    { command: 'whoami', description: 'Tells you who are you', action: whoami },
    { command: 'sign-in', description: 'Redirects you to the login page' },
    { command: 'sign-out', description: 'Sign out the current user' },
    { command: 'get-location', description: 'Gets your current location', action: getLocation },
    { command: 'clear', description: 'Clears out everything on screen!', action: clear },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const trimmedInput = input.trim();
      if (trimmedInput === 'help') {
        const commandList = commands.map((command) => `${command.command}: ${command.description}`);
        setOutput((prevOutput) => [...prevOutput, '', 'Available Commands:', '', ...commandList, '', '$tarunjawla-dev: ']);
      } else {
        const matchedCommand = commands.find((command) => command.command === trimmedInput);
        if (matchedCommand && matchedCommand.action) {
          matchedCommand.action();
        } else {
          setOutput((prevOutput) => [...prevOutput, `${trimmedInput}: command not found!`, '', '$tarunjawla-dev: ']);
        }
      }
      setInput('');
    }
  };

  useEffect(() => {
    const terminal = document.getElementById('terminal');
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  }, [output]);

  return (
    <Box m="auto" width="1200px"    color="white" mt={12}>
      <Flex align="center" mb={4}>
        <Text color="rgb(56, 204, 119)" fontWeight="bold" mr={2}>
          -
        </Text>
        <Heading as="h2" color="rgb(56, 204, 119)" fontWeight="bold">
          Terminal
        </Heading>
      </Flex>
      <Box className="terminal-container" bgColor="rgb(33, 37, 41)" border="4px solid green">
        <Box id="terminal" className="terminal">
          <Flex direction="row" align="center" justify="space-between" mb={4}>
            <Box className="terminal-dots">
              <Box className="dot red" />
              <Box className="dot yellow" />
              <Box className="dot green" />
            </Box>
          </Flex>
          <Flex direction="column" align="start" className="terminal-output">
            {output.map((line, index) => (
              <Text key={index} className="terminal-line" color={line.startsWith('$') ? 'rgb(56, 204, 119)' : 'white'}>
                {line}
              </Text>
            ))}
            <Input
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleSubmit}
              variant="flushed"
              className="terminal-input"
              bgColor="transparent"
              color="rgb(56, 204, 119)"
              border="none"
              _focus={{ boxShadow: 'none' }}
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Terminal;