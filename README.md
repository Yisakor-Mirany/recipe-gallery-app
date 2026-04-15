# Recipe Gallery App

A simple, beginner-friendly **React + Vite** project that displays a gallery
of recipe images. Users can browse through the recipes one at a time using
**Previous** and **Next** buttons.

This project was built to practice **React functional components**, the
**useState hook**, and **conditional rendering** (boundary checks).

---

## Features

- Displays one recipe image at a time
- Shows a short description of each recipe
- **Next** and **Previous** navigation buttons
- Buttons become **disabled** at the first and last image
- Image counter (e.g. `3 / 6`)
- Clean, modern, responsive design
- Beginner-friendly code with helpful comments

---

## Technologies Used

- [React](https://react.dev/) (functional components + `useState`)
- [Vite](https://vitejs.dev/) (fast build tool and dev server)
- Plain **CSS** for styling
- **JavaScript (ES6+)**

---

## Folder / File Overview

```
recipe-gallery-app/
├── index.html            # HTML entry point
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
├── README.md             # This file
└── src/
    ├── main.jsx          # React entry point
    ├── App.jsx           # Root App component
    ├── Gallery.jsx       # Gallery component (main logic)
    └── index.css         # All styles for the app
```

---

## How to Install and Run

Make sure you have **Node.js** (v18 or higher) installed.

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/recipe-gallery-app.git
   cd recipe-gallery-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open the link printed in the terminal (usually `http://localhost:5173`).

5. **Build for production** (optional)

   ```bash
   npm run build
   npm run preview
   ```

---

## How to Use the Gallery

1. Open the app in your browser.
2. You will see the first recipe image and its description.
3. Click **Next →** to move forward through the recipes.
4. Click **← Previous** to move back.
5. The **Previous** button is disabled on the first image.
6. The **Next** button is disabled on the last image.
7. The counter at the bottom (e.g. `2 / 6`) tells you which image you are on.

---

## Screenshot

> _Add a screenshot of the running app here._

```
![Recipe Gallery Screenshot](./screenshot.png)
```

---

## GitHub Submission Note

This project is submitted as part of a React learning assignment.
All source code is available in this repository. To review the project:

1. Clone the repository.
2. Run `npm install` then `npm run dev`.
3. Open the local URL in your browser to explore the gallery.

Thank you for reviewing my project!
