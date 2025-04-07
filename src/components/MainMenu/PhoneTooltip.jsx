import React, { useState } from "react";
import "./MainMenu.css";

const PhoneTooltip = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hint_text">
      phone
      {isHovered && (
        <div className="hovered-text">
          Tel: 8 000 000 0000
        </div>
      )
      }
    </span>
  );
};

export default PhoneTooltip;