import React, { useState } from "react";
import '../css/RecipeCard.css';

const RecipeCard = ({ onSubmit }) => {
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = () => {
    const recipeData = {
      ingredients,
    };
    onSubmit(recipeData);
  };

  return (
    <div className="center-container">
      <div className="recipe-card p-6 border rounded-lg shadow-xl font-fairytale transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-fairytale mb-4 text-snowLight">Search Recipes</h2>
        <label className="block mb-3">
          <span className="text-sm font-medium text-snowLight">Ingredients:</span>
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="block w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-snowLight"
            placeholder="e.g., potato, garlic"
          />
        </label>
        <button
          onClick={handleSubmit}
          className="mt-6 w-full py-2 bg-orange-300 text-lightblue font-semibold rounded-lg shadow-md "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
