import React, { Component } from "react";
import "./MainMenu.css";

class PhoneTooltip extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHovered: false,
    };
  }
  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { isHovered } = this.state;
  return (
    <span
      className="hint_text"
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
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
}
}

export default PhoneTooltip;