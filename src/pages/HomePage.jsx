
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Box
      bgImage="url('/images/homepage.jpg')"
      bgSize="cover"
      bgPosition="center"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <VStack spacing={6} textAlign="center" bg="whiteAlpha.800" p={6} borderRadius="lg">
        <Heading size="2xl" color="blue.500">
          Welkom bij Mijn Receptenboek
        </Heading>
        <Text fontSize="lg" color="gray.700">
          Ontdek gezonde, heerlijke en gevarieerde recepten. Zoek, bekijk en ga aan de slag!
        </Text>
        <Button
          as={Link}
          to="/recepten"
          size="lg"
          colorScheme="blue"
          variant="solid"
        >
          Naar de Recepten
        </Button>
      </VStack>
    </Box>
  );
}

export default HomePage;
