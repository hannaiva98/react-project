import React, { Component } from "react";
import styled from "styled-components";
import Panels from "./Panels";
import backgroundImage from "./img/mainfigure.png";

const Main = styled.main`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 820px;
  opacity: 87%;
`;

class MainContent extends Component {
  render() {
    return (
      <Main>
        <Panels />
      </Main>
    );
  }
}

export default MainContent;