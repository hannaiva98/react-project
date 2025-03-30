import React from "react";
import './App.css'

const items = ["Mathematics", "Informatics", "PH", "Biology", "Chemistry"];

function Lessons() {
  return (
    <div style={{ padding: "60px", fontFamily: "Arial" }}>
      <h2>My School lessons</h2>
      <ul>
        {items.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lessons;
