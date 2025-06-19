import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import FooterInf from "./FooterInf";
import image6 from "./img/image6.png"; 

interface StyledFooterProps {
  background: string;
}

const FooterStyled = styled.footer<StyledFooterProps>`
  width: 100%;
  min-height: 593px;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Footer: React.FC = () => {
  const imageName = useSelector((state: RootState) => state.footer.backgroundImage);

  let background: string;
  try {
    background = require(`./img/${imageName}`);
  } catch {
    background = image6;
  }

  return (
    <FooterStyled background={background}>
      <FooterInf />
    </FooterStyled>
  );
};

export default Footer;
