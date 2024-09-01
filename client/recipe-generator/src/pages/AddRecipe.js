import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../css/AddRecipe.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AddRecipeModal from '../components/AddRecipeModal';  // Ensure correct import

const AddRecipe = () => {
  const [recipes, setRecipes] = useState(() => JSON.parse(localStorage.getItem('myRecipes')) || []);

  const handleAddRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    localStorage.setItem('myRecipes', JSON.stringify(updatedRecipes));
  };

  return (
    <div className="App flex flex-col h-full">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow flex justify-center items-center">
          <div className="text-center">
            <h1 style={{ backgroundColor: '#fef3e0' }}>Add Recipe</h1>
            <button
              type="button"
              id="add-file-btn"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              + Add File
            </button>
            <AddRecipeModal onSave={handleAddRecipe} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
