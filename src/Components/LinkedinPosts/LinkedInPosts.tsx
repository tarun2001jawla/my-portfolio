import React from 'react';
import { Box, Link, Button, Heading } from '@chakra-ui/react';
import './LinkedInPosts.css';

interface LinkedInPost {
  id: number;
  embedCode: string;
  url: string;
}

const EmbeddedPost: React.FC<{ post: LinkedInPost }> = ({ post }) => {
  return (
    <Box className="embedded-post">
      <Box
        className="post-preview"
        dangerouslySetInnerHTML={{ __html: post.embedCode }}
      />
      <Link href={post.url} target="_blank" rel="noopener noreferrer">
        <Button mt={4} colorScheme="teal" variant="solid">
          Read More
        </Button>
      </Link>
    </Box>
  );
};

const LinkedInPosts: React.FC = () => {
  const posts: LinkedInPost[] = [
    {
      id: 1,
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7208702777198276608" height="300" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      url: 'https://www.linkedin.com/feed/update/urn:li:share:7208702777198276608',
    },
    {
      id: 2,
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7208711937059086337" height="300" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      url: 'https://www.linkedin.com/feed/update/urn:li:share:7208711937059086337',
    },
    {
      id: 3,
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7208405784496414720" height="300" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      url: 'https://www.linkedin.com/feed/update/urn:li:share:7208405784496414720',
    },
  ];

  const linkedInProfileUrl = 'https://www.linkedin.com/in/tarunjawlajaipur/'; // Replace with your LinkedIn profile URL

  return (
    <Box className="linkedin-posts-container" p={4}>
      <Heading
        mb={4}
        mt="3em"
        fontSize="4xl"
        textAlign="center"
        fontFamily="Poppins, sans-serif"
        fontWeight="600"
        className="code-editor-heading"
      >
        Recent LinkedIn Posts
      </Heading>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={20}>
        {posts.map((post) => (
          <EmbeddedPost key={post.id} post={post} />
        ))}
      </Box>
      <Box textAlign="center" mt={6}>
        <Link href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer">
          <Button
            colorScheme="teal"
            variant="solid"
            size="lg" // Larger size
            _hover={{ bg: 'teal.600' }} // Change background color on hover
          >
            View More on LinkedIn
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default LinkedInPosts;
