// ContactForm.tsx

import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Flex,
  Select,
  Icon,
} from '@chakra-ui/react';
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import { sendEmail } from '../../Utils/EmailService';
import './ContactMe.css';

const ContactForm: React.FC<{ id: string }> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    query: '',
  });

  const toast = useToast();

  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
      }
    };

    document.addEventListener('copy', handleCopy);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.query) {
      toast({
        title: 'Form Incomplete',
        description: 'Please fill in all required fields.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  
    if (!validateEmail(formData.email)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        query: formData.query,
      };
  
      await sendEmail(templateParams);
  
      toast({
        title: 'Thank you!',
        description: 'We have received your query and will get back to you soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
  
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        query: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: 'Error',
        description: 'An error occurred while sending your email. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  
  const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  

  return (
    <Box id={id} maxW="800px" mx="auto" my={8} p={6} bg="gray.100" borderRadius="md" boxShadow="lg" className="contact-form" mt="2em">
      <Heading as="h2" mb={6} textAlign="center" fontFamily="Poppins, sans-serif" fontWeight="600" color="blue.500">
        Contact Me
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex direction={{ base: 'column', md: 'row' }} mb={4} fontFamily="Inter, sans-serif">
          <FormControl mb={{ base: 4, md: 0 }} mr={{ base: 0, md: 4 }} flex="1">
            <FormLabel display="flex" alignItems="center">
              <Icon as={FaUserAlt} mr={2} color="blue.500" />
              Name
            </FormLabel>
            <Input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
          </FormControl>
          <FormControl mb={{ base: 4, md: 0 }} mr={{ base: 0, md: 4 }} flex="1">
            <FormLabel display="flex" alignItems="center">
              <Icon as={FaEnvelope} mr={2} color="blue.500" />
              Email
            </FormLabel>
            <Input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
          </FormControl>
          <FormControl mb={{ base: 4, md: 0 }} flex="1">
            <FormLabel display="flex" alignItems="center">
              <Icon as={FaPhoneAlt} mr={2} color="blue.500" />
              Phone
            </FormLabel>
            <Input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
          </FormControl>
        </Flex>
        <FormControl mb={4}>
          <FormLabel>Service</FormLabel>
          <Select name="service" value={formData.service} onChange={handleChange} placeholder="Choose service" color="blue.500">
            <option value="webdev">Web Development</option>
            <option value="graphicdesign">Graphic Design</option>
            <option value="uxdesign">UX Design</option>
            <option value="appdev">App Development</option>
            <option value="other">Other</option>
          </Select>
        </FormControl>
        <FormControl mb={6}>
          <FormLabel>Query</FormLabel>
          <Textarea name="query" placeholder="Enter your query" value={formData.query} onChange={handleChange} rows={4} resize="none" color="blue.500" />
        </FormControl>
        <Button type="submit" rightIcon={<FaArrowRight />}  variant="solid" w="full" transition="transform 0.3s ease-in-out"  bgGradient="linear(to-r, #FF6347, #D63AF9)" color="white" _hover={{ bgGradient: 'linear(to-r, #D63AF9, #FF6347)', transform: 'translateY(-2px)' }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
