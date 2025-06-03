import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Figure = styled.div`
  padding-top: 100px;
  padding-left: 120px;
  display: flex;
`;

const MainLeft = styled.div`
  padding-top: 43.06px;
  width: 600px;
`;

const FirstMainBlock = styled.p`
  width: 606px;
  margin: 0;
  padding-top: 13.94px;
  font-family: 'Inter', sans-serif;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 1.8px;
  color: #08090a;
`;

const BlueText = styled.span`
  color: #35B8BE;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 1.8px;
  font-family: 'Inter', sans-serif;
`;

const SecondMainBlock = styled.p`
  width: 539px;
  margin: 0;
  padding-top: 27px;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 24.12px;
  letter-spacing: 0.36px;
  color: #546285;
`;

const MainButton = styled.button`
  width: 193px;
  height: 60px;
  margin-top: 53px;
  padding: 19px 35px;
  border: none;
  border-radius: 6px;
  background-color: #35b8be;
  opacity: 0.5;
  cursor: not-allowed;

  p {
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    margin: 0;
    color: #ffffff;
  }
`;

const ScoreText = styled.div`
  padding-top: 30.06px;
`;

const HardcodedStars = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: #35b8be;
  margin: 0;
`;

const LogoScoreText = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`;

const ThirdMainBlock = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: #08090a;
  margin: 0 0 0 5px;
`;

const MainRight = styled.div``;

const Panels: React.FC = () => {
  const {
    firstBlockText,
    secondBlockText,
    buttonDisabled,
    rating,
    reviews,
    mainImage,
    logoStars,
  } = useSelector((state: RootState) => state.mainContent);

  return (
    <Figure>
      <MainLeft>
        <FirstMainBlock>
          {firstBlockText.split("delivered")[0]}
          <BlueText>delivered</BlueText>
          {firstBlockText.split("delivered")[1]}
        </FirstMainBlock>

        <SecondMainBlock>{secondBlockText}</SecondMainBlock>

        <MainButton disabled={buttonDisabled}>
          <p>Place an Order</p>
        </MainButton>

        <ScoreText>
          <img src={logoStars} alt="Trustpilot logo with stars" />
          <LogoScoreText>
            <HardcodedStars>{rating}&nbsp;</HardcodedStars>
            <ThirdMainBlock>{reviews}</ThirdMainBlock>
          </LogoScoreText>
        </ScoreText>
      </MainLeft>
      <MainRight>
        <img src={mainImage} alt="MainPic" />
      </MainRight>
    </Figure>
  );
};

export default Panels;
