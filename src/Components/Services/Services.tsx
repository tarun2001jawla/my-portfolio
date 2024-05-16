// ServicesSection.tsx
import React from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { FaLaptopCode, FaPalette, FaMobileAlt, FaPencilAlt, FaChartBar, FaPhoneAlt } from 'react-icons/fa';
import './Services.css';

const ServicesSection: React.FC<{ id: string }> = ({ id }) => {
  const services = [
    {
      icon: FaLaptopCode,
      title: 'Web Development',
      description:
        'End-to-end web solutions tailored to your business needs. Expertise in frontend and backend technologies for a seamless user experience.',
      color: '#FFCCCC', // Light Pink
      iconColor: '#FF6666', // Lighter Pink
    },
    {
      icon: FaMobileAlt,
      title: 'Full Stack Development',
      description:
        'Powerful and scalable web applications, from database management to UI design.',
      color: '#CCCCFF', // Light Blue
      iconColor: '#6666FF', // Lighter Blue
    },
    {
      icon: FaPalette,
      title: 'UX/UI Design',
      description:
        'Visually stunning and user-friendly interfaces that leave a lasting impression.',
      color: '#FFFFCC', // Light Yellow
      iconColor: 'red', // Lighter Yellow
    },
    {
      icon: FaPencilAlt,
      title: 'Graphic Design',
      description:
        'Captivating designs reflecting your brand identity.',
      color: '#CCFFCC', // Light Green
      iconColor: '#66FF66', // Lighter Green
    },
    {
      icon: FaChartBar,
      title: 'Digital Marketing',
      description:
        'Reach your audience with strategic online campaigns and content creation.',
      color: '#FFD9B3', // Light Orange
      iconColor: '#FF9933', // Lighter Orange
    },
    {
      icon: FaMobileAlt,
      title: 'App Development',
      description:
        'Customized mobile applications for iOS and Android.',
      color: '#FFE0B3', // Light Brown
      iconColor: '#FFB366', // Lighter Brown
    },
  ];

  const servicesAbove = services.slice(0, 3);
  const servicesBelow = services.slice(3);

  const handleScheduleCall = () => {
    const phoneNumber = '8279202574'; 
    const message = encodeURIComponent('Hello! I want to schedule a call.'); 

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    window.location.href = whatsappLink; // Redirect to WhatsApp
  };

  return (
    <Box py={16} className="services-section" id={id}>
      <Heading as="h2" textAlign="center" mb={8}>
        Our Services
      </Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        <Flex flexWrap="wrap" justifyContent="center" width="100%">
          {servicesAbove.map((service, index) => (
            <Box key={index} className="service-card" style={{ backgroundColor: service.color }}>
              <Box className="service-icon" style={{ color: service.iconColor }}>
                <service.icon size={48} />
              </Box>
              <Heading as="h3" size="md" mt={4} mb={2} textAlign="center" color="black">
                {service.title}
              </Heading>
              <Text textAlign="center" color="black">{service.description}</Text>
            </Box>
          ))}
        </Flex>
        <Flex flexWrap="wrap" justifyContent="center" width="100%">
          {servicesBelow.map((service, index) => (
            <Box key={index} className="service-card" style={{ backgroundColor: service.color }}>
              <Box className="service-icon" style={{ color: service.iconColor }}>
                <service.icon size={48} />
              </Box>
              <Heading as="h3" size="md" mt={4} mb={2} textAlign="center" color="black">
                {service.title}
              </Heading>
              <Text textAlign="center" color="black">{service.description}</Text>
            </Box>
          ))}
        </Flex>
      </Flex>
      <Flex justifyContent="center" alignItems="center" mt={8}>
        <Button
          leftIcon={<FaPhoneAlt />}
          colorScheme="teal"
          size="lg"
          variant="outline"
          _hover={{ bg: 'blue.500', color: 'white', transform: 'scale(1.05)' }}
          onClick={handleScheduleCall} // Call the function when clicked
        >
          Schedule a Call
        </Button>
      </Flex>
    </Box>
  );
};

export default ServicesSection;
