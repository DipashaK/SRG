import React, { useState } from 'react';

const AddRecipeModal = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSave = () => {
    const newRecipe = {
      title,
      ingredients,
      description,
      image: image ? URL.createObjectURL(image) : null,
    };

    if (onSave) {
      onSave(newRecipe);
    } else {
      console.error("onSave function is not defined.");
    }
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add Recipe</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ing" className="form-label">Ingredients</label>
                <input
                  type="text"
                  className="form-control"
                  id="ing"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="des" className="form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="des"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fileUpload" className="form-label">Upload Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="fileUpload"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
              data-bs-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeModal;
