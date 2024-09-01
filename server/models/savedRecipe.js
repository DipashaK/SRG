const mongoose = require('mongoose');

const savedRecipeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  image: { type: String },
  instructions: { type: String }
}, { timestamps: true });

const SavedRecipe = mongoose.model('SavedRecipe', savedRecipeSchema);

module.exports = SavedRecipe;
