import React from "react";
import styled from "styled-components";
import FooterInf from "./FooterInf";
import backgroundImage from "./img/image6.png";

const FooterStyled = styled.footer`
  width: 100%;
  min-height: 593px;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterInf />
    </FooterStyled>
  );
};

export default Footer;
