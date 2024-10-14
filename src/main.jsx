import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";

// Select the root element
const rootElement = document.getElementById("root");

// Create a root for the application
const root = createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
