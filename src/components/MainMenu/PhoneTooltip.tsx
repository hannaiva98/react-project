import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { showTooltip, hideTooltip } from "../../redux/tooltipSlice";
import "./MainMenu.css";

const PhoneTooltip: React.FC = () => {
  const dispatch = useDispatch();
  const isHovered = useSelector((state: RootState) => state.tooltip.isHovered);

  return (
    <span
      className="hint_text"
      onMouseEnter={() => dispatch(showTooltip())}
      onMouseLeave={() => dispatch(hideTooltip())}
    >
      phone
      {isHovered && <div className="hovered-text">Tel: 8 000 000 0000</div>}
    </span>
  );
};

export default PhoneTooltip;
