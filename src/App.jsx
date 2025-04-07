import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";



function App() {
  return (
    <div className="body-style">
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/menu" element={<Menu />} /> 
      </Routes>
      </div>
  );
}

export default App;

const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);
