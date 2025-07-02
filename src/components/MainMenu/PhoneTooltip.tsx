import React, { useState } from "react";
import "./MainMenu.css";

interface PhoneTooltipProps {
  theme: "dark" | "light";
}

const PhoneTooltip: React.FC<PhoneTooltipProps> = ({ theme }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`hint_text ${theme}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer", position: "relative" }}
    >
      phone
      {isHovered && (
        <div
          className={`hovered-text ${theme}`}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: theme === "dark" ? "#35b8be" : "#28224b",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "4px",
            whiteSpace: "nowrap",
            zIndex: 10,
          }}
        >
          Tel: 8 000 000 0000
        </div>
      )}
    </span>
  );
};

export default PhoneTooltip;
