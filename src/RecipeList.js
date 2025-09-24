import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  if (!recipes.length) {
    return <p style={{ textAlign: "center" }}>No recipes found.</p>;
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "16px"
    }}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
