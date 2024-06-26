import React, { useEffect, useRef } from "react";
import { Box, Flex, Heading, Text, Link, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import "./BlogSection.css";

interface Blog {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  link: string;
  color: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "The Future of Web Development",
    content:
      "Exploring the latest trends and technologies shaping the future of web development.",
    imageUrl: "/static/images/webdev2.jpg",
    link: "https://medium.com/@Land2Cyber/the-future-of-web-development-innovations-in-mixed-content-scripts-a0e51fcd78d1",
    color: "#FFEBE5",
  },
  {
    id: 2,
    title: "The Impact of AI on Software Development",
    content:
      "Analyzing how artificial intelligence is revolutionizing the software development process.",
    imageUrl: "/static/images/ai.jpg",
    link: "https://www.intelivita.com/in/blog/impact-of-ai-on-software-development/",
    color: "#E5F0FF",
  },
  {
    id: 3,
    title: "Next-Gen Technologies in Tech Industry",
    content:
      "A glimpse into the cutting-edge technologies reshaping the landscape of the tech industry.",
    imageUrl: "/static/images/nextgen3.jpg",
    link: "https://www.speridian.com/next-generation-technology/",
    color: "#E5FFE5",
  },
];

const BlogSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === "c" || e.key === "C")) {
        e.preventDefault();
      }
    };

    document.addEventListener("copy", handleCopy);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lift-animation");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } 
    );

    const headingElement = headingRef.current;
    if (headingElement) {
      observer.observe(headingElement);
    }

    return () => {
      if (headingElement) {
        observer.unobserve(headingElement);
      }
    };
  }, []);

  return (
    <Flex
      direction="column"
      align="center"
      p={8}
      className="no-select"
      fontFamily="Inter, sans-serif"
      mt={10}
    >
      <Heading
        mb={8}
        fontFamily="Poppins, sans-serif"
        fontWeight="600"
        textAlign="center"
        ref={headingRef}
        className="observed-heading"
      >
        Check out the latest tech blogs
      </Heading>
      <Flex justify="center" flexWrap="wrap" fontFamily="Inter, sans-serif">
        {blogs.map((blog) => (
          <Box
            key={blog.id}
            maxW="300px"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            m={4}
            boxShadow="lg"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{ transform: "scale(1.05)", boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" }}
            bg={blog.color}
            className="blog-card"
          >
            <Box>
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="blog-image"
              />
            </Box>
            <Box p={4}>
              <Heading as="h3" fontSize="xl" mb={2}>
                {blog.title}
              </Heading>
              <Text fontSize="md" mb={4}>
                {blog.content}
              </Text>
              <Link
                color="blue.500"
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                fontWeight="bold"
                _hover={{ textDecoration: "underline", color: "blue.700" }}
              >
                Read More
              </Link>
            </Box>
          </Box>
        ))}
      </Flex>
      <Button
        rightIcon={<FaPlus />}
        colorScheme="purple"
        size="lg"
        mt={8}
        className="read-more-button"
        _hover={{ transform: "scale(1.05)", bg: "purple.500", color: "white" }}
      >
        Read More Blogs
      </Button>
    </Flex>
  );
};

export default BlogSection;
