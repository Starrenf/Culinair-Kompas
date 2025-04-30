
import {
  Box,
  Input,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Badge,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function RecipeListPage({ recipes, searchTerm, setSearchTerm }) {
  const normalize = str => str.toLowerCase().replace(/\s+/g, '-');
  return (
    <Box p={6}>
      <Heading mb={4}>Receptenoverzicht</Heading>
      <Input
        placeholder="Zoek op naam of label..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={6}
      />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {recipes.map((recipe) => (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} key={recipe.label}><LinkBox borderWidth="1px" p={4} rounded="2xl" shadow="md" transition="all 0.3s ease" _hover={{ shadow: "xl", transform: "scale(1.02)" }}>
            <Image src={recipe.image} alt={recipe.label} borderRadius="lg" mb={3} objectFit="cover" height="200px" width="100%" transition="transform 0.3s ease" _hover={{ transform: "scale(1.05)" }} />
            <LinkOverlay as={Link} to={`/recipe/${normalize(recipe.label)}`}>
              <Heading size="md">{recipe.label}</Heading>
            </LinkOverlay>
            <Text mt={2}>Meal: {recipe.mealType?.join(', ')}</Text>
            <Text>Dish: {recipe.dishType?.join(', ')}</Text>
            {recipe.dietLabels.map(label => (
              <Badge key={label} colorScheme="green" mr={1}>{label}</Badge>
            ))}
            {recipe.cautions.map(c => (
              <Badge key={c} colorScheme="red" mr={1}>{c}</Badge>
            ))}
          </LinkBox>
</motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default RecipeListPage;
