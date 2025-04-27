import React, { useState } from "react";
import "./MainMenu.css";

const PhoneTooltip = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <span
      className="hint_text"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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