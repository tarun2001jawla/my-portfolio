import React, { useEffect, useRef } from "react";
import { Box, Heading, Text, Image, Link, Badge } from "@chakra-ui/react";
import Glide from "@glidejs/glide";
import { FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "Car Rental App",
    description: "This web app allows users to easily search for and rent cars of different categories without the hassle of traditional methods. It provides a user-friendly interface for renting cars, managing bookings, and exploring various car options",
    techStack: ["React", "Chakra UI", "NodeJs", "Express", "MongoDb"],
    githubLink: "https://github.com/tarun2001jawla/Car_Rental_App.git",
    image: "/static/images/Screenshot (184).png",
    bgColor: "#ffe680", // Light Yellow
  },
  {
    title: "GitStream",
    description: "GitHub Activity Tracker is a web application that allows users to track the recent activity of GitHub users. It provides information about the user's repositories, gists, followers, and following, along with their most recent GitHub events.",
    techStack: ["React", "GitHub API", "CSS"],
    githubLink: "https://tarun2001jawla.github.io/github-activity-tracker/",
    image: "/static/images/gitstare .png",
    bgColor: "#b2fab4", // Light Green
  },
  {
    title: "Smart Attendance System",
    description: "This Smart Attendance System system is designed to streamline the process of attendance management in universities. It provides a comprehensive portal for both teachers and students, utilizing modern web technologies.",
    techStack: ["NodeJs", "ExpressJs", "MongoDB", "ReactJs"],
    githubLink: "https://github.com/tarun2001jawla/smart-attendance-system.git",
    image: "/static/images/Screenshot (210).png",
    bgColor: "#c0e0f4", // Light Blue
  },
  // Add more projects as needed
];
const ProjectsSection: React.FC<{ id: string }> = ({ id }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

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
      animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    }).mount();

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
    <Box id={id} py={16} className="projects-section">
      <Heading
        ref={headingRef}
        as="h2"
        textAlign="center"
        mb={8}
        mt="0.5em"
        fontSize="4xl"
        fontFamily="Poppins, sans-serif"
        fontWeight="600"
        color="#333"
      >
        My Projects
      </Heading>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {projects.map((project, index) => (
              <li key={index} className="glide__slide">
                <Box
                  className="project-card"
                  p={4}
                  borderRadius="lg"
                  style={{ backgroundColor: project.bgColor }}
                  boxShadow="md"
                  transition="transform 0.3s, box-shadow 0.3s"
                >
                  <Image src={project.image} alt={project.title} borderRadius="lg" mb={4} />
                  <Box textAlign="left">
                    <Heading as="h3" size="md" mb={2} color="#333" fontFamily="Poppins, sans-serif" fontWeight="500">
                      {project.title}
                    </Heading>
                    <Text color="#333" mb={2} fontFamily="Inter, sans-serif">
                      {project.description}
                    </Text>
                    <Box mb={2}>
                      {project.techStack.map((skill, index) => (
                        <Badge
                          key={index}
                          colorScheme={index % 3 === 0 ? "purple" : index % 3 === 1 ? "orange" : "green"}
                          fontSize="0.8rem"
                          px={3}
                          py={1}
                          mr={2}
                          mb={1}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </Box>
                    <Link color="blue.400" href={project.githubLink} target="_blank" rel="noopener noreferrer" fontFamily="Inter, sans-serif" display="flex" alignItems="center">
                      GitHub <FaArrowUp style={{ transform: "rotate(45deg)", marginLeft: "0.5rem" }} />
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
