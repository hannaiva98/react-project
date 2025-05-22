import React from "react";
import { useNavigate } from "react-router-dom";
import MainLogin from "./Mainlogin";

const MainLoginWrapper = () => {
  const navigate = useNavigate();
  return <MainLogin navigate={navigate} />;
};

export default MainLoginWrapper;
