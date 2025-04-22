import React, { Component } from "react";
import "./MainContent.css";
import logostar from "./img/trustpilot-logo copy.png";
import mainpic from "./img/IMAGE (5).png";


class Panels extends Component {
  render(){
  return (
    <div className="figure">
    <div className='main-left'>
      <p id="first-main-block">Beautiful food & takeaway, delivered to your door.</p>
      <p id="second-main-block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
      <button className="main-button"><p>Place an Order</p></button>
      <div className="score-text">
      <img src={logostar} alt="Logo" className='logostar'/>
      <div className='logo-score-text'>
        <p className='logo-score'>4.8 out of 5&nbsp;</p>
        <p id='third-main-block'>based on 2000+ reviews</p>
      </div>
      </div>
    </div>
    <div className='main-right'>
      <img src={mainpic} alt="MainPic"/>
    </div>
  </div>
  );
}
}

export default Panels;