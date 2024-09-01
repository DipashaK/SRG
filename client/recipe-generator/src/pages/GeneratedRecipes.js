import React, { useEffect, useState } from "react";
import "../css/GeneratedRecipes.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
import { FaTrash } from "react-icons/fa";

const GeneratedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const loadSavedRecipes = () => {
      const recipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
      setSavedRecipes(recipes);
    };

    loadSavedRecipes();
  }, []);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  const deleteRecipe = (index) => {
    const updatedRecipes = savedRecipes.filter((_, i) => i !== index);
    setSavedRecipes(updatedRecipes);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
  };

  return (
    <div className="App flex flex-col h-full">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="content flex flex-col p-6">
          <h2 className="text-2xl font-bold mb-4 mt-5" >Saved Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedRecipes.length === 0 ? (
              <p>No saved recipes found.</p>
            ) : (
              savedRecipes.map((recipe, index) => (
                <div key={index} className="recipe-card relative">
                  {recipe.image ? (
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="recipe-image"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                  <h3 className="recipe-title">{recipe.title || "No title available"}</h3>
                  <button
                    onClick={() => openModal(recipe)}
                    className="show-more-button"
                  >
                    View Full Recipe
                  </button>
                  <button
                    onClick={() => deleteRecipe(index)}
                    className="delete-button"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))
            )}
          </div>
          {selectedRecipe && (
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              title={selectedRecipe.title || "No title available"}
              content={
                <>
                  <p>{selectedRecipe.instructions || "No instructions available"}</p>
                </>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneratedRecipes;