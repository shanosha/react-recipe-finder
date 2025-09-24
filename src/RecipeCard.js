import React from "react";

function RecipeCard({ recipe }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <div style={{ padding: "10px" }}>
        <h3>{recipe.strMeal}</h3>
        <p><strong>Category:</strong> {recipe.strCategory}</p>
        <p><strong>Area:</strong> {recipe.strArea}</p>
        <a href={recipe.strSource || "#"} target="_blank" rel="noreferrer">View Recipe</a>
      </div>
    </div>
  );
}

export default RecipeCard;
