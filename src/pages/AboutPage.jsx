import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function AboutPage() {
  return (
    <Box
      minHeight="100vh"
      backgroundImage="url('/images/about-bg.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={8}
    >
      <Box
        bg="whiteAlpha.900"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        maxW="800px"
        width="100%"
      >
        <VStack spacing={4} align="start">
          <Heading as="h1" size="xl" color="blue.700">
            Over ons
          </Heading>
          <Text fontSize="lg">
            Welkom bij Culinair Kompas! Wij zijn een team van gepassioneerde foodies die het leuk vinden om heerlijke,
            gezonde en creatieve recepten met jou te delen.
          </Text>
          <Text fontSize="lg">
            Onze missie is om koken toegankelijk te maken voor iedereen — of je nu een beginnende kok bent of een ervaren
            chef. Je vindt bij ons recepten voor elk moment van de dag, met aandacht voor duurzaamheid en smaak.
          </Text>
          <Text fontSize="lg">
            Heb je vragen of suggesties? Laat het ons weten via de contactpagina!
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default AboutPage;

