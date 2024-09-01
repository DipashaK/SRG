import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"> {/* Dark semi-transparent overlay */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700"
          >
            &times;
          </button>
        </div>
        <div>{content}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
