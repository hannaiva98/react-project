import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MainLoginWrapper from "./pages/Login";
import Header from "./components/Header/Header";
import TestFetchComponent from "./components/TestFetchComponent";
import PrivateUser from "./components/Login/PrivateUser";
import PrivateRoute from "./components/Login/PrivateRoute";


const AppContainer = styled.div`
  background: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0px;
  margin: 0;
  padding: 0;
`;

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <AppContainer>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu setCartCount={setCartCount} />} />
        <Route path="/login" element={<MainLoginWrapper />} />
        <Route path="/privateuser" element={ 
          <PrivateRoute>
            <PrivateUser />
          </PrivateRoute>
                  }
        />
      </Routes>
      <TestFetchComponent />
    </AppContainer>
  );
};

export default App;