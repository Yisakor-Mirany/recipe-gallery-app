import { useState } from "react";

// A list of recipe images.
// Each object has an id, a url (image link), and a description.
// These are real food photos from Unsplash.
const recipes = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
    description: "Classic Margherita Pizza with fresh basil and mozzarella.",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800",
    description: "Creamy Spaghetti Carbonara topped with parmesan cheese.",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    description: "Fresh garden salad with colorful seasonal vegetables.",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    description: "Juicy grilled burger with lettuce, tomato, and cheddar.",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    description: "Healthy grain bowl with avocado, chickpeas, and greens.",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800",
    description: "Warm chocolate chip cookies fresh from the oven.",
  },
];

function Gallery() {
  // currentIndex keeps track of which recipe image is currently visible.
  // It starts at 0 (the first image in the list).
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get the current recipe using the index.
  const currentRecipe = recipes[currentIndex];

  // Go to the previous image, but never below index 0.
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Go to the next image, but never past the last index.
  const handleNext = () => {
    if (currentIndex < recipes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Boundary flags used to disable the buttons at the edges.
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === recipes.length - 1;

  return (
    <div className="gallery">
      <h1 className="gallery-title">Recipe Gallery</h1>
      <p className="gallery-subtitle">
        Browse delicious recipes one dish at a time.
      </p>

      {/* Image card showing the current recipe */}
      <div className="image-card">
        <img
          src={currentRecipe.url}
          alt={currentRecipe.description}
          className="recipe-image"
        />
        <p className="recipe-description">{currentRecipe.description}</p>
      </div>

      {/* Previous and Next buttons with boundary checks */}
      <div className="button-row">
        <button
          onClick={handlePrevious}
          disabled={isFirst}
          className="nav-button"
        >
          ← Previous
        </button>

        <span className="counter">
          {currentIndex + 1} / {recipes.length}
        </span>

        <button
          onClick={handleNext}
          disabled={isLast}
          className="nav-button"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default Gallery;
