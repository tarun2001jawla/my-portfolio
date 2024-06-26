import React, { useRef, useEffect } from "react";
import { Box, Flex, Text, Icon, Image, Heading } from "@chakra-ui/react";
import {
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaFacebookSquare,
  FaStar,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import Glide from "@glidejs/glide";
import "./Testimonial.css";

// Customer reviews data
interface Review {
  name: string;
  username: string;
  profile: string;
  platform: "twitter" | "instagram" | "pinterest" | "facebook";
  review: string;
  rating: number;
  date: string;
}

const Reviews: Review[] = [
  {
    name: "Emma Parker",
    username: "@emma_parker",
    profile: "/static/images/revived_9042174.png",
    platform: "instagram",
    review:
      "I hired Tarun for app development, and I'm extremely impressed with the results! He created a sleek and user-friendly app that perfectly meets my requirements. Highly recommend his services for anyone looking to bring their app idea to life!",
    rating: 5,
    date: "May 23, 2023",
  },
  {
    name: "David Johnson",
    username: "@david_j",
    profile: "/static/images/gamer (1).png",
    platform: "twitter",
    review:
      "Tarun's web development skills are top-notch! He built a stunning website for my business, and I couldn't be happier with the outcome. The website is fast, responsive, and beautifully designed. Thank you, Tarun!",
    rating: 5,
    date: "May 20, 2023",
  },
  {
    name: "Sophie Adams",
    username: "@sophie_a",
    profile: "/static/images/call-center-agent_3462517.png",
    platform: "instagram",
    review:
      "I collaborated with Tarun on a graphic design project, and he delivered exceptional results! His creativity and attention to detail brought my vision to life. I highly recommend Tarun for any graphic design needs!",
    rating: 5,
    date: "May 18, 2023",
  },
  {
    name: "John Smith",
    username: "@john_s",
    profile: "/static/images/boy.png",
    platform: "facebook",
    review:
      "Tarun is a talented full-stack developer! He tackled my project with professionalism and expertise, delivering a high-quality solution that exceeded my expectations. I'm grateful for his dedication and skill.",
    rating: 5,
    date: "May 15, 2023",
  },
];

// Function to get platform icon based on platform type
const getPlatformIcon = (
  platform: "twitter" | "instagram" | "pinterest" | "facebook"
) => {
  switch (platform) {
    case "twitter":
      return <FaTwitter />;
    case "instagram":
      return <FaInstagram />;
    case "pinterest":
      return <FaPinterest />;
    case "facebook":
      return <FaFacebookSquare />;
    default:
      return null;
  }
};

const ClientTestimonials: React.FC = () => {
  const glideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (glideRef.current) {
      new Glide(glideRef.current, {
        type: "carousel",
        startAt: 0,
        perView: 3,
        breakpoints: {
          768: {
            perView: 1,
          },
        },
        autoplay: 3000,
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

      const headingElement = glideRef.current.querySelector(".testimonials-heading") as HTMLElement;
      if (headingElement) {
        observer.observe(headingElement);
      }

      return () => {
        if (headingElement) {
          observer.unobserve(headingElement);
        }
      };
    }
  }, []);

  return (
    <Box mt="1.5em" fontFamily="Inter, sans-serif">
      {/* Heading */}
      <Heading
        mt="1.2em"
        fontSize="4xl"
        textAlign="center"
        fontFamily="Poppins, sans-serif"
        fontWeight="600"
        color="#333"
        className="testimonials-heading"
      >
        Hear what my clients say about me
      </Heading>

      {/* Glide container */}
      <div className="glide" ref={glideRef}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {Reviews.map((review, index) => (
              <li className="glide__slide" key={index}>
                <Box
                  className="review-card"
                  bg={
                    review.platform === "twitter"
                      ? "rgba(29, 161, 242, 0.1)"
                      : review.platform === "instagram"
                      ? "rgba(193, 53, 132, 0.1)"
                      : review.platform === "pinterest"
                      ? "rgba(203, 32, 39, 0.1)"
                      : "rgba(66, 103, 178, 0.1)"
                  }
                  p={6}
                  m={4}
                  borderRadius="lg"
                  boxShadow="xl"
                  maxW="500px"
                  width={{ base: "90%", md: "auto" }}
                  minHeight="400px"
                  transition="all 0.3s ease"
                  _hover={{ transform: "translateY(-10px)", boxShadow: "2xl" }}
                >
                   <Flex alignItems="center" mb={4}>
                    <Box
                      borderRadius="full"
                      overflow="hidden"
                      width="50px"
                      height="50px"
                      marginRight="1rem"
                    >
                      <Image
                        src={review.profile}
                        alt={review.name}
                        className="review-profile"
                        borderRadius="full"
                      />
                    </Box>
                    <Flex flexDirection="column">
                      <Text fontWeight="bold" className="review-name" mb={1}>
                        {review.name}
                      </Text>
                      <Flex alignItems="center">
                        <Box
                          className="review-platform"
                          display="flex"
                          alignItems="center"
                          mr={1}
                          mt={-3}
                        >
                          {getPlatformIcon(review.platform)}
                        </Box>
                        <Text>{review.username}</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex alignItems="center" mb={4} className="review-rating">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <Icon
                        key={i}
                        as={FaStar}
                        color="yellow.500"
                        boxSize={5}
                      />
                    ))}
                    {Array.from({ length: 5 - review.rating }, (_, i) => (
                      <Icon
                        key={i + review.rating}
                        as={FaStar}
                        color="gray.300"
                        boxSize={5}
                      />
                    ))}
                  </Flex>
                  <Text mb={4} fontFamily="Inter, sans-serif" color="#555">
                    {review.review}
                  </Text>
                  <Text fontStyle="italic" className="review-date" color="#777">
                    {review.date}
                  </Text>
                </Box>
              </li>
            ))}
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            <FaArrowLeft />
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </Box>
  );
};

export default ClientTestimonials;