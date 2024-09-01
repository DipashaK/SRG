import React from "react";

const NotificationModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-notification">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-4">
        <h3 className="text-lg font-semibold mb-2">Recipe Saved</h3>
        <p>Your recipe has been saved! You can view it in the Generated Recipes section.</p>
        <button 
          onClick={onClose} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;
