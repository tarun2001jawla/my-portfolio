// ContactForm.tsx
import React, { useState } from 'react';
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

const ContactForm: React.FC<{ id: string }> = ({ id })=> {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    query: '',
  });

  const toast = useToast();

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

    try {
      // Send email using EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        query: formData.query,
      };

      await sendEmail(templateParams);

      // Display success toast
      toast({
        title: 'Thank you!',
        description: 'We have received your query and will get back to you soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      // Reset form data
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

  return (
    <Box id={id} maxW="800px" mx="auto" my={8} p={6} bg="white" borderRadius="md" boxShadow="md" transition="box-shadow 0.3s ease-in-out" _hover={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.25)' }}>
      <Heading as="h2" mb={6} textAlign="center">
        Contact Me
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex direction={{ base: 'column', md: 'row' }} mb={4}>
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
          <Select name="service" value={formData.service} onChange={handleChange}>
            <option value="">Choose service</option>
            <option value="webdev">Web Development</option>
            <option value="graphicdesign">Graphic Design</option>
            <option value="uxdesign">UX Design</option>
            <option value="appdev">App Development</option>
            <option value="other">Other</option>
          </Select>
        </FormControl>
        <FormControl mb={6}>
          <FormLabel>Query</FormLabel>
          <Textarea name="query" placeholder="Enter your query" value={formData.query} onChange={handleChange} rows={4} />
        </FormControl>
        <Button type="submit" rightIcon={<FaArrowRight />} colorScheme="teal" variant="solid" w="full" transition="transform 0.3s ease-in-out" _hover={{ transform: 'translateY(-2px)' }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
