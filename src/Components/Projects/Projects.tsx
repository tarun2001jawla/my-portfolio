import React, { useEffect } from "react";
import { Box, Heading, Text, Image, Link } from "@chakra-ui/react";
import Glide from "@glidejs/glide";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "Car Rental App",
    description: "This web app allows users to easily search for and rent cars of different categories without the hassle of traditional methods. It provides a user-friendly interface for renting cars, managing bookings, and exploring various car options",
    techStack: "React,Chakra UI, NodeJs, Express, MongoDb",
    githubLink: "https://github.com/tarun2001jawla/Car_Rental_App.git",
    image: "../../../public/Screenshot (184).png",
    bgColor: "#ffe680", // Light Yellow
  },
  {
    title: "GitStream",
    description: "GitHub Activity Tracker is a web application that allows users to track the recent activity of GitHub users. It provides information about the user's repositories, gists, followers, and following, along with their most recent GitHub events.",
    techStack: "React GitHub API, CSS",
    githubLink: "https://tarun2001jawla.github.io/github-activity-tracker/",
    image: "../../../public/gitstare .png",
    bgColor: "#b2fab4", // Light Green
  },
  {
    title: "URL Shortener ",
    description: "This is a simple URL shortener web application built using Node.js, Express, and EJS templates. The project allows users to generate short URLs for long URLs, making it easier to share and manage links.",
    techStack: "NodeJs, ExpressJs, EJS, MongoDB",
    githubLink: "https://github.com/your-username/project-3",
    image: "https://via.placeholder.com/200",
    bgColor: "#c0e0f4", // Light Blue
  },
  // Add more projects as needed
];

const ProjectsSection: React.FC<{ id: string }> = ({ id }) => {
  useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      perView: 3,
      gap: 20,
      breakpoints: {
        1024: {
          perView: 2,
        },
        600: {
          perView: 1,
        },
      },
      autoplay: 1500,
      hoverpause: true,
      animationDuration: 1000,
      animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)", // Cubic bezier curve for smoother animation
    }).mount();

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

  return (
    <Box id={id} py={16} className="projects-section no-select">
      <Heading as="h2" textAlign="center" mb={8} fontFamily="Poppins, sans-serif" fontWeight="600" mt="0.5em">
        My Projects
      </Heading>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {projects.map((project, index) => (
              <li key={index} className="glide__slide">
                <Box className="project-card" p={4} borderRadius="md" style={{ backgroundColor: project.bgColor }} fontFamily="Inter, sans-serif">
                  <Image src={project.image} alt={project.title} borderRadius="md" mb={4} />
                  <Box textAlign="left">
                    <Heading as="h3" size="md" mb={2} color="#333">
                      {project.title}
                    </Heading>
                    <Text color="#333" mb={2}>
                      {project.description}
                    </Text>
                    <Text color="#333" mb={2}>
                      <strong>Tech Stack:</strong> {project.techStack}
                    </Text>
                    <Link color="blue.500" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </Link>
                  </Box>
                </Box>
              </li>
            ))}
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
            <FaArrowLeft />
          </button>
          <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </Box>
  );
};

export default ProjectsSection;
