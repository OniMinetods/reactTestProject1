import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // Импорт функции App() из App.jsx

// Файл-сборщик, передается в index.html
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
