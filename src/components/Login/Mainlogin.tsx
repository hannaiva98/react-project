import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { login } from "../../redux/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import backgroundImage from "./img/BG Shape Content.png";
import { auth } from "../../../firebase"; 

interface LoginWrapperProps {
  bg: string;
}

const LoginWrapper = styled.main<LoginWrapperProps>`
  background-image: url(${props => props.bg});
  display: inline-block;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 820px;
  opacity: 0.87;
`;

const LoginUp = styled.div`
  width: 469px;
  height: 55px;
  margin: 155px 485px 0 485px;
  text-align: center;
`;

const LoginUpText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 50px;
  line-height: 55px;
  letter-spacing: 1.65px;
  color: #35B8BE;
  margin: 0;
`;

const LoginCenter = styled.form`
  width: 695px;
  height: 283px;
  margin: 53px 378px 0 378px;
  border: 1px solid rgba(53, 184, 190, 0.15);
  border-radius: 6px;
  background-color: #ffffff;
`;

const LoginCenterUserInf = styled.div`
  display: flex;
`;

const LoginCenterUser = styled.label`
  display: block;
  width: 100px;
  height: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.6px;
  color: #08090A;
  margin-top: 49.91px;
  margin-left: 67px;
`;

const LogininputName = styled.input`
  margin-left: 30px;
  width: 430px;
  height: 45px;
  margin-top: 36.91px;
  border: 1px solid #DDDDDD;
  border-radius: 6px;
  background-color: #FAFAFA;
  opacity: 0.15px;
  padding: 0;

  &::placeholder {
    width: 125px;
    height: 27px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 0.36px;
    text-align: center;
    color: #000000;
  }
`;

const LoginCenterPassword = styled.label`
  display: block;
  width: 90px;
  height: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.6px;
  color: #08090A;
  margin-top: 35.09px;
  margin-left: 67px;
`;

const LogininputPassword = styled.input`
  margin-left: 40px;
  width: 430px;
  height: 45px;
  margin-top: 25px;
  border: 1px solid #DDDDDD;
  border-radius: 6px;
  background-color: #FAFAFA;
  opacity: 0.15px;
  padding: 0;

  &::placeholder {
    width: 180px;
    height: 27px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 0.36px;
    text-align: center;
    color: #000000;
  }
`;

const Buttons = styled.div`
  margin-top: 37px;
  display: flex;
`;

const ButtonSubmit = styled.button`
  width: 147px;
  height: 52px;
  margin-left: 186px;
  border: none;
  border-radius: 6px;
  background-color: #35b8be;

  p {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0%;
    margin: 0;
    color: #ffffff;
  }
`;

const ButtonCancel = styled.button`
  width: 132px;
  height: 52px;
  margin-left: 30px;
  border: 1px solid rgba(97, 114, 131, 0.2);
  background-color: #ffffff;
  border-radius: 6px;

  p {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0%;
    margin: 0;
    color: #222222;
  }
`;

const MainLogin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Пожалуйста, введите email и пароль.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(login(email));
      alert("Вы вошли в систему!");
      navigate("/privateuser");
    } catch (error: any) {
      console.error("Ошибка входа в Firebase:", error.message);
      alert("Ошибка входа: " + error.message);
    }
  };

  const handleCancel = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <LoginWrapper bg={backgroundImage}>
      <LoginUp>
        <LoginUpText>Log in</LoginUpText>
      </LoginUp>
      <LoginCenter onSubmit={handleSubmit}>
        <LoginCenterUserInf>
          <LoginCenterUser htmlFor="email">Email</LoginCenterUser>
          <LogininputName
            id="email"
            type="email"
            placeholder="UserName"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </LoginCenterUserInf>
        <LoginCenterUserInf>
          <LoginCenterPassword htmlFor="password">Password</LoginCenterPassword>
          <LogininputPassword
            id="password"
            type="password"
            placeholder="********************"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </LoginCenterUserInf>
        <Buttons>
          <ButtonSubmit type="submit">
            <p>Submit</p>
          </ButtonSubmit>
          <ButtonCancel type="button" onClick={handleCancel}>
            <p>Cancel</p>
          </ButtonCancel>
        </Buttons>
      </LoginCenter>
    </LoginWrapper>
  );
};

export default MainLogin;