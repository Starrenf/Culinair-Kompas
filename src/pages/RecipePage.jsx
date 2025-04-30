// RecipeDetail.jsx

import { useParams, Link } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Image,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const [openIndex, setOpenIndex] = useState(0);

  const normalize = str => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const normalizedId = normalize(id);

  const recipe = recipes.find(
    r => normalize(r.label) === normalizedId
  );

  if (!recipe) return <Text className="text-center p-10">Recept niet gevonden.</Text>;

  const nutrients = [
    { label: "Calorieën", key: "ENERC_KCAL" },
    { label: "Eiwitten", key: "PROCNT" },
    { label: "Vetten", key: "FAT" },
    { label: "Zout", key: "NA" },
  ];

  return (
    <Box maxW="4xl" mx="auto" p={6}>
      <Link to="/recepten" className="text-blue-600 hover:underline">← Terug naar Recepten</Link>
      {recipe.image && (
        <Image
          src={recipe.image}
          alt={recipe.label}
          borderRadius="lg"
          my={4}
          objectFit="cover"
          maxH="300px"
          width="100%"
        />
      )}
      <Heading mb={4}>{recipe.label}</Heading>

      <VStack align="start" spacing={3} mb={6}>
        <Text><strong>Tijd:</strong> {recipe.totalTime || 'Onbekend'} minuten</Text>
        <Text><strong>Porties:</strong> {recipe.yield || 'Onbekend'}</Text>
        <Text><strong>Maaltijdtype:</strong> {recipe.mealType?.join(", ") || 'Onbekend'}</Text>
        <Text><strong>Gerechtsoort:</strong> {recipe.dishType?.join(", ") || 'Onbekend'}</Text>
      </VStack>

      <Accordion allowMultiple defaultIndex={[0]}>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">Ingrediënten</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <List spacing={1}>
              {recipe.ingredientLines.map((line, i) => (
                <ListItem key={i}>• {line}</ListItem>
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">Gezondheidslabels</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            {recipe.healthLabels.length > 0 ? (
              recipe.healthLabels.map((label, i) => (
                <Badge key={i} colorScheme="green" mr={1}>{label}</Badge>
              ))
            ) : (
              <Text>Geen gezondheidslabels</Text>
            )}
          </AccordionPanel>
        </AccordionItem>

        {recipe.cautions.length > 0 && (
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Waarschuwingen</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {recipe.cautions.map((caution, i) => (
                <Badge key={i} colorScheme="red" mr={1}>{caution}</Badge>
              ))}
            </AccordionPanel>
          </AccordionItem>
        )}

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">Voedingswaarden</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Naam</Th>
                  <Th>Hoeveelheid</Th>
                </Tr>
              </Thead>
              <Tbody>
                {nutrients.map(({ label, key }) => {
                  const nutrient = recipe.totalNutrients[key];
                  return nutrient ? (
                    <Tr key={key}>
                      <Td>{label}</Td>
                      <Td>{Math.round(nutrient.quantity)} {nutrient.unit}</Td>
                    </Tr>
                  ) : null;
                })}
              </Tbody>
            </Table>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default RecipeDetail;
