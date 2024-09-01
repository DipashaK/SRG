const axios = require('axios');
const express = require('express');
const recipe = require('../models/recipeModel')

// Stream Recipes from Spoonacular API
const streamRecipes = async (req, res) => {
  const { ingredients, number = 1 } = req.query; 

  if (!ingredients) {
    res.write(`data: ${JSON.stringify({ action: "chunk", chunk: "Ingredients parameter is required." })}\n\n`);
    res.write(`data: ${JSON.stringify({ action: "close" })}\n\n`);
    return;
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const SPOONACULAR_API_KEY = "0dccbc6d37ec44b0bc074a5d92a8fa6f"; // Use environment variable for API key
  const searchUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${SPOONACULAR_API_KEY}`;

  const searchParams = {
    ingredients: ingredients,
    number: number,
  };

  try {
    const searchResponse = await axios.get(searchUrl, { params: searchParams });
    console.log("Search API Response:", searchResponse.data);

    const results = searchResponse.data || [];

    if (results.length > 0) {
      for (const recipe of results) {
        const detailsUrl = `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${SPOONACULAR_API_KEY}`;
        try {
          const detailsResponse = await axios.get(detailsUrl);
          console.log("Details API Response:", detailsResponse.data);

          const instructions = detailsResponse.data.instructions || "Instructions not available.";
          const recipeData = {
            action: "chunk",
            chunk: `Recipe: ${recipe.title}\n\nInstructions:\n${instructions}\n\n`,
            image: recipe.image,
          };

          res.write(`data: ${JSON.stringify(recipeData)}\n\n`);
        } catch (detailsError) {
          console.error(`Error fetching details for recipe ID ${recipe.id}:`, detailsError.response ? detailsError.response.data : detailsError.message);
          res.write(`data: ${JSON.stringify({ action: "chunk", chunk: `Error fetching details for recipe: ${recipe.title}` })}\n\n`);
        }
      }
    } else {
      res.write(`data: ${JSON.stringify({ action: "chunk", chunk: "No recipes found." })}\n\n`);
    }
    res.write(`data: ${JSON.stringify({ action: "close" })}\n\n`);
  } catch (error) {
    console.error("Error fetching data from Spoonacular API:", error.response ? error.response.data : error.message);
    res.write(`data: ${JSON.stringify({ action: "chunk", chunk: "Error fetching recipes." })}\n\n`);
    res.write(`data: ${JSON.stringify({ action: "close" })}\n\n`);
  }

  req.on("close", () => {
    res.end();
  });
};

const createRecipe = async (req, res) => {
  try {
    const { title, image, instructions } = req.body;

    if (!title || !image || !instructions) {
      return res.status(400).json({ message: 'Please provide all details' });
    }

    console.log('inputData', req.body);

    // Check if a recipe with the same title already exists
    const existingRecipe = await recipe.findOne({ title });

    if (existingRecipe) {
      return res.status(409).json({ message: 'Recipe already exists' });
    }

    // Create a new recipe
    const newRecipe = new recipe({
      title,
      image,
      instructions
    });

    await newRecipe.save();

    res.status(201).json({ message: 'Recipe created successfully', recipe: newRecipe });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const getAllRecipes = async (req, res) => {
  try {
      const Recipe = await recipe.find();
      return res.status(200).json(Recipe);
  } catch (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
  }
};



module.exports =  { streamRecipes, getAllRecipes, createRecipe}