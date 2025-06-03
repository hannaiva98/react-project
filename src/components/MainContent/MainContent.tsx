import React from "react";
import styled from "styled-components";
import Panels from "../../components/MainContent/Panels";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Main = styled.main<{ $backgroundImage: string }>`
  background-image: url(${(props) => props.$backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 820px;
  opacity: 0.87;
`;

const MainContent: React.FC = () => {
  const backgroundImage = useSelector(
    (state: RootState) => state.background.image
  );

  return (
    <Main $backgroundImage={backgroundImage}>
      <Panels />
    </Main>
  );
};

export default MainContent;
