
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AnimatedCursor from "react-animated-cursor"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <AnimatedCursor
innerSize={12}
outerSize={40}
color="0, 174, 255" 
outerAlpha={0.3}
innerScale={0.7}
outerScale={2}
 
/>
  </StrictMode>
);

