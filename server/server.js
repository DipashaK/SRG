// // server.js (Express Backend)
// const express = require('express');
// const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const path = require('path');
// const db = require('./middlewares/dB');
// const user = require('./controllers/userController');
// const recipe = require('./controllers/recipeController');


// const app = express();
// const SECRET_KEY = process.env.JWT_SECRET || 'g15-2022-batch-2024-bee-2026';

// // Middlewares
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Initialize Database
// db();

// // Authorization Middleware
// const authorize = (req, res, next) => {
//   const token = req.headers['authorization'];
//   if (!token) {
//     return res.status(409).json({ message: 'Token not available' });
//   }
//   try {
//     const decoded = jwt.verify(token, SECRET_KEY);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(409).json({ message: 'Invalid Token' });
//   }
// };

// // Routes
// app.post('/signup', user.userRegister);
// app.post('/login', user.userLogin); 
// app.use('/recipes', recipe.saveRecipe);
// app.use('/saveRecipe', recipe.getSavedRecipes);
// app.get("/recipeStream", recipe.streamRecipes); 

// // Start Server
// app.listen(3005, () => {
//   console.log("Server started at 3005");
// });



const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const path = require('path');
const db = require('./middlewares/dB');
const user = require('./controllers/userController');
const recipe = require('./controllers/recipeController');

const app = express();
const SECRET_KEY = process.env.JWT_SECRET || 'g15-2022-batch-2024-bee-2026';

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Database
db();

// Routes
app.post('/signup', user.userRegister);
app.post('/login', user.userLogin);
app.get("/recipeStream", recipe.streamRecipes); 
app.post("/recipe", recipe.createRecipe);
app.get("/getrecipes", recipe.getAllRecipes);


// Start Server
app.listen(3005, () => {
  console.log("Server started at 3005");
});
