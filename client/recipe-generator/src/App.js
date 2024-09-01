import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Main from "./Main";
import GeneratedRecipes from "./pages/GeneratedRecipes";
import Login from "./pages/LoginSignup";
import { UserProvider } from './components/UserContext';
import AddRecipe from "./pages/AddRecipe";
import MyRecipes from "./pages/MyRecipe";
// import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <UserProvider>
    <Router>
          <Routes>
          {/* <Route path="/" element={<LandingPage/>}/> */}
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/generated-recipes" element={<GeneratedRecipes />} />
            <Route path="/add" element={<AddRecipe/>} />
            <Route path="/my" element={<MyRecipes/>} />
          </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;