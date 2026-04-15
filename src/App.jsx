import Gallery from "./Gallery.jsx";

// The App component is the root of our React application.
// It simply renders the Gallery component inside a page wrapper.
function App() {
  return (
    <div className="app">
      <Gallery />
      <footer className="footer">
        Made with React + Vite · Beginner Project
      </footer>
    </div>
  );
}

export default App;
