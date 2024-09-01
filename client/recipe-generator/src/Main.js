import React, { useEffect, useRef, useState } from "react";
import "./css/App.css";
import RecipeCard from "./components/RecipeCard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import NotificationModal from "./components/NotificationModal";
import axios from "axios";

function Main() {
  const [recipeData, setRecipeData] = useState(null);
  const [recipeText, setRecipeText] = useState("");
  const [recipeImage, setRecipeImage] = useState("");
  const [error, setError] = useState("");
  const [showRecipeBox, setShowRecipeBox] = useState(false);
  const [voices, setVoices] = useState([]);
  const [voiceSelect, setVoiceSelect] = useState(null);
  const [isReadingAloud, setIsReadingAloud] = useState(false);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true); // Added state for sidebar visibility

  const loadSavedRecipes = () => {
    const recipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    setSavedRecipes(Array.isArray(recipes) ? recipes : []);
  };

  useEffect(() => {
    loadSavedRecipes();
  }, []);

  const saveRecipe = async () => {
    if (!recipeText || !recipeImage) return;

    try {
      await axios.post("http://localhost:3005/recipe", {
        title: recipeText.split("\n\n")[0],
        image: recipeImage,
        instructions: recipeText,
      });
      const updatedSavedRecipes = Array.isArray(savedRecipes)
        ? [...savedRecipes, { image: recipeImage, title: recipeText.split("\n\n")[0], instructions: recipeText }]
        : [{ image: recipeImage, title: recipeText.split("\n\n")[0], instructions: recipeText }];

      setSavedRecipes(updatedSavedRecipes);
      localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedRecipes));
      setShowSaveModal(true);
    } catch (error) {
      console.error("Error saving recipe to backend:", error);
      setError("Failed to save recipe. It might already exist.");
    }
  };

  let eventSourceRef = useRef(null);
  let wordIndex = useRef(0);
  let words = useRef([]);
  let speechSynthesisRef = useRef(null);

  useEffect(() => {
    closeEventStream();
  }, []);

  useEffect(() => {
    if (recipeData) {
      closeEventStream();
      initializeEventStream();
    }
  }, [recipeData]);

  useEffect(() => {
    const updateVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        setVoiceSelect(availableVoices[0]);
      }
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }, []);

  const initializeEventStream = () => {
    const recipeInputs = { ...recipeData };
    const queryParams = new URLSearchParams(recipeInputs).toString();
    const url = `http://localhost:3005/recipeStream?${queryParams}`;
    eventSourceRef.current = new EventSource(url);

    eventSourceRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);

      if (data.action === "close") {
        closeEventStream();
      } else if (data.action === "chunk") {
        const cleanedText = removeHtmlTags(data.chunk);
        words.current = words.current.concat(cleanedText.split(" "));
        displayNextWord();
        if (data.image) {
          setRecipeImage(data.image);
        }
      }
    };

    eventSourceRef.current.onerror = () => {
      setError("Error fetching recipe data.");
      closeEventStream();
    };
  };

  const displayNextWord = () => {
    if (wordIndex.current < words.current.length) {
      setRecipeText((prev) => prev + words.current[wordIndex.current] + " ");
      wordIndex.current += 1;
      setTimeout(displayNextWord, 200); 
    }
  };

  const closeEventStream = () => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
  };

  const removeHtmlTags = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const onSubmit = (data) => {
    setRecipeText("");
    setRecipeImage("");
    setError("");
    setRecipeData(data);
    setShowRecipeBox(true);
    wordIndex.current = 0; 
    words.current = []; 
  };

  const readAloud = () => {
    if (!recipeText || !voiceSelect) return;

    if (isReadingAloud) {
      window.speechSynthesis.cancel();
      setIsReadingAloud(false);
    } else {
      const speech = new SpeechSynthesisUtterance();
      speech.text = recipeText;
      speech.voice = voiceSelect;
      speechSynthesisRef.current = window.speechSynthesis.speak(speech);
      setIsReadingAloud(true);
    }
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="App flex flex-col h-full">
      <Navbar className="z-navbar"/>
      <div className="flex flex-grow">
        {sidebarVisible && <Sidebar />}
        <div className="flex flex-col flex-1 p-6">
          <div className="flex flex-row h-full my-4 gap-2 justify-center">
            <RecipeCard onSubmit={onSubmit} />
            {showRecipeBox && (
              <div className="fixed inset-0 flex items-center justify-center z-modal">
                <div className="recipe-box w-[90%] max-w-[1200px] h-[600px] text-xs text-gray-600 p-6 border rounded-lg shadow-xl flex flex-col">
                  <h2 className="text-2xl font-bold text-center mb-4">
                    {recipeText ? recipeText.split("\n\n")[0] : "Recipe"}
                  </h2>
                  <div className="flex flex-row flex-1 gap-6">
                    <div className="flex-1 text-left">
                      {error && <p className="text-red-500">{error}</p>}
                      {recipeText && <p>{recipeText}</p>}
                    </div>
                    {recipeImage && (
                      <div className="flex-1 text-right">
                        <img
                          src={recipeImage}
                          alt="Recipe"
                          className="max-h-[400px] rounded"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col mt-4 space-y-4">
                    <label htmlFor="voiceSelect" className="block text-lg font-semibold mb-2">
                      Select Voice:
                    </label>
                    <select
                      id="voiceSelect"
                      value={voiceSelect ? voiceSelect.name : ""}
                      onChange={(e) => {
                        const selectedVoice = voices.find(voice => voice.name === e.target.value);
                        setVoiceSelect(selectedVoice);
                      }}
                      className="p-2 border border-gray-300 rounded"
                    >
                      {voices.map(voice => (
                        <option key={voice.name} value={voice.name}>
                          {voice.name} ({voice.lang})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-end mt-4 space-x-4">
                    <button
                      onClick={saveRecipe}
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Save Recipe
                    </button>
                    <button
                      onClick={readAloud}
                      className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      {isReadingAloud ? "Stop Reading" : "Read Aloud"}
                    </button>
                    <button
                      onClick={() => setShowRecipeBox(false)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
            <NotificationModal
              isVisible={showSaveModal}
              onClose={() => setShowSaveModal(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;