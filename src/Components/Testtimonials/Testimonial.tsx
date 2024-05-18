// Testimonial.tsx

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
import "./Testimonial.css";
import Glide from "@glidejs/glide";

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

// Customer reviews data
const Reviews: Review[] = [
  {
    name: "Alice Johnson",
    username: "@alicej_webdesign",
    profile: "../../../public/woman.png",
    platform: "instagram",
    review:
      "Their web design service is top-notch! The team was creative, and they delivered beyond my expectations. Highly recommended for anyone looking to build a stunning website.",
    rating: 5,
    date: "May 23, 2023",
  },
  {
    name: "Mark Davis",
    username: "@markd_appdev",
    profile: "../../../public/man (1).png",
    platform: "twitter",
    review:
      "I hired them for my app development project, and I must say, I'm impressed! The app they built is sleek, user-friendly, and bug-free. Great job, team!",
    rating: 4.5,
    date: "May 20, 2023",
  },
  {
    name: "Rachel Green",
    username: "@rachelg_graphicdesign",
    profile: "../../../public/gamer (1).png",
    platform: "pinterest",
    review:
      "Their graphic design skills are exceptional! They transformed my ideas into visually stunning graphics. I couldn't be happier with the results. Thank you!",
    rating: 5,
    date: "May 18, 2023",
  },
  {
    name: "Michael Brown",
    username: "@michaelb_e-commerce",
    profile: "../../../public/bussiness-man.png",
    platform: "facebook",
    review:
      "They helped me set up my e-commerce website, and the results are outstanding! My online store looks professional, and I've seen a significant increase in sales. Highly recommend their services!",
    rating: 5,
    date: "May 15, 2023",
  },
  {
    name: "Sarah Thompson",
    username: "@sarahthompson",
    profile: "../../../public/boy.png",
    platform: "facebook",
    review:
      "Highly recommended for business travelers! I rented a car for a work trip, and the service was exceptional. The car was clean, and the staff was professional and accommodating.",
    rating: 5,
    date: "May 15, 2023",
  },
  {
    name: "John Doe",
    username: "@johndoe",
    profile: "../../../public/man.png",
    platform: "instagram",
    review:
      "I had an amazing experience renting a car from this company. The rates were competitive, and the car was in excellent condition. I can't wait to use their services again on my next adventure!",
    rating: 4.5,
    date: "May 12, 2023",
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
        autoplay: 1000,
        hoverpause: true,
        animationDuration: 1000,
        animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
      }).mount();
    }
  }, []);

  return (
    <Box mt={10}>
      {/* Heading */}
      <Heading
        fontSize="4xl"
        fontWeight="extrabold"
        textAlign="center"
        color="blue.500"
        textDecoration="underline"
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
    review.platform === 'twitter'
      ? 'rgba(29, 161, 242, 0.2)'
      : review.platform === 'instagram'
      ? 'rgba(193, 53, 132, 0.2)'
      : review.platform === 'pinterest'
      ? 'rgba(203, 32, 39, 0.2)'
      : 'rgba(66, 103, 178, 0.2)'
  }
  border="2px solid black"
  p={6}
  m={4}
  borderRadius="md"
  boxShadow="md"
  maxW="500px"
  width={{ base: '90%', md: 'auto' }}
  minHeight="400px"
>
  <Flex alignItems="center" mb={4}>
    <Box
      border="2px solid black"
      borderRadius="full"
      overflow="hidden"
      width="50px"
      height="50px"
      marginRight="1rem"
    >
      <Image src={review.profile} alt={review.name} className="review-profile" borderRadius="full" />
    </Box>
    <Flex flexDirection="column">
      <Text fontWeight="bold" className="review-name" mb={1}>
        {review.name}
      </Text>
      <Flex alignItems="center">
        <Box className="review-platform" display="flex" alignItems="center" mr={1} mt={-3}>
          {getPlatformIcon(review.platform)}
        </Box>
        <Text>{review.username}</Text>
      </Flex>
    </Flex>
  </Flex>
  <Flex alignItems="center" mb={4} className="review-rating">
    {Array.from({ length: review.rating }, (_, i) => (
      <Icon key={i} as={FaStar} color="yellow.500" boxSize={5} />
    ))}
    {Array.from({ length: 5 - review.rating }, (_, i) => (
      <Icon key={i + review.rating} as={FaStar} color="gray.300" boxSize={5} />
    ))}
  </Flex>
  <Text mb={4}>{review.review}</Text>
  <Text fontStyle="italic" className="review-date">
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
