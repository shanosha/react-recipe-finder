import React, { useState } from "react";
import SearchForm from "./SearchForm";
import RecipeList from "./RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      setRecipes(data.meals || []); // empty array if no results
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>🍽 Recipe Finder</h1>
      <SearchForm onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
