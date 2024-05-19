import React, { useState } from 'react';
import { Box, Flex, Heading, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (link: string) => {
    if (link) {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 300); // Adjust the delay as needed
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <Flex 
     fontFamily="Poppins, sans-serif"
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      className="navbar"
      wrap="wrap"
      bg="transparent" 
      boxShadow="none" 
    >
      <Heading as="h1" size="lg" letterSpacing={'-.1rem'} marginLeft="1rem" className="my-portfolio"  fontFamily="Poppins, sans-serif">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={0} // Adjusted offset to 0
          duration={500}
          className="nav-link my-portfolio"
          
        >
          Tarun Jawla
        </ScrollLink>
      </Heading>

      <Box display={{ base: 'none', md: 'flex' }} justifyContent="center" flex="1">
        <Flex alignItems="center" justifyContent="center">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={0} // Adjusted offset to 0
            duration={500}
            className="nav-link"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={0} // Adjusted offset to 0
            duration={500}
            className="nav-link"
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={0} // Adjusted offset to 0
            duration={500}
            className="nav-link"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={0} // Adjusted offset to 0
            duration={500}
            className="nav-link"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={0} // Adjusted offset to 0
            duration={500}
            className="nav-link"
          >
            Contact Me
          </ScrollLink>
        </Flex>
      </Box>

      <Box display={{ base: 'block', md: 'none' }}>
        <Menu>
          <MenuButton as={Button} bg="transparent" color="black">
            <FontAwesomeIcon icon={faBars} />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={0} // Adjusted offset to 0
                duration={500}
                className="nav-link"
                onClick={() => toggleMenu('home')}
              >
                Home
              </ScrollLink>
            </MenuItem>
            <MenuItem>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={0} // Adjusted offset to 0
                duration={500}
                className="nav-link"
                onClick={() => toggleMenu('about')}
              >
                About Me
              </ScrollLink>
            </MenuItem>
            <MenuItem>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={0} // Adjusted offset to 0
                duration={500}
                className="nav-link"
                onClick={() => toggleMenu('projects')}
              >
                Projects
              </ScrollLink>
            </MenuItem>
            <MenuItem>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={0} // Adjusted offset to 0
                duration={500}
                className="nav-link"
                onClick={() => toggleMenu('contact')}
              >
                Contact Me
              </ScrollLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
