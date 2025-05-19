import React, { useState } from "react";
import "./MainMenu.css";

const PhoneTooltip: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <span
      className="hint_text"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      phone
      {isHovered && <div className="hovered-text">Tel: 8 000 000 0000</div>}
    </span>
  );
};

export default PhoneTooltip;
