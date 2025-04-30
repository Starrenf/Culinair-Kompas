import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import data from "./data";
import { Box, Heading, ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  const [recipes] = useState(data.hits.map(hit => hit.recipe));
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ChakraProvider>
      <Router>
      <Header />


        <Box as="main" p={4}>
          <Routes>
          <Route path="/contact" element={<ContactPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/over-ons" element={<AboutPage />} />
            <Route path="/recepten" element={
              <RecipeListPage
                recipes={recipes.filter(recipe =>
                  recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
                )}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            } />
            <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
